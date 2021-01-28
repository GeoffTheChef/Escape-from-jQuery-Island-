// JS File for text adventure game

// DOM Interaction 

const titleText = document.querySelector('#titleText'); 
const chapterText = document.querySelector('#chapterText');
const storyText = document.querySelector('#storyText');
const promptText = document.querySelector('#promptText'); 

// Selecting optionButtons in HTML 
//const firstButton = document.querySelector('.optionButton')
// const secondButton = document.querySelector('.optionButton2')

// Data 

// Decisions
const decision1 = `<button id="optionA"> Option A1 </button> or <button id="optionB> Option B1 </button>`;
const decision2 = `<button> Option A2 </button> or <button> Option B2 </button>`;
const decision3 = `<button> Option A3 </button> or <button> Option B3 </button>`;

// Chapter 1, Scene 1, text blocks
const c1s1t1 = `<p> Chapter 1 Scene 1 Text 1 </p>`;
const c1s1t2 = `<p> Chapter 1 Scene 1 Text 2 </p>`;
const c1s1t3 = `<p> Chapter 1 Scene 1 Text 3 </p>`;
const c1s1t4 = decision1;
 
// Chapter 1, Scene 2, text blocks
const c1s2t1 = `<p> c1s2t1 </p>`;
const c1s2t2 = `<p> c1s2t2 </p>`;
const c1s2t3 = `<p> c1s2t3 </p>`;
const c1s2t4 = decision2; 
 
// Chapter 1, Scene 3, text blocks
const c1s3t1 = `<p> c1s2t1 </p>`;
const c1s3t2 = `<p> c1s2t2 </p>`;
const c1s3t3 = `<p> c1s2t3 </p>`;
const c1s3t4 = decision3; 
  
// Chapter 1, Scenes
const scene1 = [c1s1t1, c1s1t2, c1s1t3, c1s1t4];
const scene2 = [c1s2t1, c1s2t2, c1s2t3, c1s2t4];
const scene3 = [c1s3t1, c1s3t2, c1s3t3, c1s2t4]; 

// Chapter 1 
const chapter1 = [scene1, scene2, scene3]; 

// Now we are modelling out the functionality 

// Gives you the length of a chapter 
console.log(chapter1.length);  

// This gets you the first scene of 3 arrays
console.log(chapter1[1]);  

// Successfully logged 3 arrays to console.
console.log(chapter1); 

// This variable can search through the indexes in the arrays
let storyCoordinates = chapter1[sceneIndex][textBlockIndex];
console.log(storyCoordinates); 

// This is an on.Click event which logs something to the console when you click the button for 
// option A or option B 

// const optionAButton = document.querySelector('#optionA');
// optionAButton.addEventListener('click', function() {
//     console.log('You clicked the button for optionA')
// })

// const optionBButton = document.querySelector('#optionB'); 
// optionBButton.addEventListener('click', function() {
//     console.log('You clicked the button for optionB')
// })

let currentScene; 
let storyIndex; 
let sceneIndex;
let textBlockIndex; 

storyIndex = 0; 
sceneIndex = 0; 
textBlockIndex = -1; 

console.log(chapter1[sceneIndex][textBlockIndex]); // This gets you the first text block

// Add an event listener to the window that registers an event based on a "keydown" input

window.addEventListener('keydown', handleKeyDown); 

function handleKeyDown(event) {
    if (event.code === "Space") {
        textBlockIndex = textBlockIndex + 1;
        console.log(chapter1[sceneIndex][textBlockIndex])
        storyText.innerHTML = chapter1[sceneIndex][textBlockIndex]; // This gets you the first text block // This is close but not exactly, the innerHTML should be accessing the result of the counter being at a certain place 
        //This is where the next text block should be;
        //console.log(chapter1[1][1])
        // promptText.innerHTML = scene1[2] // Sometimes there will be a prompt, sometimes there will not be
    }
}












