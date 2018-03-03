
//General variables
var input, myCanvas, ipAdd, weather, news, yourCity,
 temp, todaysDate, ctracker, gradient, queValue;
var windSpeed = 0;
var z = 0;
var x = 0;

//changer values
var changer = {
 x: 0,
 y: 0
}

//Weayther API (method: loadJSON)
var api = 'https://api.openweathermap.org/data/2.5/weather?q=';
var units = '&units=metric';
var apiKey = '&APPID=1fce233179cb8c7b9ff85fee876d49bf';

//ipInfo Json (method: Get HTTP)
var xhr = new XMLHttpRequest();
    xhr.open('GET', "https://ipinfo.io/json?token=57714d24493027", true);
    xhr.send();
    xhr.addEventListener("readystatechange", processRequest, false);

// //NEWS API
var newsApi = 'https://newsapi.org/v2/everything?';
  // var que = 'q=identity+theft';
  var from = '&from=';
  var sortBy = '&sortBy=popularity';
  var apiKeyNews = '&apiKey=8d4276d372324d4f9a3181eaf35b2957';

//Get date
var today = new Date();
var dd = today.getDate();
var mm = today.getMonth()+1; //January is 0
var yyyy = today.getFullYear();
  if(dd<10) {
    dd = '0'+dd
  }
  if(mm<10) {
    mm = '0'+mm
  }

//creates year-month-day value to the today variable for the news API
today = yyyy + '-' + mm + '-' + dd;

function preload() {
gradient = loadImage('images/gradient.png');
}

function setup() {
// Setup camera capture
  var videoInput = createCapture(VIDEO);
      videoInput.size(/*1280, 720*/windowWidth, windowHeight);
      // videoInput.position(0, 0);
      videoInput.hide();
//setup tracker
      ctracker = new clm.tracker();
      ctracker.init();
      ctracker.start(videoInput.elt);

//Submit button (ref. index.html)
var button = select('#submit'); //not in use
button.mousePressed(loadData);
input = select('#city'); //not in use
}

//request ipInfo
function processRequest() {
    if (xhr.readyState == 4 && xhr.status == 200) {
      var response = JSON.parse(xhr.responseText);
      ipAdd = response.ip;
      yourCity = response.city;
    }
}

//loads data and starts ctracker + videoInput when button is clicked
function loadData() {
// var fs = fullscreen();
// 		fullscreen(!fs)
// positioneret canvas
  cnv = createCanvas(windowWidth, windowHeight - 200);
  cnv.position(0, 100);
  cnv.mousePressed(clearCanvas);
  background(0);
  var url = api + yourCity/*input.value()*/ + units + apiKey;
	loadJSON(url, getData); //weather
}

//Gets data from weather API
function getData(data) {
console.log(data);
weather = data;
z = weather.wind.speed;
if (weather) {
//makes the news search word equal to the weather condition.
  queValue =  'q=' + weather.weather[0].main;
  var url2 = newsApi + queValue + from + today + sortBy + apiKeyNews;
  loadJSON(url2, getData2); //news
  }
}

//gets data from News API
function getData2 (data2) {
console.log(data2)
news = data2.articles;
}

//constantly looping function
function draw() {

// Happens if the "click me" button is pressed
if (weather) {

//Gets positions of your face
   var positions = ctracker.getCurrentPosition();
   for (var i=0; i<positions.length; i++) {
    push();
      noStroke();
      // set the color of the ellipse based on position on screen
      fill(map(positions[i][0], width*0.33, width*0.66, 0, 255), map(positions[i][1], height*0.33, height*0.66, 0, 255), 255);
      // draw ellipse at each position point
      ellipse(positions[i][0], positions[i][1], 10, 10);
    pop();
   }

//fading black gradient (left side)
   image(gradient, 0, 0, windowWidth/1.3, windowHeight);

//Displays your information
   push();
    textAlign(LEFT); textSize(16); fill(255);
 //Your ip address displayed
    text("Your IP: " + ipAdd, 20, 30);
 //Your location displayed
    text("You are in: " + yourCity, 20, 50);
 //Your Temperature displayed
    text("Temperature: " + weather.main.temp, 20, 70);
 //weather description displayed
    text('You are experiencing ' + weather.weather[0].main + ' in your area', 20, 90);
   pop();
  }

//displays headlines when button is pressed
if (news) {
  push();
   strokeWeight(3);
   fill(255);
   textAlign(LEFT);
   textSize(25);
   textFont('Helvetica');

// Creates news changer
  changer.y++;
  if (changer.y == 200) {
    changer.x++;
    changer.y = 0;
  }
  if (changer.x === news.length) {
    changer.x = 0;
  }
  text(news[changer.x].title, 70, 200, windowWidth/4.5, 300);
  textSize(15);
  text('Source: ' + news[changer.x].source.name, 60, 190);
 pop();
 }
}

//clears canvas drawing
function clearCanvas() {
  clear();
  background(0);
}

//Resizing the canvas
function windowResized() {
resizeCanvas(windowWidth, windowHeight - 200);
windSpeed = windowWidth/2;
background(0);
}
