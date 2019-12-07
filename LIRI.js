//Search spotify for songs, bands in town for concerts, and OMDB for movies
    //api reader with axios packages
        //https://www.npmjs.com/package/node-spotify-api
        //https://www.npmjs.com/package/axios
        //http://www.omdbapi.com/
        //http://www.artists.bandsintown.com/bandsintown-api
        //https://www.npmjs.com/package/moment
        //https://www.npmjs.com/package/dotenv

//Turned in as CLI app
    //Screenshots/GIF/and/or video format showing working app
        //link to ^ in README
        
// require("dotenv").config();
// var keys = require("./keys.js");
// var spotify = new Spotify(keys.spotify);
// spotify-this-song;

//user type concert-this <artist/band name here>
    //maybe if arg2 = command

var cmdIn  = process.argv[2];
var srchIn = process.argv[3];

var concertSearch = "concert-this";
var spotifySearch = "spotify-this-song";
var movieSearch = "movie-this";
var randomPick = "do-what-it-says";


if (cmdIn === concertSearch) {
    console.log("No bands");
} else if (cmdIn === spotifySearch) {
    console.log("Songs are illegal")
} else if (cmdIn === movieSearch) {
    console.log("These movies are censored")
} else if (cmdIn === randomPick) {
    console.log("Good. You are under my control");
} else {
    console.log("Bruh, you gotta pick one");
}