var birdImg;
var birdAn;
var bird;
var scoreboard;
var pipes = [];
var cnv;
var pValue = 0;
var hsValue = 0;

// function preload() {
//
// }

function setup() {
	cnv = createCanvas(800, 600);
	cnv.position(windowWidth/2 - 400, windowHeight/2 - 300);

	bird = new Bird();
	scoreboard = new Scoreboard();
	pipes.push(new Pipe());

	// birdAn = createSprite(70, windowHeight/3, 60, 60);
	// birdAn.addAnimation('flying', 'Bird/bird0001.png', 'Bird/bird0004.png');
	// birdImg = loadImage('Bird/bird0001.png');
}

function draw() {
	background(0);

	for (var i = pipes.length-1; i >= 0; i--) {
		pipes[i].show();
		pipes[i].update();

		if(pipes[i].hits(bird)) {
			if (pValue > hsValue) {
				hsValue = pValue;
				pValue = 0;
			} else {
				pValue = 0;
			}
		}

		if (pipes[i].offscreen()) {
			pipes.splice(i, 1)
		}
	}

	bird.update();
	bird.show();
	scoreboard.show();

	if (frameCount % 40 == 0) {
		pipes.push(new Pipe());
		pValue += 1;

	}

	fill(0);
	textAlign(RIGHT);
	textSize(20);
	text(pValue, width/14 + 135, height/14 + 30);
	text(hsValue, width/14 + 135, height/14 + 55);
	drawSprites();
}

function keyPressed() {
 if (key == ' ') {
	 bird.up();
  }
}

function windowResized() {
		cnv.position(windowWidth/2 - 400, windowHeight/2 - 300 )
}
