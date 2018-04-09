//canvas Size
let cnv, cWidth = 1024, cHeight =	512; //adds to map api url
let zoom = 0; //adds to map api url
//map image
let mapApi = 'https://api.mapbox.com/styles/v1/mapbox/dark-v9/static/0,0,1,0,0/' + cWidth + 'x' + cHeight + '?access_token='
let access_token = 'pk.eyJ1IjoibWFkc2RpeGVuIiwiYSI6ImNqZjFkMWN6YzBxdDUycXBjNXNneDUyMmQifQ.ZFXPp8xx4sF8r308mxMqjg'
let mapUrl = mapApi + access_token;
let mapImage;
// //NEWS API
let newsApi = 'https://newsapi.org/v2/everything?';
let que = '&q=earthquake';
let from = '&from=';
let lang = 'language=en';
let apiKeyNews = '&apiKey=8d4276d372324d4f9a3181eaf35b2957';
//Get date
let today = new Date();
//formatting date to match API
let dd = today.getDate();
let mm = today.getMonth()+1; //January is 0
let yyyy = today.getFullYear();
  if(dd<10) {
    dd = '0'+dd
  }
  if(mm<10) {
    mm = '0'+mm
  }
//creates year-month-day value to the today variable for the news API
today = yyyy + '-' + mm + '-' + dd;
let url = newsApi + lang + que + from + today + apiKeyNews; //News Api url
let news;
//changer values
let changer = {
 x: 0,
 y: 0
}
//mapping
let clat = 0, clon = 0, lat = 0, lon = 0, earthquakes, dist = 0, locations = [];
//graphics
let graphics = [], locationNames = [], execute = false, expand = 0;
//Load map image and earthquakes
function preload() {
	mapImage = loadImage(mapUrl);
	earthquakes = loadStrings('https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.csv');
}

//Check graphic.js and locationName.js for additional functions we've added
function setup() {
	cnv = createCanvas(cWidth, cHeight);
	cnv.position(windowWidth/2 - cWidth/2, windowHeight/2 - cHeight/2);
  frameRate(10);
  translate(width/2, height/2);
	loadJSON(url, getData);
	let cx = mercX(clon), cy = mercY(clat);
//calculates csv data
	for (let i = 1; i < earthquakes.length; i++) {
    let data = earthquakes[i].split(/,/); //Splits the data in the csv file, creating an array in the data variable
		let lat = data[1], lon = data[2], mag = data[4], loc = data[14];
		let x = mercX(lon) - cx, y = mercY(lat) - cy, c = 0;
//variable C changes the color of ellipses
    if (mag >= 5) {
			c = 150;
		} else if (mag >= 4) {
			c = 75;
		} else if (mag >= 3) {
			c = 25;
		}
    //calculating magnitude to a number
		mag = pow(mag, 10);
		mag = sqrt(mag);
		let magmax = sqrt(pow(10, 10));
		let d = map(mag, 0, magmax, 0, 180);
		graphics.push(new graphic(x, y, d, c));
	}
//Adds new location names to the locations array
	for (let i = 1; i < earthquakes.length; i++) {
		let data = earthquakes[i].split(/,/), lat = data[1], lon = data[2]
		let mag = data[4], loc = data[14], x = mercX(lon) - cx, y = mercY(lat) - cy;
		let tf = false;
		//Makes sure the same text is not written twice
		for (z = 0; z < locations.length; z++) {
			let sameLocation = locations[z];
				if (loc === sameLocation) {
					tf = true;
			}
		}
		if (loc == 'earthquake' || tf == true) {
			//do nothing
		} else if (mag >= 4.5){
		locations.push(loc);
		locationNames.push(new locationName(loc, x, y));
		}
  }
execute = true;
}
//Web Mercator - lon
function mercX(lon) {
	lon = radians(lon);
	let a = (256 / PI) * pow(2, 1);
	let b = lon + PI;
	return a * b;
}
//Web Mercator - lat
function mercY(lat) {
	lat = radians(lat);
	let a = (256 / PI) * pow(2, 1), b = tan(PI / 4 + lat / 2), c = PI - log(b);
	return a * c;
}
//Function containg new data
function getData(data2) {
	console.log(data2);
	news = data2.articles;
}
function draw() {
//Translating to center
translate(width/2, height/2);
imageMode(CENTER);
image(mapImage, 0, 0);
//Drawing earthquakes and locationnames
	if (execute == true) {
		for (i = 0; i < graphics.length; i++) {
			expand += 0.1;
			graphics[i].show();
			graphics[i].update(expand);
			if (expand >= 4) {
				expand = 0;
			}
		}
		for (i = 0; i < locationNames.length; i++) {
			locationNames[i].show();
		}
	}
//displays headlines with search word earthquake
if (news) {
  push();
	 translate(0 - width/2, 0 - width/2);
	 strokeWeight(3);
   fill(200);
   textAlign(LEFT);
   textSize(20);
   textFont('Helvetica');
//Changes news headline after amount of frames
  changer.y++;
  if (changer.y == 100) {
    changer.x++;
    changer.y = 0;
  }
  if (changer.x === 5) {
    changer.x = 0;
  }
  text(news[changer.x].title, 20, 640, windowWidth/4.5, 300); //Displays news title
  textSize(10);
  text('Source: ' + news[changer.x].source.name, 20, 630); //Displays news source
 pop();
 }
}
//Moves canvas to center of the screen after resize
function windowResized() {
	cnv.position(windowWidth/2 - cWidth/2, windowHeight/2 - cHeight/2);
}
