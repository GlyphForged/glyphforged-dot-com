import Link from 'next/link';
import styles from './games.module.css';
import { Game, games } from './_data/games';

export default async function GamesIndex() {
  return (
    <div>
      <h1>Games</h1>
      <div className={styles.pageBlurb}>
        <p>
          As a part of my dev journey, I have decided to undertake the{' '}
          <a
            href="https://20gameschallenge.org/"
            target="_blank"
            rel="noopener">
            20-games challenge.
          </a>{' '}
          The goal of this challenge is to produce 20 games, each a clone of an
          existing game, ensuring a clear scope and definition of done. For the
          majority of these games, the engine of choice will be either GoDot or
          macroquad (a Rust-based game engine).
        </p>
        <p>
          While I did have 3 solo games at one time, and have recently completed
          a Game Jam game, I am not particularly happy with the first two games
          at this stage, and have plans to re-write them. As such, I have
          elected not to showcase Games 1 or 2 on this page until they are at a
          level I am happy with.
        </p>
      </div>
    </div>
  );
}
