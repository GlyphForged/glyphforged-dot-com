export type Project = {
  slug: string;
  title: string;
  summary: string;
  category: string;
  thumbnail?: string;
  alt?: string;
  tags?: string[];
  wasmDemos?: WasmDemo[];
};

export type WasmDemo = {
  id: string;
  title: string;
  src: string;
  summary?: string;
  aspect?: string;
  width?: number;
  sourceCode?: string;
};

export const projects: Project[] = [
  {
    slug: 'noc-0',
    title: 'Nature of Code: Chapter 0',
    summary: 'Chapter 0 of the Nature of Code exercises.',
    category: 'noc',
    thumbnail: '/project-thumbs/Chapter0-thumb.png',
    alt: 'Chapter 0 Thumbnail',
    tags: ['noc', 'nature of code', 'macroquad', 'rust'],
    wasmDemos: [
      {
        id: 'randomwalker',
        title: 'Random Walker',
        src: '/projectbins/randomwalker/random_walker.html',
        summary:
          'A random walker is like a drunk pixel stumbling around a grid. At every step it moves one unit in a random direction, producing unpredictable—yet often surprisingly coherent—paths over time. Written in Rust with macroquad.',
        aspect: '3/2',
        width: 600,
        sourceCode:
          'https://emgithub.com/iframe.html?target=https%3A%2F%2Fgithub.com%2FGlyphForged%2FLearnRust%2Fblob%2Ftrunk%2Fnature_of_code%2Fchapter0%2Frandom_walker%2Fsrc%2Fmain.rs&style=base16%2Fgruvbox-dark-hard&type=code&showBorder=on&showLineNumbers=on&showFileMeta=on&showFullPath=on&showCopy=on&maxHeight=500',
      },
      {
        id: 'noisewalker',
        title: 'Perlin Noise walker',
        src: '/projectbins/noisewalker/noise_walker.html',
        summary:
          'This variant replaces pure randomness with Perlin noise. Instead of following a random unit vector, the walker’s x and y coordinates come directly from a noise field, yielding smoother, more organic motion. Written in Rust with macroquad.',
        aspect: '3/2',
        width: 600,
        sourceCode:
          'https://emgithub.com/iframe.html?target=https%3A%2F%2Fgithub.com%2FGlyphForged%2FLearnRust%2Fblob%2Ftrunk%2Fnature_of_code%2Fchapter0%2Fnoise_walker%2Fsrc%2Fmain.rs&style=base16%2Fgruvbox-dark-hard&type=code&showBorder=on&showLineNumbers=on&showFileMeta=on&showFullPath=on&showCopy=on&maxHeight=500',
      },
    ],
  },
  {
    slug: 'noc-1-2',
    title: 'Nature of Code: Chapters 1 & 2',
    summary: 'Chapters 1 and 2 of the Nature of Code exercises.',
    category: 'noc',
    thumbnail: '/project-thumbs/Chapter1-thumb.png',
    tags: ['noc', 'nature of code', 'macroquad', 'rust'],
  },
  {
    slug: 'noc-3-4',
    title: 'Nature of Code: Chapters 3 & 4',
    summary: 'Chapters 3 and 4 of the Nature of Code exercises.',
    category: 'noc',
    thumbnail: '/project-thumbs/Chapter3-thumb.png',
    tags: ['noc', 'nature of code', 'macroquad', 'rust'],
  },
  {
    slug: 'shader-demo',
    title: 'Macroquad Shader Demo',
    summary: 'A simple GLSL shader demo written in Rust with macroquad.',
    category: 'shaders',
    thumbnail: '/project-thumbs/shaderdemo.png',
    tags: ['shaders', 'macroquad', 'rust'],
  },
];

export function getProjectBySlug(slug: string) {
  return projects.find((p) => p.slug === slug) ?? null;
}
