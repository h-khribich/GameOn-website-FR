function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const modalClosebtn = document.querySelector(".close");

// Launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// Launch modal form
function launchModal() {
  modalbg.style.display = "block";
};
/*
//Array.from(modalClosebtn).forEach((btn) => btn.addEventListener("click", closeModal));

console.log(modalClosebtn);

// Close modal form
modalCloseBtn.addEventListener("click", closeModal());

function closeModal() {
  modalbg.style.display = "none";
};

console.log(modalClosebtn);


/*
modalCloseBtn.forEach((btn) => btn.addEventListener("click", closeModal));

function closeModal() {
  modalbg.style.display = "none";
};
*/

