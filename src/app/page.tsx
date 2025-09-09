import Image from "next/image";
import styles from "./page.module.css";

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
        <center>
          <h3 className={styles.comingsoon}>Coming Soon...</h3>
        </center>
      </main>
      <footer className={styles.footer}>
        <a href="https://github.com/GlyphForged" target="_blank">
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
        <a href="https://glyphforged.itch.io/" target="_blank">
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
    </div>
  );
}
