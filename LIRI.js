//Turned in as CLI app
    //Screenshots/GIF/and/or video format showing working app
        //link to ^ in README

//requires
var axios = require("axios");
var fs = require('fs');
require("dotenv").config();

//Variables are set to possible commands from user
var concertSearch = "concert-this";
var spotifySearch = "spotify-this-song";
var movieSearch = "movie-this";
var randomPick = "do-what-it-says";

//Node Variables
var cmdIn  = process.argv[2];
var nodeArgs = process.argv;

//Spotify variables
var keys = require("./keys.js");
var Spotify = require('node-spotify-api');
var spotify = new Spotify(keys.spotify);

//Appends all pertinent console info to log.txt
logWriter = (log) => {
    fs.appendFile("log.txt", log + (" "), function(err) {

        if (err) {
            console.log(err)
        }
    })
}

//Handler chooses path to use for URL and runs it into axios
axiosHandler = (url, path) => {
    axios.get(url).then(
        function(response) {
            let branch = path;
            //Decision tree to pick API to use
            if (nodeArgs.length === 3 && branch === concertSearch && cmdIn !== randomPick) {
                console.log("Please enter a band to see if a show is coming near you!");
                var logged ="\nPlease enter a band to see if a show is coming near you!";
                logWriter(logged);
            } else if (response.data.length === 0 && branch === concertSearch) {
                console.log("No upcoming shows, sorry!");
                var logged = "\nNo upcoming shows, sorry!";
                logWriter(logged);
            } else if (branch === concertSearch) {
                
                console.log("Your band is playing at " + response.data[0].venue.name);
                console.log("In " + response.data[0].venue.city + ", " + response.data[0].venue.country);
                let dateRaw = response.data[0].datetime;
                var moment = require('moment');
                moment(dateRaw).format("MM/DD/YYYY");
                console.log("On " + moment(dateRaw).format("MM/DD/YYYY"));
                var logged = [
                    "\nYour band is playing at " + response.data[0].venue.name,
                    "\nIn " + response.data[0].venue.city + ", " + response.data[0].venue.country,
                    "\nOn " + moment(dateRaw).format("MM/DD/YYYY")
                ]
                logWriter(logged);
            } else if (branch === movieSearch) {
                var logged = [
                    "\nMovie Title: " + response.data.Title,
                    "\nRelease Year: " + response.data.Year,
                    "\nIMDB Rating: " + response.data.Ratings[0].Value,
                    "\nRotten Tomatoes Rating: " + + response.data.Ratings[1].Value,
                    "\nCountry of Production: " + response.data.Country,
                    "\nLanguage(s) of Film: " + response.data.Language,
                    "\nPlot Summary: " + response.data.Plot,
                    "\nLead Actors: " + response.data.Actors,
                ]
                console.log("Movie Title: " + response.data.Title);
                console.log("Release Year: " + response.data.Year);
                console.log("IMDB Rating: " + response.data.Ratings[0].Value);
                console.log("Rotten Tomatoes Rating: " + response.data.Ratings[1].Value);
                console.log("Country of Production: " + response.data.Country);
                console.log("Language(s) of Film: " + response.data.Language);
                console.log("Plot Summary: " + response.data.Plot);
                console.log("Lead Actors: " + response.data.Actors);
                logWriter(logged);
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
    var pickBranch = "concert-this"
    axiosHandler(bandURL, pickBranch); 
}

//Function creates URL to run into axios handler
movieFunc = (str) => {
    if (str === undefined) {
        str = "mr+nobody";
    }
    //Creates URL for axios
    var movieURL = "http://www.omdbapi.com/?t=" + str + "&y=&plot=short&apikey=trilogy";
    var pickBranch = "movie-this"
    axiosHandler(movieURL, pickBranch);
}

//Function runs user arg into spotify api and logs needed info
spotFunc = (str) => {
    if (str === undefined) {
        //This song will be searched if no argument is entered
        str = "The Sign";
    } 
    console.log(str);
    //Spotify api search
    spotify
    .search({type: 'track', query: str, limit: 10
    }).then(function(response) {
        console.log("Here are the top relevant tracks: ")
        response.tracks.items.forEach(function(element) {
            
            var elIndex = response.tracks.items.indexOf(element);
            console.log(elIndex);
            console.log("Track " + elIndex);
            console.log("Song Name: " + response.tracks.items[elIndex].name);
            console.log("Song Artist: " + response.tracks.items[elIndex].artists[0].name);
            console.log("Album Name: " + response.tracks.items[elIndex].album.name);
            console.log("Song Link: " + response.tracks.items[elIndex].external_urls.spotify);
            console.log();
            
            var logged = [
                "\nHere are the top relevant tracks: ",
                "\nTrack " + elIndex,
                "\nSong Name: " + response.tracks.items[elIndex].name,
                "\nAlbum Name: " + response.tracks.items[elIndex].album.name,
                "\n Song Link: " + response.tracks.items[elIndex].external_urls.spotify
            ]
            logWriter(logged);
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
    var logged = [nodeArgs[2],srchTrue];
    logWriter(logged);
    //Function picks a path to send user args into
    path = (a,b) => {        
        
        //Choosing a command path
        if (a === concertSearch) {
            conFunc(b);    
        } else if (a === spotifySearch) {
            spotFunc(b);
        } else if (a === movieSearch) {
            movieFunc(b);
        } else {
            console.log("Bruh, you gotta pick one");
            var logged = "Bruh, you gotta pick one";
            logWriter(logged);
        } 
    }    

    //Function runs cmds from random.txt
    if (cmdIn === randomPick) {        
        fs.readFile('random.txt', 'utf8', function(err, data){
            if (err) throw err;           
            var dataArr = data.split(",");
            var cmd = (dataArr[0]);
            var srch = (dataArr[1]);            
            var replaced = srch.split(' ').join('+');
            
            path(cmd,replaced);
        });
    } else {
        path(cmdIn, srchTrue);
    }
   
}

//Initializing program with cmdHandle
cmdHandler(nodeArgs);
