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
const content = document.querySelector(".content");
const btnSubmit = document.querySelector(".modal-body .btn-submit");
const btnGenial = content.appendChild(document.createElement("button"));
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

// Validation message event on successful submit
btnSubmit.addEventListener("click", function(event) {
  event.preventDefault();

  // Form submit animation
  content.animate(
    [ { opacity: '1' },

      { opacity: '0', transform: 'translateY(-999px)'}
    ], 700 );

  // Validation message 'load' effect
  setTimeout(validate, 700);
});


// Validation message
function validate() {
  // Positioning validation message
  modalbg.style.display = ("flex");
  modalbg.style.alignItems = ("center");

  // Similar animation as form
  content.animate(
    [ { opacity: '0', transform: 'translateY(50%)' },

      { opacity: '1' }
    ], 700 );
  
  // Styling
  modalBody.innerText = "Merci ! Votre réservation a bien été enregistrée.";
  modalBody.style.padding = "2rem 4rem 1rem";
  modalBody.style.fontSize = "1.2rem";
  btnGenial.style.display = "block";
  btnGenial.style.margin = "0.5rem auto 2.5rem";
  btnGenial.innerText = "Génial !";
};
