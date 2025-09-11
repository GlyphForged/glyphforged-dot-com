import styles from '../games.module.css';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import type { Metadata } from 'next';
import { getGameBySlug } from '../_data/games';
import { headers } from 'next/headers';

function isMobileUA(ua: string | null) {
  if (!ua) return false;
  return /Mobi|Android|iPhone|iPad|iPod|Windows Phone|webOS/i.test(ua);
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const g = getGameBySlug(slug);
  if (!g) return { title: 'Game not found' };
  return { title: `${g.title} - Games`, description: g.summary };
}

export default async function GamesPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const game = getGameBySlug(slug);
  if (!game) return notFound(); // Falls through to not-found.tsx

  const ua = (await headers()).get('user-agent');
  const isMobile = isMobileUA(ua);

  return (
    <article className={styles.individualGamePage}>
      <h1>{game.title}</h1>
      {isMobile ? (
        <p className={styles.mobileNotice}>
          This game wasn't designed for mobile, so the live embed is disabled
          here. Try it on desktop/laptop for the best experience.
        </p>
      ) : game.embed ? (
        <div
          className={styles.gameEmbed}
          dangerouslySetInnerHTML={{ __html: game.embed }}></div>
      ) : (
        <p>No embed yet. Coming soon...</p>
      )}
      <p
        className={styles.gameSummary}
        dangerouslySetInnerHTML={{ __html: game.summary }}></p>
      {game.sourceCode ? (
        <div className={styles.sourceCode}>
          <p>
            Source Code can be viewed <Link href={game.sourceCode}>HERE</Link>
          </p>
        </div>
      ) : (
        <></>
      )}
      <Link
        className={styles.returnLink}
        href="/games">
        Back to Games
      </Link>
    </article>
  );
}
