//variables
var x = 0;
var y = 0;
var z = 150;
var fade =2;
var pos = false;

function preload () {
	map = loadImage('images/map.png');
}

function setup() {
	createCanvas(windowWidth, windowHeight);
}

function draw() {
//background color
background(150);

push();
//image fade motion
	if (z > 175 || z < 150) {
	fade *= -1
}
	z += fade
	tint(z)
//world map
	image(map, 0, 0, windowWidth, windowHeight);
pop();

//Click function
	if (pos) {
		web2();
	} else {
		web1();
	}
	//Headline
	push();
	fill(0);
	textSize(50);
	textStyle(BOLD)
	textAlign(CENTER);
	text('SHITHOLE COUNTRY DETECTOR', windowWidth/2, 0 + windowHeight /18);
	pop();
}

//Still web
function web2() {
		stroke(255);
		strokeWeight(5);
		line(x, y, windowWidth /2, 0); //top-mid
		line(x, y, windowWidth, windowHeight / 2); //right-mid
		line(x, y, windowWidth /2, windowHeight); //bot-mid
		line(x, y, 0, windowHeight / 2); //left -mid
		line(x, y, 0, 0); //top-left
		line(x, y, 0, windowHeight); //bot-left
		line(x, y, windowWidth, windowHeight); //bot-right
		line(x, y, windowWidth, 0); //top-right
		ellipse(x, y, 100, 100);
		textSize(30);
		textAlign(CENTER);
		//if you click in the area of bottom-left corner
	if (y < windowHeight && y > windowHeight/2.2 && x < windowWidth && x < windowWidth/3) {
		text('Shithole Country', x, y - 60)
		fill(255, 66, 0, 175);
	} else { //if you click outside that area
		text('Not a Shithole Country', x, y - 60)
		}
	}

//Moving web
function web1() {
		stroke(255);
		strokeWeight(5);
		line(mouseX, mouseY, windowWidth /2, 0); //top-mid
		line(mouseX, mouseY, windowWidth, windowHeight / 2); //right-mid
		line(mouseX, mouseY, windowWidth /2, windowHeight); //bot-mid
		line(mouseX, mouseY, 0, windowHeight / 2); //left -mid
		line(mouseX, mouseY, 0, 0); //top-left
		line(mouseX, mouseY, 0, windowHeight); //bot-left
		line(mouseX, mouseY, windowWidth, windowHeight); //bot-right
		line(mouseX, mouseY, windowWidth, 0); //top-right
		fill(144 ,245, 0, 175);
		ellipse(mouseX, mouseY, 100, 100);
	}

//mouse click function
function mousePressed() {
pos = !pos;
if (pos) {
x = mouseX;
y = mouseY;
	}
}

//resizing canvas to fit browser window
function windowResized() {
	resizeCanvas(windowWidth, windowHeight);
}
