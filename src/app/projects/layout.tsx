import styles from './projects.module.css';
import { Footer } from '../_components/footer';

export const viewport = {
  width: 'device-width',
  initialScale: 1,
};

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // TODO: Add a section banner, tabs, breadcrumbs, etc.
  return (
    <section className={styles.projectPage}>
      {children}
      <Footer />
    </section>
  );
}
