var cnv, input, button;
var plc = 20;
var talk = new p5.Speech();
var clicked = false;
var s = "";
function setup() {
	cnv = createCanvas(displayWidth, displayHeight);
	cnv.position(0, 50);
	input = createInput('This is not a pipe');
	input.position(20, 20);
	input.size(400);
	button = createButton('Submit');
	button.position(423.9, 20)
	button.mousePressed(processRita);
	textFont('Georgia'); textSize(14); textAlign(CENTER);
}
function processRita() {
	let tags = [];
	if (clicked == false) {
		s = input.value();
		clicked = true;
	}
	let rs = new RiString(s);
	let words = rs.words();
	let pos = rs.pos();
	talk = new p5.Speech();
	let randomWord = int(random(words.length));
	let sbs = RiTa.similarBySound(words[randomWord], 3);
		for (z = 0; z < sbs.length; z++) {
			if (RiTa.getPosTags(sbs[z]) == pos[randomWord]) {
				tags.push(sbs[z]);
			}
		}
		s = rs.replaceWord(randomWord, RiTa.randomItem(tags));
		s = s._text;
			if (plc >= windowHeight - 50) {
				background(255);
				plc = 20;
			}
	 	text(s, windowWidth/2, plc);
	 	talk.speak(s);
	 	button.mousePressed(newText);
		plc += 15;
}
function newText() {
	clicked = false;
	background(255);
	plc = 20
	processRita();
}
function draw() {
	if (talk.synth.speaking === false && clicked) {
		processRita();
	}
}
