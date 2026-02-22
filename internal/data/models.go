package data

import "strings"

type Game struct {
	Slug        string
	Title       string
	Summary     string
	Embed       string
	FullSummary string
	SourceCode  string
	Thumbnail   string
	Alt         string
	Tags        []string
}

type WasmDemo struct {
	ID         string
	Title      string
	Src        string
	Summary    string
	Aspect     string
	Width      int
	SourceCode string
}

type Project struct {
	Slug      string
	Title     string
	Summary   string
	Category  string
	Thumbnail string
	Alt       string
	Tags      []string
	WasmDemos []WasmDemo
}

var Games = []Game{
	{
		Slug:       "grotslaststand",
		Title:      "Grot's Last Stand",
		Summary:    "A Warhammer 40k Space Invaders clone built in GoDot that attempts to emulate the looks and feel of a classic GameBoy game. Fend off waves of White Scar Marines and survive as long as you can, racking up a high score.<br><br>This is game 3 of the 20 games challenge, and was written over the course about 7 days total. A lot was learned during this project, with the primary focus being making my own 2d sprite art within aseprite for the first time.",
		Embed:      `<iframe frameborder="0" src="https://itch.io/embed-upload/14925073?color=29313d" allowfullscreen="" width="800" height="740"><a href="https://glyphforged.itch.io/grots-last-stand">Play Grot's Last Stand on itch.io</a></iframe>`,
		SourceCode: "https://github.com/GlyphForged/grots-last-stand",
		Thumbnail:  "/public/game-thumbs/gls.png",
		Alt:        "Grot's Last Stand Thumbnail",
		Tags:       []string{"20 games challenge", "arcade", "godot", "solo"},
	},
	{
		Slug:        "llc",
		Title:       "Lunar Lander Corps",
		Summary:     "A 3D Lunar Lander clone written for the 2025 20-Games Challenge Summer Game Jam. You are a member of a group of curious sentient robots living in a system of dozens of moons orbiting a gas giant. Help deliver supplies between landing pads on the latest target of the research corps. Earn points based on your landing, upgrade your lander, and blow up in spectacular fashion when you miss the pad. Don't worry, we saved a backup of your program.",
		Embed:       `<iframe frameborder="0" src="https://itch.io/embed-upload/14974428?color=000000" allowfullscreen="" width="1366" height="788"><a href="https://nebulazerogames.itch.io/lunar-lander-corps">Play Lunar Lander Corps on itch.io</a></iframe>`,
		FullSummary: "Note: Best enjoyed in Fullscreen.<br><br>A 3D Lunar Lander clone written for the 2025 20-Games Challenge Summer Game Jam. You are a member of a group of curious sentient robots living in a system of dozens of moons orbiting a gas giant. Help deliver supplies between landing pads on the latest target of the research corps. Earn points based on your landing, upgrade your lander, and blow up in spectacular fashion when you miss the pad. Don't worry, we saved a backup of your program.<br><br>Please note there is a known bug with mouse capture. You may need to either press backslash, or pause and click Resume to recapture the mouse cursor if the window does not automatically capture the mouse. Additionally, the hit box for the \"Let's Fly\" button after the tutorial appears to be off. If you struggle to find the hitbox, you can use tab and enter/space to select it.",
		SourceCode:  "https://github.com/GlyphForged/LunarLanderCorps",
		Thumbnail:   "/public/game-thumbs/llc.png",
		Alt:         "Lunar Lander Corps Thumbnail",
		Tags:        []string{"20 games challenge", "game jam", "collab", "godot"},
	},
}

var Projects = []Project{
	{
		Slug:      "noc-0",
		Title:     "Nature of Code: Chapter 0",
		Summary:   "Chapter 0 of the Nature of Code exercises.",
		Category:  "noc",
		Thumbnail: "/public/project-thumbs/Chapter0-thumb.png",
		Alt:       "Chapter 0 Thumbnail",
		Tags:      []string{"noc", "nature of code", "macroquad", "rust"},
		WasmDemos: []WasmDemo{
			{ID: "randomwalker", Title: "Random Walker", Src: "/public/projectbins/noc-ch-0/randomwalker/random_walker.html", Summary: "A random walker is like a drunk pixel stumbling around a grid. At every step it moves one unit in a random direction, producing unpredictable-yet often surprisingly coherent-paths over time. Written in Rust with macroquad.", Aspect: "3/2", Width: 600, SourceCode: "https://emgithub.com/iframe.html?target=https%3A%2F%2Fgithub.com%2FGlyphForged%2FLearnRust%2Fblob%2Ftrunk%2Fnature_of_code%2Fchapter0%2Frandom_walker%2Fsrc%2Fmain.rs&style=base16%2Fgruvbox-dark-hard&type=code&showBorder=on&showLineNumbers=on&showFileMeta=on&showFullPath=on&showCopy=on&maxHeight=500"}, {ID: "noisewalker", Title: "Perlin Noise walker", Src: "/public/projectbins/noc-ch-0/noisewalker/noise_walker.html", Summary: "This variant replaces pure randomness with Perlin noise. Instead of following a random unit vector, the walker's x and y coordinates come directly from a noise field, yielding smoother, more organic motion. Written in Rust with macroquad.", Aspect: "3/2", Width: 600, SourceCode: "https://emgithub.com/iframe.html?target=https%3A%2F%2Fgithub.com%2FGlyphForged%2FLearnRust%2Fblob%2Ftrunk%2Fnature_of_code%2Fchapter0%2Fnoise_walker%2Fsrc%2Fmain.rs&style=base16%2Fgruvbox-dark-hard&type=code&showBorder=on&showLineNumbers=on&showFileMeta=on&showFullPath=on&showCopy=on&maxHeight=500"},
			{ID: "perlingraph", Title: "Perlin Noise Graph", Src: "/public/projectbins/noc-ch-0/perlingraph/perlin_graph.html", Summary: "A one-dimensional view of Perlin noise. The sketch stacks four octaves of fractal Brownian motion (fBm) and scrolls through a horizontal slice of the data, producing a graph reminiscent of a stock ticker-or any time-series signal. Written in Rust with macroquad.", Aspect: "3/2", Width: 600, SourceCode: "https://emgithub.com/iframe.html?target=https%3A%2F%2Fgithub.com%2FGlyphForged%2FLearnRust%2Fblob%2Ftrunk%2Fnature_of_code%2Fchapter0%2Fperlin_graph%2Fsrc%2Fmain.rs&style=base16%2Fgruvbox-dark-hard&type=code&showBorder=on&showLineNumbers=on&showFileMeta=on&showFullPath=on&showCopy=on&maxHeight=500"},
			{ID: "perlincloud", Title: "Cloud Generation", Src: "/public/projectbins/noc-ch-0/perlincloud/perlin_cloud.html", Summary: "Two-dimensional Perlin noise can generate rich textures. This demo renders animated clouds by sampling a 2-D fBm field. Written in Rust with macroquad.", Aspect: "3/2", Width: 600, SourceCode: "https://emgithub.com/iframe.html?target=https%3A%2F%2Fgithub.com%2FGlyphForged%2FLearnRust%2Fblob%2Ftrunk%2Fnature_of_code%2Fchapter0%2Fperlin_cloud%2Fsrc%2Fmain.rs&style=base16%2Fgruvbox-dark-hard&type=code&showBorder=on&showLineNumbers=on&showFileMeta=on&showFullPath=on&showCopy=on&maxHeight=500"},
			{ID: "perlinterrain", Title: "Infinite Terrain Generation", Src: "/public/projectbins/noc-ch-0/perlinterrain/perlin_terrain.html", Summary: "Similar to the clouds above, this terrain is generated with 2-D perlin noise. Mapping the perlin values to the height of the vertices in a flat mesh produces a seemingly infinite landscape.", Aspect: "3/2", Width: 600, SourceCode: "https://emgithub.com/iframe.html?target=https%3A%2F%2Fgithub.com%2FGlyphForged%2FLearnRust%2Fblob%2Ftrunk%2Fnature_of_code%2Fchapter0%2Fperlin_terrain%2Fsrc%2Fmain.rs&style=base16%2Fgruvbox-dark-hard&type=code&showBorder=on&showLineNumbers=on&showFileMeta=on&showFullPath=on&showCopy=on&maxHeight=500"},
		},
	},
	{
		Slug:      "noc-1-2",
		Title:     "Nature of Code: Chapters 1 & 2",
		Summary:   "Chapters 1 and 2 of the Nature of Code exercises.",
		Category:  "noc",
		Thumbnail: "/public/project-thumbs/Chapter1-thumb.png",
		Tags:      []string{"noc", "nature of code", "macroquad", "rust"},
		WasmDemos: []WasmDemo{
			{ID: "threedeeball", Title: "3D Bouncing Ball", Src: "/public/projectbins/noc-ch-1-2/threedeeball/three_dee_ball.html", Summary: "All of the vector work done up until now has been in 2 dimensions. This example showcases 3-dimensional vectors in a simple sketch. Written in Rust with macroquad.", Aspect: "3/2", Width: 600, SourceCode: "https://emgithub.com/iframe.html?target=https%3A%2F%2Fgithub.com%2FGlyphForged%2FLearnRust%2Fblob%2Ftrunk%2Fnature_of_code%2Fchapter1%2Fthreedeebounce%2Fsrc%2Fmain.rs&style=base16%2Fgruvbox-dark-hard&type=code&showBorder=on&showLineNumbers=on&showFileMeta=on&showFullPath=on&showCopy=on&maxHeight=500"},
			{ID: "accelerator", Title: "Accelerator", Src: "/public/projectbins/noc-ch-1-2/accelerator/accelerator.html", Summary: "This sketch attempts a simple 2D physics simulation. Pressing the Up arrow on your keyboard will cause the mover to accelerate, pressing the Down arrow will cause the mover to decelerate. If your key-presses are not being picked up, click inside the example window to allow the sketch to capture your key-presses. (Does not work on mobile.) Written in Rust with macroquad.<h4>Controls</h4><ul><li>Up - Accelerate</li><li>Right/Left - Turn</li><li>Down - Brakes</li></ul>", Aspect: "3/2", Width: 600, SourceCode: "https://emgithub.com/iframe.html?target=https%3A%2F%2Fgithub.com%2FGlyphForged%2FLearnRust%2Fblob%2Ftrunk%2Fnature_of_code%2Fchapter1%2Fexercise1_5%2Fsrc%2Fmain.rs&style=base16%2Fgruvbox-dark-hard&type=code&showBorder=on&showLineNumbers=on&showFileMeta=on&showFullPath=on&showCopy=on&maxHeight=500"},
			{ID: "balloon", Title: "Balloon", Src: "/public/projectbins/noc-ch-1-2/balloon/balloon.html", Summary: "This example combines Exercises 2.1, 2.3, and 2.4. Utilizing a simple physics simulation, I've filled the balloon with helium and let it loose in the space. I am also creating a wind force, which is generated via a 3-octave perlin noise value. The edges exert an invisible force which pushes back against the balloon when hitting the top or side edges.", Aspect: "3/2", Width: 600, SourceCode: "https://emgithub.com/iframe.html?target=https%3A%2F%2Fgithub.com%2FGlyphForged%2FLearnRust%2Fblob%2Ftrunk%2Fnature_of_code%2Fchapter2%2Fballoon%2Fsrc%2Fmain.rs&style=base16%2Fgruvbox-dark-hard&type=code&showBorder=on&showLineNumbers=on&showFileMeta=on&showFullPath=on&showCopy=on&maxHeight=500"},
			{ID: "friction", Title: "Friction", Src: "/public/projectbins/noc-ch-1-2/friction/friction.html", Summary: "This exercise combines 2.6, 2.7, and 2.11 into one. In this example, I have a series of balls, and a series of forces being applied to these balls. There is a constant gravity force present, a wind force when Spacebar is pressed, and friction while the balls roll along the floor. In addition, you can grab and toss the balls by clicking on them.", Aspect: "3/2", Width: 600, SourceCode: "https://emgithub.com/iframe.html?target=https%3A%2F%2Fgithub.com%2FGlyphForged%2FLearnRust%2Fblob%2Ftrunk%2Fnature_of_code%2Fchapter2%2Ffriction%2Fsrc%2Fmain.rs&style=base16%2Fgruvbox-dark-hard&type=code&showBorder=on&showLineNumbers=on&showFileMeta=on&showFullPath=on&showCopy=on&maxHeight=500"},
		},
	},
	{
		Slug:      "noc-3-4",
		Title:     "Nature of Code: Chapters 3 & 4",
		Summary:   "Chapters 3 and 4 of the Nature of Code exercises.",
		Category:  "noc",
		Thumbnail: "/public/project-thumbs/Chapter3-thumb.png",
		Tags:      []string{"noc", "nature of code", "macroquad", "rust"},
		WasmDemos: []WasmDemo{
			{ID: "baton", Title: "Spinning Baton", Src: "/public/projectbins/noc-ch-3-4/baton/baton.html", Summary: "This exercise combines 3.1 and 3.2, handling angular velocity and rotation. Within this sketch I have a spinning baton which starts out with no velocity. By pressing Spacebar, you can accelerate the baton over time in a clockwise direction.", Aspect: "3/2", Width: 640, SourceCode: "https://emgithub.com/iframe.html?target=https%3A%2F%2Fgithub.com%2FGlyphForged%2FLearnRust%2Fblob%2Ftrunk%2Fnature_of_code%2Fchapter3%2Fbaton%2Fsrc%2Fmain.rs&style=base16%2Fgruvbox-dark-hard&type=code&showBorder=on&showLineNumbers=on&showFileMeta=on&showFullPath=on&showCopy=on&maxHeight=500"},
			{ID: "spiral", Title: "Spiral", Src: "/public/projectbins/noc-ch-3-4/spiral/spiral.html", Summary: "This sketch is a macroquad-friendly interpretation of Exercise 3.5. Instead of a permanent trail, this creates a spiral with a long but finite tail.", Aspect: "3/2", Width: 640, SourceCode: "https://emgithub.com/iframe.html?target=https%3A%2F%2Fgithub.com%2FGlyphForged%2FLearnRust%2Fblob%2Ftrunk%2Fnature_of_code%2Fchapter3%2Fspiral%2Fsrc%2Fmain.rs&style=base16%2Fgruvbox-dark-hard&type=code&showBorder=on&showLineNumbers=on&showFileMeta=on&showFullPath=on&showCopy=on&maxHeight=500"},
			{ID: "emitter", Title: "Particle Emitter", Src: "/public/projectbins/noc-ch-3-4/emitter/emitter.html", Summary: "This sketch is a simple emitter tied to the mouse location. When the mouse is within the sketch area, the emitter follows the cursor while gravity pulls particles downward.", Aspect: "3/2", Width: 640, SourceCode: "https://emgithub.com/iframe.html?target=https%3A%2F%2Fgithub.com%2FGlyphForged%2FLearnRust%2Fblob%2Ftrunk%2Fnature_of_code%2Fchapter4%2Femitter%2Fsrc%2Femitter.rs&style=base16%2Fgruvbox-dark-hard&type=code&showBorder=on&showLineNumbers=on&showFileMeta=on&showFullPath=on&showCopy=on&maxHeight=500"},
			{ID: "thruster", Title: "Spaceship", Src: "/public/projectbins/noc-ch-3-4/thruster/thruster.html", Summary: "<p>This sketch combines Exercises 4.2, 4.3, and 4.4. It showcases a custom emitter system attached to the mover object from Exercise 1.5.</p><h4>Controls</h4><ul><li>Up - Accelerate</li><li>Right/Left - Turn</li><li>Down - Brakes</li></ul>", Aspect: "3/2", Width: 640, SourceCode: "https://emgithub.com/iframe.html?target=https%3A%2F%2Fgithub.com%2FGlyphForged%2FLearnRust%2Fblob%2Ftrunk%2Fnature_of_code%2Fchapter4%2Fthruster%2Fsrc%2Fmain.rs&style=base16%2Fgruvbox-dark-hard&type=code&showBorder=on&showLineNumbers=on&showFileMeta=on&showFullPath=on&showCopy=on&maxHeight=500"},
		},
	},
	{
		Slug:      "shader-demo",
		Title:     "Macroquad Shader Demo",
		Summary:   "A simple GLSL shader demo written in Rust with macroquad.",
		Category:  "shaders",
		Thumbnail: "/public/project-thumbs/shaderdemo.png",
		Tags:      []string{"shaders", "macroquad", "rust"},
		WasmDemos: []WasmDemo{
			{ID: "shader_demo",
			Title: "Macroquad Shader Demo",
			Src: "/public/projectbins/shaders/shader_demo/shader_demo.html",
			Summary: "This example is a simple fractal shader using lessons learned from shadertoy creators and Inigo Quilez, utilizing SDFs and oscillation to produce a fun effect.",
			Aspect: "3/2",
			Width: 600,
			SourceCode: "https://emgithub.com/iframe.html?target=https%3A%2F%2Fgithub.com%2FGlyphForged%2Fmq_shader_template%2Fblob%2Ftrunk%2Fsrc%2Fmain.rs&style=base16%2Fgruvbox-dark-hard&type=code&showBorder=on&showLineNumbers=on&showFileMeta=on&showFullPath=on&showCopy=on&maxHeight=500"},
		},
	},
}

func GetGameBySlug(slug string) *Game {
	for i := range Games {
		if Games[i].Slug == slug {
			return &Games[i]
		}
	}
	return nil
}

func GetProjectBySlug(slug string) *Project {
	for i := range Projects {
		if Projects[i].Slug == slug {
			return &Projects[i]
		}
	}
	return nil
}

func GetDemoByID(project *Project, id string) *WasmDemo {
	if project == nil {
		return nil
	}
	for i := range project.WasmDemos {
		if strings.EqualFold(project.WasmDemos[i].ID, id) {
			return &project.WasmDemos[i]
		}
	}
	return nil
}
