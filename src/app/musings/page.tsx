import styles from './musings.module.css';
import ComingSoon from '../_components/ComingSoon';

export default async function GamesIndex() {
  return (
    <div className={styles.musingsPage}>
      <h1>Musings</h1>
      <div className={styles.CSDiv}>
        <ComingSoon />
      </div>
    </div>
  );
}
