import Link from 'next/link';
import Image from 'next/image';
import styles from './NavCard.module.css';

type cardProps = {
  href: string;
  title: string;
  summary: string;
  icon: string;
  className?: string;
};

export default function NavCard({ href, title, summary, icon, className }: cardProps) {
  return (
    <Link
      href={href}
      className={className}>
      <h3 className={styles.title}>{title}</h3>
      <div className={styles.iconContainer}>
        <Image
          className={styles.icon}
          src={icon}
          layout="fill"
          alt={`${href} icon.`}
        />
      </div>
      <p className={styles.summary}>{summary}</p>
    </Link>
  );
}
