import Image from 'next/legacy/image';
import styles from './page.module.css';
import NavCard from './_components/NavCard';
import { Footer } from './_components/Footer';

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Image
          src="/logos/gf-logo-wht.svg"
          width={512}
          height={512}
          alt="GlyphForged Logo"
        />
        <NavCard
          className={styles.navCard}
          href="/games"
          title="Games"
          summary="Games written by me or with my help."
          icon="/logos/game-console.png"
        />
        <NavCard
          className={styles.navCard}
          href="/projects"
          title="Projects"
          summary="Software projects, websites, etc."
          icon="/logos/anvil.png"
        />
        <NavCard
          className={styles.navCard}
          href="/musings"
          title="Musings"
          summary="Post-mortems, lessons learned, and other no sabo musings."
          icon="/logos/article.png"
        />
      </main>
      <Footer />
    </div>
  );
}
