# MINI_EX6

![heeeeej](https://github.com/madsdixen/mini_ex/blob/master/mini_ex6/Capture.PNG?raw=true)

[LINK til programmet](https://rawgit.com/madsdixen/mini_ex/master/mini_ex6/index.html)

## A generative program
Program rules: 
- I want the program to handle data from a json file
- I want the program to generate objects with random values including the data from the JSON file
- I want to be able to manipulate the objects after they have been executed

I have been struggling a lot making this program. The program takes random words from a JSON file and writes the letter by letter on the screen in random positions, random sizes, random angle and speed. What i wanted to do, was to save every value for every letter and be able to rewrite them over and over with the same values. If i had been able to do this, i could have made the program stop writing word and i could start manipulating the words that had already been written. Unfortunately i could not make this work, and the words in this program are just "burnt" in to the background that is stated in the Setup() function. it is though, still quite fun to look at program writing the words on the screen, and it sometimes seems as if is was a person writing, because of the changing speed. I have made text slowly fade in to the background to make focus of what is being written. I could have choosen a more fun array of words, than these programming languages, but i focused on making the program work and in the end i didn't have time to find something else.

i have plenty of conditional statements in my code, i am just missing a for-loop. If my intentions had worked, a for-loop had been needed, but since it didn't there was no need for it. In the code there is a for loop marked as a comment, this is what i was trying to make work. i left it to show my intentions.

**a generative system is “not as negation of intentionality but as balancing of randomness and control” (winnie Soon)**
I have used the random function a lot, but i still feel like the program is well organised, though you can't predict the outcome of the executed piece of code. For example, the first letter of a word is shown in a totally random position, but the following letters of the word appears word after word in a line (sometimes with an arc angle) afterwords, and first the whole word is written a new random position is choosen. I do not quite feel like i have reached it with this piece of code, but to me a good generative system is something that show **complexity through simplicity**. For instance this is something where you are still able to understand the mechanics and structure of what is happening, something where you are not experiencing extreme complexity through constant randomness and chaos 

Obs. if it doesn't work, keep refreshing the browser window ;) 

