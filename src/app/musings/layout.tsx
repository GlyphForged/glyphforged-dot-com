import Header from '../_components/Header';
import { Footer } from '../_components/Footer';
import styles from './musings.module.css';

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
    <section>
      <Header />
      {children}
      <Footer />
    </section>
  );
}
