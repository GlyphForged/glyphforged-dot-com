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
        src: '/projectbins/noc-ch-0/randomwalker/random_walker.html',
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
        src: '/projectbins/noc-ch-0/noisewalker/noise_walker.html',
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
        src: '/projectbins/noc-ch-0/perlingraph/perlin_graph.html',
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
        src: '/projectbins/noc-ch-0/perlincloud/perlin_cloud.html',
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
        src: '/projectbins/noc-ch-0/perlinterrain/perlin_terrain.html',
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
        src: '/projectbins/noc-ch-1-2/threedeeball/three_dee_ball.html',
        summary:
          'All of the vector work done up until now has been in 2 dimensions. This example showcases 3-dimensional vectors in a simple sketch. Written in Rust with macroquad.',
        aspect: '3/2',
        width: 600,
        sourceCode:
          'https://emgithub.com/iframe.html?target=https%3A%2F%2Fgithub.com%2FGlyphForged%2FLearnRust%2Fblob%2Ftrunk%2Fnature_of_code%2Fchapter1%2Fthreedeebounce%2Fsrc%2Fmain.rs&style=base16%2Fgruvbox-dark-hard&type=code&showBorder=on&showLineNumbers=on&showFileMeta=on&showFullPath=on&showCopy=on&maxHeight=500',
      },
      {
        id: 'accelerator',
        title: 'Accelerator',
        src: '/projectbins/noc-ch-1-2/accelerator/accelerator.html',
        summary:
          'This sketch attempts a simple 2D physics simulation. Pressing the Up arrow on your keyboard will cause the mover to accelerate, pressing the Down arrow will cause the mover to decelerate. If your key-presses are not being picked up, click inside the example "window" to allow the sketch to capture your key-presses. (Does not work on mobile.) Written in Rust with macroquad.<h4>Controls</h4><ul><li>Up - Accelerate</li><li>Right/Left - Turn</li><li>Down - Brakes</li></ul>',
        aspect: '3/2',
        width: 600,
        sourceCode:
          'https://emgithub.com/iframe.html?target=https%3A%2F%2Fgithub.com%2FGlyphForged%2FLearnRust%2Fblob%2Ftrunk%2Fnature_of_code%2Fchapter1%2Fexercise1_5%2Fsrc%2Fmain.rs&style=base16%2Fgruvbox-dark-hard&type=code&showBorder=on&showLineNumbers=on&showFileMeta=on&showFullPath=on&showCopy=on&maxHeight=500',
      },
      {
        id: 'balloon',
        title: 'Balloon',
        src: '/projectbins/noc-ch-1-2/balloon/balloon.html',
        summary:
          'This example combines Exercises 2.1, 2.3, & 2.4. Utilizing a simple physics simulation, I\'ve filled the balloon with helium and let it loose in the space. I am also creating a "wind" force, which is generated via a 3-octave perlin noise value. The edges exert an invisible force which pushes back against the balloon when hitting the top or side edges.',
        aspect: '3/2',
        width: 600,
        sourceCode:
          'https://emgithub.com/iframe.html?target=https%3A%2F%2Fgithub.com%2FGlyphForged%2FLearnRust%2Fblob%2Ftrunk%2Fnature_of_code%2Fchapter2%2Fballoon%2Fsrc%2Fmain.rs&style=base16%2Fgruvbox-dark-hard&type=code&showBorder=on&showLineNumbers=on&showFileMeta=on&showFullPath=on&showCopy=on&maxHeight=500',
      },
      {
        id: 'friction',
        title: 'Friction',
        src: '/projectbins/noc-ch-1-2/friction/friction.html',
        summary:
          "This exercise combines 2.6, 2.7, & 2.11 into one. In this example, I have a series of balls, and a series of forces being applied to these balls. There is a constant gravity force present, a wind force when Spacebar is pressed, and friction while the balls roll along the floor. In addition, you can grab and toss the balls by clicking on them. Note that you can grab and hold multiple balls at once, which allows you to see how their mass impacts the forces of friction and/or wind. Each ball's radius is a product of its mass.",
        aspect: '3/2',
        width: 600,
        sourceCode:
          'https://emgithub.com/iframe.html?target=https%3A%2F%2Fgithub.com%2FGlyphForged%2FLearnRust%2Fblob%2Ftrunk%2Fnature_of_code%2Fchapter2%2Ffriction%2Fsrc%2Fmain.rs&style=base16%2Fgruvbox-dark-hard&type=code&showBorder=on&showLineNumbers=on&showFileMeta=on&showFullPath=on&showCopy=on&maxHeight=500',
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
    wasmDemos: [
      {
        id: 'baton',
        title: 'Spinning Baton',
        src: '/projectbins/noc-ch-3-4/baton/baton.html',
        summary:
          'This exercise combines 3.1 & 3.2, handling angular velocity and rotation. Within this sketch I have a spinning "baton" which starts out with no velocity. By pressing the Spacebar, you can accelerate the baton over time in a clockwise direction. You can also grab the baton and spin it as though spinning a wheel, with the angular momentum being calculated by the motion imparted. Over time, the baton slows as though via a universal drag force.',
        aspect: '3/2',
        width: 640,
        sourceCode:
          'https://emgithub.com/iframe.html?target=https%3A%2F%2Fgithub.com%2FGlyphForged%2FLearnRust%2Fblob%2Ftrunk%2Fnature_of_code%2Fchapter3%2Fbaton%2Fsrc%2Fmain.rs&style=base16%2Fgruvbox-dark-hard&type=code&showBorder=on&showLineNumbers=on&showFileMeta=on&showFullPath=on&showCopy=on&maxHeight=500',
      },
      {
        id: 'spiral',
        title: 'Spiral',
        src: '/projectbins/noc-ch-3-4/spiral/spiral.html',
        summary:
          "This sketch is a macroquad friendly interpretation of Exercise 3.5. As macroquad is geared more towards 2D game development, rather than a focus on artistic 'sketches' and creative coding in general like processing and p5.js, I have had to tweak the exercise a bit to instead create a spiral which has a long, but not permanent tail.",
        aspect: '3/2',
        width: 640,
        sourceCode:
          'https://emgithub.com/iframe.html?target=https%3A%2F%2Fgithub.com%2FGlyphForged%2FLearnRust%2Fblob%2Ftrunk%2Fnature_of_code%2Fchapter3%2Fspiral%2Fsrc%2Fmain.rs&style=base16%2Fgruvbox-dark-hard&type=code&showBorder=on&showLineNumbers=on&showFileMeta=on&showFullPath=on&showCopy=on&maxHeight=500',
      },
      {
        id: 'emitter',
        title: 'Particle Emitter',
        src: '/projectbins/noc-ch-3-4/emitter/emitter.html',
        summary:
          "This sketch is a simple emitter which is tied to the mouse location. When the mouse is within the area of the sketch, the emitter will move to the mouse location, continuing to emite a steady stream of particles as it goes. There is constant 'gravity' which pulls the particles towards the bottom of the screen.",
        aspect: '3/2',
        width: 640,
        sourceCode:
          'https://emgithub.com/iframe.html?target=https%3A%2F%2Fgithub.com%2FGlyphForged%2FLearnRust%2Fblob%2Ftrunk%2Fnature_of_code%2Fchapter4%2Femitter%2Fsrc%2Femitter.rs&style=base16%2Fgruvbox-dark-hard&type=code&showBorder=on&showLineNumbers=on&showFileMeta=on&showFullPath=on&showCopy=on&maxHeight=500',
      },
      {
        id: 'thruster',
        title: 'Spaceship',
        src: '/projectbins/noc-ch-3-4/thruster/thruster.html',
        summary:
          "<p>This sketch combines Exercises 4.2, 4.3, and 4.4, iterating on a previous example from Chapter 1. This showcases a custom emitter system which has been attached to the 'Mover' object from Exercise 1.5. The ship now creates a fiery trail of short lived particles which fade and disappear as the simulation runs.</p><h4>Controls</h4><ul><li>Up - Accelerate</li><li>Right/Left - Turn</li><li>Down - Brakes</li></ul>",
        aspect: '3/2',
        width: 640,
        sourceCode:
          'https://emgithub.com/iframe.html?target=https%3A%2F%2Fgithub.com%2FGlyphForged%2FLearnRust%2Fblob%2Ftrunk%2Fnature_of_code%2Fchapter4%2Fthruster%2Fsrc%2Fmain.rs&style=base16%2Fgruvbox-dark-hard&type=code&showBorder=on&showLineNumbers=on&showFileMeta=on&showFullPath=on&showCopy=on&maxHeight=500',
      },
    ],
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
        src: '/projectbins/shaders/shader_demo/shader_demo.html',
        summary:
          'This example is a simple fractal shader using lessons learned from <a href="https://www.shadertoy.com/user/kishimisu">kishimisu</a> and <a href="https://iquilezles.org/">Inigo Quilez</a> utilizing SDFs and some oscillation to produce a fun effect. This also serves as a simple shader template I can quickly throw any fullscreen shader demos into by replacing the fragment shader as  needed. The vertex shader for this is a simple normalization algorithm.',
        aspect: '3/2',
        width: 640,
        sourceCode:
          'https://emgithub.com/iframe.html?target=https%3A%2F%2Fgithub.com%2FGlyphForged%2Fmq_shader_template%2Fblob%2Ftrunk%2Fsrc%2Fmain.rs&style=base16%2Fgruvbox-dark-hard&type=code&showBorder=on&showLineNumbers=on&showFileMeta=on&showFullPath=on&showCopy=on&maxHeight=500',
      },
    ],
  },
];

export function getProjectBySlug(slug: string) {
  return projects.find((p) => p.slug === slug) ?? null;
}
