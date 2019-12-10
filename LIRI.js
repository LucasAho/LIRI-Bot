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
        

// spotify-this-song;

var concertSearch = "concert-this";
var spotifySearch = "spotify-this-song";
var movieSearch = "movie-this";
var randomPick = "do-what-it-says";

var spotSong;
var movieName;
var randoTime;

//Node Variables
var cmdIn  = process.argv[2];
var srchIn = process.argv[3];

var axios = require("axios");
var nodeArgs = process.argv;

//Spotify variables
require("dotenv").config();
var keys = require("./keys.js");
var Spotify = require('node-spotify-api');

var spotify = new Spotify(keys.spotify);


//Function runs a URL into axios request
axiosHandler = (url) => {
    axios.get(url).then(
        function(response) {
            if (nodeArgs.length === 3) {
                console.log("Please enter a band to see if a show is coming near you!");
            }else if (response.data.length === 0) {
                console.log("No upcoming shows, sorry!")
            } else {
                console.log("Your band is playing at " + response.data[0].venue.name);
                console.log("In " + response.data[0].venue.city + ", " + response.data[0].venue.country);
                let dateRaw = response.data[0].datetime;
                var moment = require('moment');
                moment(dateRaw).format("MM/DD/YYYY");
                console.log("On " + moment(dateRaw).format("MM/DD/YYYY"));
            }
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


//Function creates useable URL to run into axios
conFunc = (str) => {
    //Creates URL for axios   
    var bandURL = "https://rest.bandsintown.com/artists/" + str + "/events?app_id=codingbootcamp";
    axiosHandler(bandURL); 
}

spotFunc = (str) => {
    if (str === undefined) {
        str = "The Sign";
        console.log(str);
    } else {
        console.log(str);
    }
    var spotURL = "https://api.spotify.com/v1/tracks/" + str;
    spotify
    .search({type: 'track', 
    query: str,
    limit: 10
    })
    .then(function(response) {
        console.log("Here are the top relevant tracks: ")
        response.tracks.items.forEach(function(element) {
            var elIndex = response.tracks.items.indexOf(element);
            console.log("Track " + elIndex);
            console.log("Song Name: " + response.tracks.items[elIndex].name);
            console.log("Song Artist: " + response.tracks.items[elIndex].artists[0].name);
            console.log("Album Name: " + response.tracks.items[elIndex].album.name);
            console.log("Song Link: " + response.tracks.items[elIndex].external_urls.spotify);
            console.log();
        })       
    })
    .catch(function(err) {
        console.error('Error occured: ' +  err);
    });    
}

//Checks initial command
cmdHandler = (arr) => {
 
    let srchTrue = nodeArgs[3];
    //Combining multiword search arguments

    for (var i = 4; i < arr.length; i++) {        
        if (i > 2 && i < arr.length) {
            
            srchTrue = srchTrue + "+" + arr[i];
        } else {
            
            srchTrue += arr[i];      
        }
    }
    
    //Choosing a command path
    if (cmdIn === concertSearch) {
        conFunc(srchTrue);    
    } else if (cmdIn === spotifySearch) {
        spotFunc(srchTrue);
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

}
cmdHandler(nodeArgs);
