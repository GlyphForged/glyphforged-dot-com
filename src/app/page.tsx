import Image from "next/image"
import styles from "./page.module.css"

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
        <a>
          <img className={styles.github_logo} src="/logos/github-mark-white.svg" alt="Github Logo"/>
          Fork me on GitHub
        </a>
        <a>
          <img className={styles.itch_logo} src="/logos/itchio-textless-white.svg" alt="Itch Logo"/>
          Play my games on Itch
        </a>
        </footer>
    </div>
  );
}
