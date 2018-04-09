class locationName {
	constructor(_loc, _x, _y) {
		this.loc = _loc;
		this.x = _x;
		this.y = _y;
	}
	show() {
		noStroke();
		fill(255);
		textSize(10);
		text(this.loc, this.x, this.y);
	}
}
