export type Game = {
  slug: string;
  title: string;
  summary: string;
  embed: string;
  sourceCode?: string;
  thumbnail?: string;
  alt?: string;
  tags?: string[];
};

export const games: Game[] = [
  {
    slug: 'grotslaststand',
    title: "Grot's Last Stand",
    summary:
      'A Warhammer 40k Space Invaders clone built in GoDot that attempts to emulate the looks and feel of a classic GameBoy game. Fend off waves of White Scar Marines and survive as long as you can, racking up a high score.<br><br>This is game 3 of the 20 games challenge, and was written over the course about 7 days total. A lot was learned during this project, with the primary focus being making my own 2d sprite art within aseprite for the first time.',
    embed: `<iframe frameborder="0" src="https://itch.io/embed-upload/14925073?color=29313d" allowfullscreen="" width="800" height="740"><a href="https://glyphforged.itch.io/grots-last-stand">Play Grot's Last Stand on itch.io</a></iframe>`,
    sourceCode: 'https://github.com/GlyphForged/grots-last-stand',
    thumbnail: '/game-thumbs/gls.png',
    alt: "Grot's Last Stand Thumbnail",
    tags: ['20 games challenge', 'arcade', 'godot', 'solo'],
  },
  {
    slug: 'llc',
    title: 'Lunar Lander Corps',
    summary: `A 3D Lunar Lander clone written for the 2025 20-Games Challenge Summer Game Jam. You are a member of a group of curious sentient robots living in a system of dozens of moons orbiting a gas giant. Help deliver supplies between landing pads on the latest target of the research corps. Earn points based on your landing, upgrade your lander, and blow up in spectacular fashion when you miss the pad. Don't worry, we saved a backup of your program.`,
    embed: `<iframe frameborder="0" src="https://itch.io/embed-upload/14851809?color=000000" allowfullscreen="" width="1366" height="788"><a href="https://nebulazerogames.itch.io/lunar-lander-corps">Play Lunar Lander Corps on itch.io</a></iframe>`,
    sourceCode: 'https://github.com/GlyphForged/LunarLanderCorps',
    thumbnail: '/game-thumbs/llc.png',
    alt: 'Lunar Lander Corps Thumbnail',
    tags: ['20 games challenge', 'game jam', 'collab', 'godot'],
  },
];

export function getGameBySlug(slug: string) {
  return games.find((g) => g.slug === slug) ?? null;
}
