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
      {
        id: 'perlingraph',
        title: 'Perlin Noise Graph',
        src: '/projectbins/perlingraph/perlin_graph.html',
        summary:
          'A one-dimensional view of Perlin noise. The sketch stacks four octaves of fractal Brownian motion (fBm) and scrolls through a horizontal slice of the data, producing a graph reminiscent of a stock ticker—or any time-series signal. Written in Rust with macroquad.',
        aspect: '3/2',
        width: 600,
        sourceCode:
          'https://emgithub.com/iframe.html?target=https%3A%2F%2Fgithub.com%2FGlyphForged%2FLearnRust%2Fblob%2Ftrunk%2Fnature_of_code%2Fchapter0%2Fperlin_graph%2Fsrc%2Fmain.rs&style=base16%2Fgruvbox-dark-hard&type=code&showBorder=on&showLineNumbers=on&showFileMeta=on&showFullPath=on&showCopy=on&maxHeight=500',
      },
      {
        id: 'perlincloud',
        title: 'Cloud Generation',
        src: '/projectbins/perlincloud/perlin_cloud.html',
        summary:
          'Two-dimensional Perlin noise can generate rich textures. This demo renders animated “clouds” by sampling a 2-D fBm field. Written in Rust with macroquad.',
        aspect: '3/2',
        width: 600,
        sourceCode:
          'https://emgithub.com/iframe.html?target=https%3A%2F%2Fgithub.com%2FGlyphForged%2FLearnRust%2Fblob%2Ftrunk%2Fnature_of_code%2Fchapter0%2Fperlin_cloud%2Fsrc%2Fmain.rs&style=base16%2Fgruvbox-dark-hard&type=code&showBorder=on&showLineNumbers=on&showFileMeta=on&showFullPath=on&showCopy=on&maxHeight=500',
      },
      {
        id: 'perlinterrain',
        title: 'Infinite Terrain Generation',
        src: '/projectbins/perlinterrain/perlin_terrain.html',
        summary:
          'Similar to the "clouds" above, this terrain is generated with 2-D perlin noise. Mapping the perlin values to the height of the vertices in a flat mesh produces a seemingly infinite landscape.',
        aspect: '3/2',
        width: 600,
        sourceCode:
          'https://emgithub.com/iframe.html?target=https%3A%2F%2Fgithub.com%2FGlyphForged%2FLearnRust%2Fblob%2Ftrunk%2Fnature_of_code%2Fchapter0%2Fperlin_terrain%2Fsrc%2Fmain.rs&style=base16%2Fgruvbox-dark-hard&type=code&showBorder=on&showLineNumbers=on&showFileMeta=on&showFullPath=on&showCopy=on&maxHeight=500',
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
    wasmDemos: [
      {
        id: 'threedeeball',
        title: '3D Bouncing Ball',
        src: '/projectbins/threedeeball/three_dee_ball.html',
        summary:
          'All of the vector work done up until now has been in 2 dimensions. This example showcases 3-dimensional vectors in a simple sketch. Written in Rust with macroquad.',
        aspect: '3/2',
        width: 600,
        sourceCode: '',
      },
      {
        id: 'accelerator',
        title: 'Accelerator',
        src: '/projectbins/accelerator/accelerator.html',
        summary:
          'This sketch attempts a simple 2D physics simulation. Pressing the Up arrow on your keyboard will cause the mover to accelerate, pressing the Down arrow will cause the mover to decelerate. If your key-presses are not being picked up, click inside the example "window" to allow the sketch to capture your key-presses. (Does not work on mobile.) Written in Rust with macroquad.',
        aspect: '3/2',
        width: 600,
        sourceCode: '',
      },
      {
        id: 'balloon',
        title: 'Balloon',
        src: '/projectbins/balloon/balloon.html',
        summary:
          'This example combines Exercises 2.1, 2.3, & 2.4. Utilizing a simple physics simulation, I\'ve filled the balloon with helium and let it loose in the space. I am also creating a "wind" force, which is generated via a 3-octave perlin noise value. The edges exert an invisible force which pushes back against the balloon when hitting the top or side edges.',
        aspect: '3/2',
        width: 600,
        sourceCode: '',
      },
      {
        id: 'friction',
        title: 'Friction',
        src: '/projectbins/friction/friction.html',
        summary:
          "This exercise combines 2.6, 2.7, & 2.11 into one. In this example, I have a series of balls, and a series of forces being applied to these balls. There is a constant gravity force present, a wind force when Spacebar is pressed, and friction while the balls roll along the floor. In addition, you can grab and toss the balls by clicking on them. Note that you can grab and hold multiple balls at once, which allows you to see how their mass impacts the forces of friction and/or wind. Each ball's radius is a product of its mass.",
        aspect: '3/2',
        width: 600,
        sourceCode: '',
      },
    ],
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
    wasmDemos: [
      {
        id: 'shader_demo',
        title: 'Macroquad Shader Demo',
        src: '/projectbins/shader_demo/shader_demo.html',
        summary: `This example is a simple fractal shader using lessons learned from ${(
          <a href="https://www.shadertoy.com/user/kishimisu">kishimisu</a>
        )} and <a href="https://iquilezles.org/">Inigo Quilez</a> utilizing SDFs and some oscillation to produce a fun effect. This also serves as a simple shader template I can quickly throw any fullscreen shader demos into by replacing the fragment shader as  needed. The vertex shader for this is a simple normalization algorithm.`,
        aspect: '3/2',
        width: 600,
        sourceCode: '',
      },
    ],
  },
];

export function getProjectBySlug(slug: string) {
  return projects.find((p) => p.slug === slug) ?? null;
}
