import Link from 'next/link';
import styles from './projects.module.css';
import { projects } from './_data/projects';
import ProjectCard from './_components/ProjectCard';

export default async function ProjectsIndex() {
  const GROUP_ORDER = ['noc', 'shaders', 'misc'] as const;
  const LABELS = {
    noc: 'Nature of Code',
    shaders: 'Shaders',
    // misc: 'Miscellaneous',
  } as const;

  const grouped = new Map<string, Project[]>();
  for (const g of GROUP_ORDER) grouped.set(g, []);
  for (const p of projects) grouped.get(p.category)?.push(p);

  return (
    <div>
      <h1>Projects</h1>
      <div className={styles.projectBlurb}>
        <p>
          These projects represent selections from my body of work which are, in
          my opinion, polished enough to see the light of day. For each project
          here, there are about a dozen languishing in the depths of my GitHub
          or one of my hard drives. A lot of these are currently inspired by
          Daniel Shiffman, who I view as a personal source of inspiration for
          both how I approach development as well as how I approach life in
          general.
        </p>
      </div>
      <nav className={styles.groupNav}>
        Categories:
        {GROUP_ORDER.map((key) => (
          <a
            key={key}
            href={`#${key}`}>
            {LABELS[key]}
          </a>
        ))}
      </nav>
      <div className={styles.projectPage}>
        {GROUP_ORDER.map((key) => {
          const list = grouped.get(key)!;
          if (!list.length) return null;

          return (
            <section
              key={key}
              id={key}
              className={styles.groupSection}>
              <h2 className={styles.groupTitle}>{LABELS[key]}</h2>

              <div className={styles.projectGrid}>
                {list.map((p) => (
                  <Link
                    key={p.slug}
                    href={`/projects/${p.slug}`}>
                    <ProjectCard project={p} />
                  </Link>
                ))}
              </div>
            </section>
          );
        })}
        <div className={styles.returnLink}>
          <Link href="/">Return Home</Link>
        </div>
      </div>
    </div>
  );
}
