import styles from '../projects.module.css';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import type { Metadata } from 'next';
import { projects, getProjectBySlug } from '../_data/projects';
import MQCanvas from '../_components/MQCanvas';

export async function generateStaticParams() {
  // Pre-generate /projects/:slug for every project
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const p = getProjectBySlug(slug);
  if (!p) return { title: 'Project not found' };
  return { title: `${p.title} • Projects`, description: p.summary };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return notFound(); // Falls through to not-found.tsx

  return (
    <article className={styles.individualProjectPage}>
      <h1>{project.title}</h1>
      {/* TODO: Draw the rest of the fukken owl */}
      {project.wasmDemos?.length ? (
        <div className={styles.projectGrid}>
          {project.wasmDemos.map((d, i) => (
            <div key={d.id}>
              <MQCanvas
                title={d.title}
                summary={d.summary}
                src={d.src}
                aspect={d.aspect}
                height={d.height}
                sourceCode={d.sourceCode}
              />
              {i < project.wasmDemos.length - 1 && <hr />}
            </div>
          ))}
        </div>
      ) : (
        <p>No web demos yet.</p>
      )}
      <div className={styles.returnLink}>
        <Link href="/projects">Back to Projects</Link>
      </div>
    </article>
  );
}
