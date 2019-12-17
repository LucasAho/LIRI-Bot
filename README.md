# LIRI-Bot
Its like SIRI! But instead of Speach Interpretation, LIRI interprets terminal commands to search for songs, concerts, and movies, and logs all relevant info to a txt file and terminal. It does this through a multitude of APIs and js programs. To view screenshots and gifs of the working app, just checkout the bottom of the README!

## App Purpose and Function
This CLI allows a user to search for songs, concerts, and movies from one location, allowing the user to find relevant info based on their searches. The user can use the app by typing 
    "node liri.js" followed by one of 4 options
    * concert-this <"concert title">
    * spotify-this-song <"song title">
    * movie-this <"movie title">
    * do-what-it-says
This will then log info and links relevant to the user's query.

## File Infrastructure
### Main File
    liri.js contains the majority of the user interface and API manipulation logic, and connects to 
        * .env file @liri.js:8
        * /keys.js @liri.js:21
        * log.txt @liri.js:27
        * random.txt @liri.js:199
    The app takes in the 4 commands listed above and writes this content to the log.txt file. 
### Other Files
    * .gitignore: Prevents listed files from being commited, especially to protect API keys.
    * keys.js: Works as back-end caller for spotify API keys stored in .env
    * .env: Holds my spotify key and secret. User will need to supply their own, formatted as 
    "SPOTIFY_ID= yourID
    SPOTIFY_SECRET= yourSecret"
    You can get your own Id here: https://developer.spotify.com/dashboard/
    * random.txt: Holds command and search argument for the do-what-it-says command from user. Eventually I intend to add to and randomly choose from the available options. 
    * log.txt: All input and output from terminal that is pertinent to user is stored to this file.
Remaining files are npm installs through node. 

### Installing and running your own LIRI
While the repository will give you all the files necessary to run the concert and movie searches, you will need to create your own env file with your own spotify keys to run the API. The formatting and instructions on doing this are listed above in the .env file description. Then navigate to the LIRI-BOT directory and open a terminal. From here you can use the commands given in the description to search for concerts, songs, and movies.

### Screenshots and Gifs of Functions

#### Concert Searches
Image of Concert Input/Output              
* ![Image of Concert Searches](https://github.com/LucasAho/LIRI-Bot/blob/master/Assets/Screenshots/ConcertSearch.png)
Gif showing concert search without second input
* ![Gif of Concert Default](https://github.com/LucasAho/LIRI-Bot/blob/master/Assets/Gifs/ConcertDefault-Gif.gif)
Gif showing concert with actual search value
* ![Gif of Concert Search](https://github.com/LucasAho/LIRI-Bot/blob/master/Assets/Gifs/ConcertSearch-Gif.gif)

#### Movie Searches
Image of Movie Input/Output    
* ![Image of Movie Search](https://github.com/LucasAho/LIRI-Bot/blob/master/Assets/Screenshots/MovieSearch.png)
Gif showing movie search without second input
* ![Gif of Movie Default](https://github.com/LucasAho/LIRI-Bot/blob/master/Assets/Gifs/MovieDefault-Gif.gif)
Gif showing movie search with value to search
* ![Gif of Movie Search](https://github.com/LucasAho/LIRI-Bot/blob/master/Assets/Gifs/MovieSearch-Gif.gif)


#### Spotify Searches
Image of Spotify Default Input/Output    
* ![Image of Spotify Default](https://github.com/LucasAho/LIRI-Bot/blob/master/Assets/Screenshots/SpotifyDefault.png)
Image of Spotify Search Input/Output   
* ![Image of Spotify Search](https://github.com/LucasAho/LIRI-Bot/blob/master/Assets/Screenshots/SpotifySearch.png)
Gif of Spotify Default Input/Output  
* ![Gif of Spotify Default](https://github.com/LucasAho/LIRI-Bot/blob/master/Assets/Gifs/SpotifyDefault-Gif.gif)
Gif of Spotify Search Input/Output  
* ![Gif of Spotify Search](https://github.com/LucasAho/LIRI-Bot/blob/master/Assets/Gifs/SpotifySearch-Gif.gif)

#### Random Command
Images of random.txt file working with movie, concert, and song searches
* ![Image of Random Movie](https://github.com/LucasAho/LIRI-Bot/blob/master/Assets/Screenshots/RandomMovie.png)
* ![Image of Random Spotify](https://github.com/LucasAho/LIRI-Bot/blob/master/Assets/Screenshots/RandomSpotify.png)
* ![Image of Random Concert](https://github.com/LucasAho/LIRI-Bot/blob/master/Assets/Screenshots/RandomConcert.png)
Gifs of realtime input/output with random.txt
* ![Gif of Random Movie](https://github.com/LucasAho/LIRI-Bot/blob/master/Assets/Gifs/MovieRandom-Gif.gif)
* ![Gif of Random Spotify](https://github.com/LucasAho/LIRI-Bot/blob/master/Assets/Gifs/SpotifyRandom-Gif.gif)
* ![Gif of Random Concert](https://github.com/LucasAho/LIRI-Bot/blob/master/Assets/Gifs/ConcertRandom-Gif.gif)

#### Bonus Log File
Image shows contents of log.txt file
* ![Image of Log File Contents](https://github.com/LucasAho/LIRI-Bot/blob/master/Assets/Screenshots/LogFile.png)
Gif shows off log.txt file and it's innerworkings with JS and the terminal.
* ![Gif of Logging Functions](https://github.com/LucasAho/LIRI-Bot/blob/master/Assets/Gifs/LogFile-Gif.gif)