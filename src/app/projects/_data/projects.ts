export type Project = {
  slug: string;
  title: string;
  summary: string;
  category: string;
  thumbnail?: string;
  alt?: string;
  tags?: string[];
};

export const projects: Project[] = [
  {
    slug: 'noc-0',
    title: 'Nature of Code: Chapter 0',
    summary: 'Chapter 0 of the Nature of Code exercises.',
    category: 'noc',
    thumbnail: '/projects/Chapter0-thumb.png',
    alt: 'Chapter 0 Thumbnail',
    tags: ['noc', 'nature of code', 'macroquad', 'rust'],
  },
  {
    slug: 'noc-1-2',
    title: 'Nature of Code: Chapters 1 & 2',
    summary: 'Chapters 1 and 2 of the Nature of Code exercises.',
    category: 'noc',
    thumbnail: '/projects/Chapter1-thumb.png',
    tags: ['noc', 'nature of code', 'macroquad', 'rust'],
  },
  {
    slug: 'noc-3-4',
    title: 'Nature of Code: Chapters 3 & 4',
    summary: 'Chapters 3 and 4 of the Nature of Code exercises.',
    category: 'noc',
    thumbnail: '/projects/Chapter3-thumb.png',
    tags: ['noc', 'nature of code', 'macroquad', 'rust'],
  },
  {
    slug: 'shader-demo',
    title: 'Macroquad Shader Demo',
    summary: 'A simple GLSL shader demo written in Rust with macroquad.',
    category: 'shaders',
    thumbnail: '/projects/shaderdemo.png',
    tags: ['shaders', 'macroquad', 'rust'],
  },
];

export function getProjectBySlug(slug: string) {
  return projects.find((p) => p.slug === slug) ?? null;
}
