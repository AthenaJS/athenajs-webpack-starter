import { Game, Scene, SimpleText } from 'athenajs';

// create a new game with a 320x200 screen
const myGame = new Game({
    name: 'my-first-athena-game',
    showFps: true,
    width: 320,
    height: 200,
    debug: true
});

// create a new empty scene
const scene = new Scene();

// create a new SimpleText drawable
const text = new SimpleText("nextString", {
    text: "Canvas text",
    x: 100,
    y: 90,
    color: 'black'
});

// add a new text object onto the scene, at position 150, 120
scene.addObject(text);

// set `scene` as the active scene
myGame.setScene(scene);