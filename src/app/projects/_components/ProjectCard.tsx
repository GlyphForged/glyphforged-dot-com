import Image from 'next/image';
import styles from './ProjectCard.module.css';
import type { Project } from '../_data/projects';

export default function ProjectCard({ project }: { project: Project }) {
  const hasThumb = Boolean(project.thumbnail);

  return (
    <article className={styles.card}>
      {hasThumb && (
        <div className={styles.thumb}>
          <Image
            src={project.thumbnail}
            alt={project.alt ?? `${project.title} thumbnail`}
            layout="fill"
          />
        </div>
      )}
      <h3>{project.title}</h3>
      <p>{project.summary}</p>
    </article>
  );
}
