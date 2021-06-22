function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}


/*
  --- DOM ELEMENTS ---
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
// Form DOM Elements
const firstName = document.getElementById("first");
const lastName = document.getElementById("last");
const formEmail = document.getElementById("email");


/*
  --- MODAL LAUNCH & CLOSE EVENTS ---
*/
// Launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// Launch modal form
function launchModal() {
  modalbg.style.display = "block";
};

// Close buttons
[btnGenial, btnClose].forEach(function(event) {
  event.addEventListener("click", function() {
    modalbg.style.display = "none";
  });
});

/*
  --- FORM REQUIREMENTS ---
*/
// First name

firstName.setAttribute("placeholder", "Master");
// Adding invalid input alert to inputs
firstNameInvalid = document.createElement("p");
firstName.after(firstNameInvalid);
firstNameInvalid.innerText = "Veuilliez saisir un minimum de deux caractères";
firstNameInvalid.style.display = "none";

// Last name
lastName.setAttribute("placeholder", "Chief");
// Adding invalid input alert to inputs
lastNameInvalid = document.createElement("p");
lastName.after(lastNameInvalid);
lastNameInvalid.innerText = "Veuilliez saisir un minimum de deux caractères";
lastNameInvalid.style.display = "none";

// Email
formEmail.setAttribute("placeholder", "halo@gmail.com");
// Adding invalid input alert to inputs
emailInvalid = document.createElement("p");
formEmail.after(emailInvalid);
emailInvalid.innerText = "Veuilliez saisir une adresse email valide";
emailInvalid.style.display = "none";

// Styling valid & invalid inputs
function invalidInput(value) {
  value.style.border = "2px solid #e54858";
  value.nextSibling.style.display = "block";
  value.nextSibling.style.textAlign = "right";
  value.nextSibling.style.color = "#e54858";
  value.nextSibling.style.fontSize = "0.8rem";
  value.nextSibling.style.marginBottom = "-2.5rem";
}

function validInput(value) {
  value.nextSibling.style.display = "none";
  value.style.border = "none";
}


// First name validation event
firstName.addEventListener("input", function() {
  validFirstName(this);
});

// First name validation function
function validFirstName(name) {
  /* Reg exp names validation (both first and last name have similar requirements)*/
  let regExName = new RegExp(
    '^[a-zA-Z]{2,}$', 
    'g' // Test all occurences
    );
  let testName = regExName.test(name.value);

  // Personalised input event messages
  if (testName) {
    validInput(firstName); 
  } else {
    invalidInput(firstName);
  }
}

// Last name validation event
lastName.addEventListener("input", function() {
  validLastName(this);
});

// Last name validation function
function validLastName(name) {
  /* Reg exp names validation (both first and last name have similar requirements)*/
  let regExName = new RegExp(
    '^[a-zA-Z]{2,}$', 
    'g' 
    );
  let testName = regExName.test(name.value);

  // Personalised input event messages
  if (testName) {
    validInput(lastName); 
  } else {
    invalidInput(lastName);
  }
}

// Email validation event
formEmail.addEventListener("input", function() {
  validEmail(this);
});

// Last name validation function
function validEmail(name) {
  /* Reg exp names validation (both first and last name have similar requirements)*/
  let regExName = new RegExp(
    '^[a-zA-Z0-9.-_]+[@]{1}[a-zA-Z0-9.-_]+[.]{1}[a-z]{2,10}$', 
    'g'
    );
  let testEmail = regExName.test(name.value);

  // Personalised input event messages
  if (testEmail) {
    validInput(formEmail); 
  } else {
    invalidInput(formEmail);
  }
}









//Disable submission button if form is invalid
if (modalForm.checkValidity() === false) {
  btnSubmit.style.backgroundColor = "gray";

  //Give focus to relevant inputs
  //modalForm.addEventListener("click", function ()
  //document.querySelectorAll(':invalid');
  
}

/*
  --- Validation event on successful submit ---
*/
btnSubmit.addEventListener("click", function(event) {
  // Prevent form submission with page reload
  event.preventDefault();
  if (modalForm.checkValidity() === true) {
    // Validation 'load' effect
    setTimeout(validate, 600);
  } 
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


// ADD FAVICON