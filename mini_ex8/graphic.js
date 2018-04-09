class graphic {
	constructor(_x, _y, _d, _c) {
		this.x = _x;
		this.y = _y;
		this.d = _d;
		this.c = _c;
	}
	show() {
		stroke(255, 0, 255 - this.c, 150);
		fill(255, 0, 255 - this.c, 150);
		ellipse(this.x, this.y, this.d + this.expand, this.d + this.expand);
	}
	update(_expand) {
		this.expand = _expand;
	}
}
