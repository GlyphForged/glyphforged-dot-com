import Image from 'next/legacy/image';
import styles from './GameCard.module.css';

export default function GameCard({ game }: { game: Game }) {
  const hasThumb = Boolean(game.thumbnail);

  return (
    <article className={styles.card}>
      <h3>{game.title}</h3>
      {hasThumb && (
        <div className={styles.thumb}>
          <Image
            src={game.thumbnail}
            alt={game.alt ?? `${game.title} thumbnail`}
            layout="fill"
          />
        </div>
      )}
      <p
        className={styles.summary}
        dangerouslySetInnerHTML={{ __html: game.summary }}></p>
    </article>
  );
}
