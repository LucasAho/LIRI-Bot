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
var keys = require("./keys.js");
// var spotify = new Spotify(keys.spotify);
// spotify-this-song;



var concertSearch = "concert-this";
var spotifySearch = "spotify-this-song";
var movieSearch = "movie-this";
var randomPick = "do-what-it-says";

var conArt;
var spotSong;
var movieName;
var randoTime;

var cmdIn  = process.argv[2];
var srchIn = process.argv[3];
var axios = require("axios");
var nodeArgs = process.argv;

axiosHandler = (url) => {
    console.log(url);
    axios.get(url).then(
        function(response) {
            console.log("This band is playing at " + response.data[0].venue.name);
            console.log("In " + response.data[0].venue.city + ", " + response.data[0].venue.country);
            console.log("On " + response.data[0].datetime);

    })
    .catch(function(error) {
        if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        console.log("---------------Data---------------");
        console.log(error.response.data);
        console.log("---------------Status---------------");
        console.log(error.response.status);
        console.log("---------------Status---------------");
        console.log(error.response.headers);
        } else if (error.request) {
        // The request was made but no response was received
        // `error.request` is an object that comes back with details pertaining to the error that occurred.
        console.log(error.request);
        } else {
        // Something happened in setting up the request that triggered an Error
        console.log("Error", error.message);
        }
        console.log(error.config);
    });
}


conFunc = (str) => {
    var artist = str;
    
    for (var i = 4; i < nodeArgs.length; i++) {

        if (i > 2 && i < nodeArgs.length) {
          artist = artist + "+" + nodeArgs[i];
        } else {
          artist += nodeArgs[i];      
        }
      }
    var bandURL = "https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp";
    axiosHandler(bandURL); 
}

if (cmdIn === concertSearch) {
    conFunc(srchIn);    
} else if (cmdIn === spotifySearch) {
    console.log("Songs are illegal");
    var conArt = srchIn;
    console.log(conArt)
} else if (cmdIn === movieSearch) {
    console.log("These movies are censored");
    var conArt = srchIn;
    console.log(conArt)
} else if (cmdIn === randomPick) {
    console.log("Good. You are under my control");
    var conArt = srchIn;
    console.log(conArt)
} else {
    console.log("Bruh, you gotta pick one");
} 



