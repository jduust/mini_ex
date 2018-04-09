# MINI_EX8 - Earthquake Map
In collaboration with [Jakob Duus Terkelsen](https://github.com/jduust)

![heeeeej](https://github.com/madsdixen/mini_ex/blob/master/mini_ex8/Capture.PNG?raw=true)

[LINK to the program](https://rawgit.com/madsdixen/mini_ex/master/mini_ex8/index.html)

## Request and Response
**Inspiration:** Daniel Shiffman - Coding Challenge & Executing Uncertainties - Critical Software Thing:
_David Gauthier, Audrey Samson, Eric Snodgrass, Winnie Soon and Magda Tyżlik-Carver_

### The Program
When the program has loaded, you se a dark world map with a lot of colored circles ind different sizes, continually expanding and contracting themselves a little bit, creating an illusion of motion. The position of the circles indicates where an earthquake has struck within the last week, the size of the cirkel is indicating the magnitude level of the earthquake (big cirkel = high magnitude), the same is the color of the cirkel. There is also some text appearing close to some of the cirkels stating the name of the location, this text only appears with earthquakes of a really high magnitude (Sorry for the overlapping text). In the bottom-left corner of the canvas there are changing titles of today's news on earthquakes with the source of the story on top of it. 

### The Data
The program is using three different data sources that it relies on for the program to work. When the program is executed, it makes an API request to api.mapbox.com for the image (loadImage()) showing the world map with the wanted aspects. Then the earthquake data is requiered, that is taken from a URL from earthquake.usgs.gov containing a CSV file (can be opened with ms Excel and loaded with loadString()). To show the latest news on "Earthquakes", another api request is made, now to newsapi.org with the query "earthquake", this responce is recieved in for of a JSON file (loadJSON()).   

An interesting mistake we made, trying to get the latest news with the search word earthquake illuminated the problem considering API's, that one, in most instances cannot know how the data is gathered and what algorithm that have been used to get the data in the response. We requested the top news from the API, hoping to get the top news on earthquakes. But the response contained nothing or very little about earthquakes, leaving us with the thought that is might be because articles are choosen more by their popularity than their connection to the query. Instead we just did a general search, returning more accurate news.

### Data manipulation and visualisation
Some of the earthquake data had to be manipulated before it could be used in the program. First of all, since the lattitude and longitude is meant to place something on a sphere, it cannot be used as direct locations on the square form world map, therefore a webmercator formula is used to convert the numbers into something that can be used as x and y values in the program. Another formula is used with the magnitude, since, if the number is one point bigger then another it doesn't mean that it is just one time bigger than the other, instead it might be 10 times bigger. The formula then helps making a more accurate sizing of the cirkels.

It is very interesting how you can make sense of data that is complex and you know little about by visualizing it, the csv file seems very messy and it is hard to make the numbers tell you much, unless you know much about earthquake data. The visualisaition here creates a nice overview of size of the earthquakes and where they are mostly occuring. Also by studying the news stories, it is often about Japan, creating a pattern that shows that Japan suffers a great deal from earthquakes (not something we didn't already know).

### Machine collaborating with machines
This program relies almost mainly on machine to machine collaboration, the earthquake data is gathered by machines, that then uploades the data to servers that feeds it to the internet, this program then fetches the latest data and use it. Thus leaving out the necessity of human interference. The news API though, relies on writers ading newsstories on the internet in order to have any data to offer.  
