import styles from './projects.module.css';

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // TODO: Add a section banner, tabs, breadcrumbs, etc.
  return (
    <section className={styles.projectPage}>
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
      {children}
    </section>
  );
}
