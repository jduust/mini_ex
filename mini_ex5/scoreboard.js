class Scoreboard {
  constructor() {
  this.x = width/14;
  this.y = height/14;
}
  show() {
    push();
    stroke(100);
    strokeWeight(4);
    fill(255, 175);
    rect(this.x, this.y, 150, 75, 10);
    pop();
    fill(0);
    textAlign(LEFT);
    textStyle(BOLD);
    textSize(17);
    text('Highscore: ', this.x + 10, this.y + 55);
  }
}
