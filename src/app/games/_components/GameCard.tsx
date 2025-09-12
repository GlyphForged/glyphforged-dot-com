import Image from 'next/legacy/image';
import { Game } from '../_data/games';
import styles from './GameCard.module.css';

export default function GameCard({ game }: { game: Game }) {
  const thumb = game.thumbnail;

  return (
    <article className={styles.card}>
      <h3>{game.title}</h3>
      {thumb ? (
        <div className={styles.thumb}>
          <Image
            src={thumb}
            alt={game.alt ?? `${game.title} thumbnail`}
            layout="fill"
          />
        </div>
      ) : null}
      <p
        className={styles.summary}
        dangerouslySetInnerHTML={{ __html: game.summary }}></p>
    </article>
  );
}
