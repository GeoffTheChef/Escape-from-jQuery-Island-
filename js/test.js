// Escape from jQuery Island 

// First keycode ="space"

// This is all from the other stuff : 

// const chefsTextH2 = document.querySelector('.chefsTextH2');
// const chefsTextP = document.querySelector('.chefsTextP'); 
// const moreInfo = document.querySelector('.moreInfo'); 

// const chef1 = document.querySelector('.chef1');

// chef1.addEventListener('click', function() {
//     chefsTextH2.textContent = `Hi, Im Gino!!`;
//     chefsTextP.textContent = `this is a chef's text1, press g (for Gino) for more info`;
//     moreInfo.textContent = ` `; 
//     console.log(`Gino`);


// window.addEventListener('keydown', handleKeyDown); 
// function handleKeyDown(event) {
//     if (event.key === 'g') {

//         /* Same output as button click */ 

//         chefsTextH2.textContent = `Hi, Im Gino!!`;
//         chefsTextP.textContent = `this is a chef's text1, press g (for Gino) for more info`;
//         moreInfo.textContent = ` `; 
//         console.log(`Gino`);

//         /* Extra Info */ 
        
//     console.log(event.key);
//     moreInfo.textContent = `Here is some additional info on Gino`;
//     }}; 
// });

// L.O.H. tomorrow see if you can glean from this ^ code that you used in your last project
// how to get spacebar to work to trigger the next text



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