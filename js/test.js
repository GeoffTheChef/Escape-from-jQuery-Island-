const $ = require("jquery");

var settings = { 
    "url": "https:pokeapi.co/api/v2/pokemon/bellsprout/",
    "method": "GET",
    "timeout": 0, 
}; 

$.ajax(settings).done(function(response) {
    console.log(response);
    $("pokemonData").append("<p>" + JSON.stringify(reponse) + "</p>"); 
})