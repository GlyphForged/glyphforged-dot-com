import Image from "next/legacy/image";
import styles from './ProjectCard.module.css';
import type { Project } from '../_data/projects';

export default function ProjectCard({ project }: { project: Project }) {
  const thumb = project.thumbnail;

  return (
    <article className={styles.card}>
      {thumb ? (
        <div className={styles.thumb}>
          <Image
            src={thumb}
            alt={project.alt ?? `${project.title} thumbnail`}
            layout="fill"
          />
        </div>
      ) : null}
      <h3>{project.title}</h3>
      <p>{project.summary}</p>
    </article>
  );
}
