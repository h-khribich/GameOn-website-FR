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
const btnClose = document.querySelector(".close");
const modalForm = document.querySelector(".modal-body > form");
const modalBody = document.querySelector(".modal-body");
const btnSubmit = document.querySelector(".modal-body .btn-submit");
const btnGenial = modalBody.appendChild(document.createElement("button"));
      btnGenial.style.display = "none"; // Only visible in validation message
      btnGenial.className = "btn-submit";


// Launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// Launch modal form
function launchModal() {
  modalbg.style.display = "block";
};


// Close buttons
[btnGenial, btnClose].forEach(function(element) {
  element.addEventListener("click", function() {
    modalbg.style.display = "none";
  });
});


// Validation message on successful submit
btnSubmit.addEventListener("click", function(event) {
  event.preventDefault();
  validate();
});


function validate() {
  modalForm.innerText = "Merci ! Votre réservation a bien été enregistrée.";
  modalForm.style.padding = "2rem 0";
  btnGenial.style.display = "block";
  btnGenial.innerText = "Génial !";
};

/*
ADD VALIDATION MESSAGE TRANSITION, SAME AS FORM, 
PLUS MAYBE CHANGE MODALBODY INSTEAD OF FORM ?

ADD PREVENT BACKGROUND SCROLL
*/