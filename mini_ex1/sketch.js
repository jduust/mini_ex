
//Variabler
var graphic;
var h1;
var sticker;
var turn = 0;

function preload() {
sticker = loadImage('image/sticker.jpg')
}

function setup() {
	createCanvas(windowWidth, windowHeight);
	graphic = createGraphics(400, 400, WEBGL);

//Header settings
	h1 = textSize(60);
	h1 = fill(300, 0 ,0, 175);
	h1 = strokeWeight(5);
	h1 = stroke(100);
}

function draw() {
//Overall background
	background('sticker');

//Header text (h1)
	h1.text('STICKER BOMB', 50, 90);

push()
//Rotating box (graphic)
	graphic.background(300);
	graphic.rotateZ(frameCount = -0.01);
	graphic.rotateX(frameCount = 0.01);
	graphic.rotateY(frameCount = 0.01);
//graphic.noFill();
//graphic.fill(300, 0, 0, 127);
	graphic.texture(sticker);
	graphic.strokeWeight(2);
	graphic.stroke(50);
	graphic.box(50);
	image(graphic, 100, 100, 400, 400, 200, 200);
pop()

}

//When the cursor is moved, the box turn faster
function mouseMoved() {
	graphic.rotateZ(turn = mouseX * 0.0001);
	graphic.rotateX(turn = mouseX * 0.0001);
	graphic.rotateY(turn = mouseY * 0.0001);

}

//Makes the site canvas fit to the resizing of the browser window
function windowResized() {
	resizeCanvas(windowWidth, windowHeight);
}
