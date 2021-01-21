// Escape from jQuery Island 
// import $ from "jquery"; 


// First keycode ="space"

console.log('it works, so do it up, and do it up again'); 

// Create a variables for the different spots where text can go, and select those using 
// document.querySelector('.nameOfTextSpotToInputTextInto ');

const titleText = document.querySelector('#titleText'); 
const chapterText = document.querySelector('#chapterText');
const storyText = document.querySelector('#storyText');
const promptText = document.querySelector('#promptText')

// Add an event listener to the window that registers an event based on a "keydown" input

window.addEventListener('keydown', handleKeyDown); 

// create a function which, if the event.key === "Space", which first, logs the new
// text to the console, and then switches the .textContent in the location selected 
// by the previously declared variable with some `new text` 

function handleKeyDown(event) {
    if (event.code === "Space") {
        console.log('You just hit space')
        storyText.innerHTML = `<p> You just had a nightmare about something impossible ... </p>
        <p> Could Java and JavaScript really be the same thing? </p>
        <p> No, that was just a dream. </p> 
        <p> You leave your hotel lobby. </p> 
        </br> 
        `;
        promptText.innerHTML = `
         <button class="optionButton">
            <p> Take the stairs</p>
         </button>

         <button class="optionButton">
         <p> Take the elevator</p>
         </button>  `
         
    }
}

// // Now to get the buttons to function

//const firstButton = document.querySelector('.optionButton')
// const secondButton = document.querySelector('.optionButton2') 

// // Keep in mind that you can put more things into this function later 

 //firstButton.addEventListener('click', function() {
     //console.log('You just hit the button for option 1')
   // } 
//     storyText.innerHTML = `<p> Great Job </p>
//     <p> No, that was just a dream. </p> 
//     <p> You leave your hotel lobby. </p> 
//     </br>  
//     `
//     promptText.innerHTML = `
//     <button class="optionButton">
//     <p> Take the stairs</p>
//     </button>

//     <button class="optionButton">
//     <p> Take the elevator</p>
//     </button>
//     `;`;   
// })










// import $ from "jquery";

// var settings = { 
//     "url": "https://pokeapi.co/api/v2/pokemon/bellsprout/",
//     "method": "GET",
//     "timeout": 0, 
// }; 

// $.ajax(settings).done(function(response) {
//     console.log(response);
//     $(".pokemonData").append("<p>" + JSON.stringify(response) + "</p>"); 
// })