function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}


/*
  --- DOM Elements ---
*/
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

/*
  --- Modal launch & close ---
*/
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

/*
  --- Form requierements ---
*/

//let isFormValid = false;
/*
if (array for each ?)all inputs valid,
then isFormValid = true;

then
// Validation 'load' effect
  //setTimeout(validate, 600);
*/

let isFormValid = true;
//let isFormValid = modalForm.checkValidity().value;

//Disable submission button if form is invalid
if (isFormValid === false) {
  btnSubmit.setAttribute("disabled", "");
  btnSubmit.style.backgroundColor = "gray";
}

/*
  --- Validation event on successful submit ---
*/
btnSubmit.addEventListener("click", function(event) {
  // Prevent form submission with page reload
  event.preventDefault();

  // Validation 'load' effect
  setTimeout(validate, 600);
});


// Validating form element
function validate() {

  // Sending the form asynchronously 
  /* 
  Put code to send form data somewhere here
  */

  // Form submit animation
  content.animate(
    [ { opacity: '1' },

      { opacity: '0', transform: 'translateY(-999px)'}
    ], 900 );

  // Positioning validation message
  modalbg.style.display = ("flex");
  modalbg.style.alignItems = ("center");
  
  // Validation message
  function validationMessage() {
    // Validation message animation
  content.animate(
    [ { opacity: '0', transform: 'translateY(50%)' },

      { opacity: '1' }
    ], 500 );

    modalBody.innerText = "Merci ! Votre réservation a bien été enregistrée.";
    modalBody.style.padding = "2rem 4rem 1rem";
    modalBody.style.fontSize = "1.2rem";
    btnGenial.style.display = "block";
    btnGenial.style.margin = "0.5rem auto 2.5rem";
    btnGenial.innerText = "Génial !";
  }
  setTimeout(validationMessage, 900); // Give form element time to leave
};

// WHEN FORM INVALID RED SENTENCES FLASH
