import Image from 'next/image';
import styles from '../page.module.css';

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <a
        href="https://github.com/GlyphForged"
        target="_blank"
        rel="noopener">
        <div className={styles.footer_logo}>
          <Image
            src="/logos/github-mark-white.svg"
            alt="Github Logo"
            layout="fill"
            objectFit="cover"
          />
        </div>
        Fork me on GitHub
      </a>
      <a
        href="https://glyphforged.itch.io/"
        target="_blank"
        rel="noopener">
        <div className={styles.footer_logo}>
          <Image
            src="/logos/itchio-textless-white.svg"
            alt="Itch Logo"
            layout="fill"
            objectFit="cover"
          />
        </div>
        Play my games on Itch
      </a>
    </footer>
  );
};
