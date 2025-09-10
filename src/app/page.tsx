import Image from 'next/legacy/image';
import styles from './page.module.css';
import ComingSoon from './_components/coming-soon';
import { Footer } from './_components/footer';

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
        <ComingSoon />
      </main>
      <Footer />
    </div>
  );
}
