var x = 0;
var y = 0.15;
var i;
function preload() {
	i = createVideo(['video/hand.mp4']);
}
function setup() {
	createCanvas(300, 300, WEBGL);
	i.loop();
	i.hide();
}
function draw() {
	background(150);
	if (x > 10 || x < 0) {
	y *=-1
	}
	x += y;
push();
	translate(0, 0 + x);
	rotateX(0.2);
	rotateY(0.6);
	texture(i);
	stroke(200);
	strokeWeight(2);
		box(50, 50, 70);
pop();
push();
	translate(-68, 4);
	noStroke();
	fill(135 - x);
		beginShape();
			vertex(37 - x, 50);
			vertex(60 + x, 50);
			vertex(105 + x, 65 + x);
			vertex(65 - x, 70 + x);
			vertex(50, 50);
		endShape();
pop();
}
