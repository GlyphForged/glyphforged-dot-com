import styles from '../projects.module.css';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { projects, getProjectBySlug } from '../_data/projects';
import type { Metadata } from 'next';

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
    <article>
      <h1>{project.title}</h1>
      <div className={styles.thumb}>
        <Image
          src={project.thumbnail}
          alt={project.alt ?? `${project.title} thumbnail`}
          width={256}
          height={256}
          sizes="(min-width: 1280px) 25vw, (min-width: 768px) 33vw, 100vw"
          priority={false}
        />
      </div>
      <p>{project.summary}</p>
      {/* TODO: Draw the rest of the fukken owl */}
      <div className={styles.returnLink}>
        <Link href="/projects">Back to Projects</Link>
      </div>
    </article>
  );
}
