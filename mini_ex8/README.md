# MINI_EX8 - Earthquake Map
In collaboration with [Jakob Duus Terkelsen](https://github.com/jduust)

![heeeeej](https://github.com/madsdixen/mini_ex/blob/master/mini_ex8/Capture.PNG?raw=true)

[LINK to the program](https://rawgit.com/madsdixen/mini_ex/master/mini_ex8/index.html)

## Data manipulation and visualization
**Inspiration:** Daniel Shiffman - Coding Challenge & Executing Uncertainties - Critical Software Thing:
_David Gauthier, Audrey Samson, Eric Snodgrass, Winnie Soon and Magda Tyżlik-Carver_

### The Program
When the program has loaded, you se a dark world map with a lot of colored circles ind different sizes, continually expanding and contracting themselves a little bit, creating an illusion of motion. The position of the circles indicates where an earthquake has struck within the last week, the size of the cirkel is indicating the magnitude level of the earthquake (big cirkel = hight magnitude), the same is the color of the cirkel. 

The program is using three different data sources that it relies on for the program to work. When the program is executed, it makes an API request to api.mapbox.com for the image (loadImage()) showing the world map with the wanted aspects. Then the earthquake data is requiered, that is taken from a URL containing a CSV file (can be opened with ms Excel and loaded with loadString()). To show the latest news on "Earthquakes", another api request is made, now to newsapi.org with the query "earthquake", this responce is recieved in for of a JSON file (loadJSON()).   


