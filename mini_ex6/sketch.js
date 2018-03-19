//position values
var x = 0;
var y = 0;
var x2 = 0;
var y2 = 0;
var stepSize = 5.0;
//random framerate calculater
var rFC;
//text variables
var words, letters;
var fontSizeMin = 3;
var newP = [];
var sl = [];
var lc = [];
var ac = [];
var ts = [];
var posY = [];
var posX = [];
var savedL = [];
var index = 0;
//random angle
var changeAngle;
//word counter
var counter = 0;
//JSON word counter
var pl, plCount;

class letter {
	show(_newLetter, _d, _x, _y, _angle, _ts) {
		this.newLetter = _newLetter;
		this.d = _d;
		this.x = _x;
		this.y = _y;
		this.angle = _angle;
		this.ts = _ts;
		//makes sure color of the doesn't get either too strong or too dark
		if (this.d < 100) {
			this.d = 100;
		} else if (this.d > 200) {
			this.d = 200;
		}
		textFont('Georgia');
		textAlign(LEFT);
		textSize(this.ts);
		noStroke();
		fill(0 + this.d, 255 - this.d, 255 - this.d);
		translate(this.x, this.y);
		rotate(this.angle);
		text(this.newLetter, 0, 0);
	}
}
function setup() {
//sets canvas equal to the width and height of the window
	createCanvas(displayWidth, displayHeight);
  background(50);
//Decies random frameCount to create random wrinting speed
	rFC = int(random(5, 20));
//decides radom position for the text ending and starting point
  x = random(0, windowWidth);
  y = random(0, windowHeight);
	x2 = random(0, windowWidth);
	y2 = random(0, windowHeight);
//Decides random angle on dispalyed text
	changeAngle = random(-1.0, 1.0);
//Gets data from JSON file
	pl = loadJSON('programming_languages.JSON', getData);

}
//Contains data from JSON File
function getData(data) {
	plCount = data.length;
	pl = data;
	words = int(random(0, plCount));
}
function draw() {
	// background(50);
//If JSON files have been loaded, the following code will be executed
 if (pl) {
//iniciates word writing in the speed of the random frameCount
	if (frameCount % rFC == 0) {
//letters equals to random word in the programming_languages Array
		letters = pl[words];
//Calculates the distance between the x/y and x2/y2 values and divides it to get a smaller number
		var d = dist(x, y, x2, y2) / 3;
//text size i decided upon the distance values calculated
		textSize(fontSizeMin + d/2);
//counts the amout of letters in the random word
    var newLetter = letters.charAt(counter);
//calculates the width of the size of the letters
		stepSize = textWidth(newLetter);
//if the distance bestween x/y and x2/y2 are smaller than the textWidth this happens to expand distance
			if (d <= stepSize) {
				x2 += 1;
				y2 += 1;
		}
//If the distance is bigger than the size of the letter, it write a new letter in the word
    if (d > stepSize) {
			//Create the angle the word is written in
						var angle = atan2(y2 - y, x2 - x);
			//adds a random value to the angle for each word
						angle += changeAngle;
			//Stores new letters, distances and letter objects
					newP.push(new letter());
					ts.push(fontSizeMin + d/2);
					sl.push(newLetter);
					lc.push(d);
					ac.push(angle);
					posX.push(x);
					posY.push(y);

//The displaying of the word
				push();
					newP[index].show(sl[index], lc[index], posX[index], posY[index], ac[index], ts[index]);
				pop();

//word counter goes up by one to get next letter in the word
			counter++;
			index++;
//if the letter counter reaches the amount of letters in the word, this code is executed
      if (counter >= letters.length) {
//Letter counter goes back to zero
				counter = 0;
//new random values are assigned for x/y and x2/y2
				x = random(0, windowWidth);
			  y = random(0, windowHeight);
				x2 = random(0, windowWidth);
				y2 = random(0, windowHeight);
//new random word is choosen
				words = int(random(0, plCount));
//new random angle is assigned to the new word
				changeAngle = random(-1.0, 1.0);
//new random frameCount is choosen to the writing speed of the new word
				rFC = int(random(5, 20));
				}
/*for every time the chosen value is reached by the frameCount,
 x/y is plussed with the cosinus and sinus of the angle
 multiplied with the distance of the letter,
 to constantly move closer to the x2/y2 values*/
    	x = x + cos(angle) * stepSize;
    	y = y + sin(angle) * stepSize;
			}
  	}
	}
	// push();
	// for (i = 0; i < newP.length; i++) {
	//  newP[i].show(newP[i].newLetter, newP[i].d, newP[i].x, newP[i].y, newP[i].angle, newP[i].ts);
 // }
	// pop();
/*constantly writing a dark transparent front cover, to make the illusion
 that the letters fades into, and becomes a part of the background*/
	fill(75, 4);
	rect(0, 0, windowWidth, windowHeight);
}
//when delete or space is Released, the canvas will rewrite itself.
function keyReleased() {
  if (keyCode == DELETE || keyCode == BACKSPACE) background(50);
}
