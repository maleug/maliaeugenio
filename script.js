let text = document.getElementById('Popup');
let modal = document.getElementById("Modal");
let modalImg = document.getElementById("image-content");
let span = document.getElementsByClassName("close")[0];
let cats = document.getElementById('cats');
let asterion = document.getElementById('asterion');
let deer = document.getElementById('deer');
let popup = document.getElementById("Popup");
let me = document.getElementById("me")

//MODAL2

let modal2 = document.getElementById("modal2");
let modalImage = document.getElementById("img-content");
let span2 = document.getElementById("close2");


//hover events
cats.addEventListener("mouseover", hoverCats)
cats.addEventListener("mouseout", leaveCats) 

asterion.addEventListener("mouseover", hoverAsterion) 
asterion.addEventListener("mouseout", leaveAsterion) 

deer.addEventListener("mouseover", hoverDeer)
deer.addEventListener("mouseout", leaveDeer)

//modal for gallery
span.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

function openImage(element) {
  modal.style.display = "flex";
  modalImg.src = element.src;
}

//popup
function popUp() {
  popup.classList.toggle("show");
}

me.onclick = function(){
  popup.classList.toggle("show");
}


//Hover functions
function hoverCats() {
  if (popup.style.display == "visible") { //if "popup" is visible, change text to "info" when hovered over image 
  text.innerHTML = 'Cats in the Rain, featured in the finalists’ gallery for the School of Visual Arts’ 2024 HOPE competition.'
  }
}

function leaveCats() {
  if (popup.style.display == "visible") {  
  text.innerHTML = 'My name is Malia Eugenio and I am an artist currently based in New York City. I specialize in whimsical character illustration and visual storytelling, and am endlessly inspired by everything from the colorful to the mundane. I am also presently a student at the School of Visual Arts (SVA) under the Illustration BFA program.'
  }
}

function hoverAsterion() {
  if (popup.style.display == "visible") { //if "popup" is visible, change text to "info" when hovered over image 
  text.innerHTML = 'A book cover illustration for <i> The House of Asterion </i> by Jorge Luis Burges.'
  }
}

function leaveAsterion() {
  if (popup.style.display == "visible") {  
  text.innerHTML = 'My name is Malia Eugenio and I am an artist currently based in New York City. I specialize in whimsical character illustration and visual storytelling, and am endlessly inspired by everything from the colorful to the mundane. I am also presently a student at the School of Visual Arts (SVA) under the Illustration BFA program.'
  }
}

function hoverDeer() {
  if (popup.style.display == "visible") { //if "popup" is visible, change text to "info" when hovered over image 
  text.innerHTML = '<q>Everything eats and is eaten; <br> time is fed.</q> <br><br> Based on a quote from the song <q>Ingydar</q>, written by Adrianne Lenker.'
  }
}

function leaveDeer() {
  if (popup.style.display == "visible") {  
  text.innerHTML = 'My name is Malia Eugenio and I am an artist currently based in New York City. I specialize in whimsical character illustration and visual storytelling, and am endlessly inspired by everything from the colorful to the mundane. I am also presently a student at the School of Visual Arts (SVA) under the Illustration BFA program.'
  }
}



function hideAbout(span2) {
  modal2.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal2) {
    modal2.style.display = "none";
  }
}

function aboutClick() {
  modal2.style.display = "flex";
}

function keyPressed() {
  if (key === 'q') {
    let fs = fullscreen();
    fullscreen(!fs);
  }
}
