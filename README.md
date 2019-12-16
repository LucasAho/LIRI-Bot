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

* ![Image of Concert Searches](Assets\Screenshots\ConcertSearch.png)
* ![Gif of Concert Default](Assets\Gifs\ConcertDefault-Gif.gif)
* ![Gif of Concert Search](Assets\Gifs\ConcertSearch-Gif.gif)

#### Movie Searches

* ![Image of Movie Search](Assets\Screenshots\MovieSearch.png)
* ![Gif of Movie Default](Assets\Gifs\MovieDefault-Gif.gif)
* ![Gif of Movie Search](Assets\Gifs\MovieSearch-Gif.gif)


#### Spotify Searches

* ![Image of Spotify Default](Assets\Screenshots\SpotifyDefault.png)
* ![Image of Spotify Search](Assets\Screenshots\SpotifySearch.png)
* ![Gif of Spotify Default](Assets\Gifs\SpotifyDefault-Gif.gif)
* ![Gif of Spotify Search](Assets\Gifs\SpotifySearch-Gif.gif)

#### Random Command
* ![Image of Random Movie](Assets\Screenshots\RandomMovie.png)
* ![Image of Random Spotify](Assets\Screenshots\RandomSpotify.png)
* ![Image of Random Concert](Assets\Screenshots\RandomConcert.png)
* ![Gif of Random Movie](Assets\Gifs\MovieRandom-Gif.gif)
* ![Gif of Random Spotify](Assets\Gifs\SpotifyRandom-Gif.gif)
* ![Gif of Random Concert](Assets\Gifs\ConcertRandom-Gif.gif)

#### Bonus Log File
* ![Image of Log File Contents](Assets\Screenshots\LogFile.png)
* ![Gif of Logging Functions](Assets\Gifs\LogFile-Gif.gif)