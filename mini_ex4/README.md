# MINI_EX4

![heeeeej](https://github.com/madsdixen/mini_ex/blob/master/mini_ex4/2018-03-03%20(1).png?raw=true)

[LINK til programmet](https://rawgit.com/madsdixen/mini_ex/master/mini_ex4/index.html)


## Capture All

### The Button: 
*"It points directly to our limited understanding of the computer as a machine and as a medium and how it functions in culture and society."* (Pold, Søren32)

All the features of the program are initialized and showed by the click of a button, made with the cursor of the mouse. Nothing tells you what is going to happen when the button is pressed, the button is just there, alone in the top-left corner, small and only displaying the text ‘Click Me’. With these words the button is tempting you to click on it (taking into consideration, our tendency to follow instructions), but the consequences of clicking it is unknown to you. The only way to get an idea of what is going to happen after the click, is to unveil, and study the code that is hidden behind that which is displayed. What I have found interesting here, and what I have experimented with, is to visualize the number of things that can be executed just by the click of a button (even things you wouldn’t consider having a direct connection the given button). This, to try to reveal the possibilities of how much that can happen just from a click of the mouse and how much we as an individual can be “blackboxed” from the consequences of the act.

### Data Capture:
I wanted to create a string of actions, that shows how a single click of the mouse can initialize the capturing of data from several instances, directed to you as an individual. To do this I have experimented with different API’s, one that detects your IP information, one with global weather information and a news database. So, what happens when the button is clicked: Data collected from the IP address detection tells the city of the host, which in the most cases equals to the location of the computer user. This location then automatically affects the weather API, that then retrieves weather data for this city. The weather data includes information of the current weather condition like ‘Snow’, ‘rain’, ‘clouds’, the conditions is then used as the search word for the news API, that returns the top news of the given search word. Some of the different data results of the API’s are shown in the program.

I have also experimented with face tracking using the webcam. Resulting in a ‘mask’ like face, drawn of ellipses following different tracking points of the face. The ellipses changes color depending on where they are shown on the screen. The program saves where your face has been, showing the path of your movements and results in colorful paintings. This is visualizing how your movements can be captured and stored.

**OBS.** Some networks do not trust the weather API and it won’t work (happened with phone network sharing).

