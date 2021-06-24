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
      btnSubmit.style.backgroundColor = "gray"; // Will look disabled as long as form is not valid
const btnGenial = content.appendChild(document.createElement("button"));
      btnGenial.style.display = "none"; // Only visible in validation message
      btnGenial.className = "btn-submit";
// General Form DOM Elements
const firstName = document.getElementById("first");
const lastName = document.getElementById("last");
const formEmail = document.getElementById("email");
const birthdate = document.getElementById("birthdate");
const tournoi = document.getElementById("quantity");
const textLabel = document.querySelector(".text-label");
const tournoiParent = tournoi.parentElement;
const checkboxTerms = document.getElementById("checkbox1");
const checkboxLabel = document.querySelector(".checkbox2-label")
const locations = document.getElementsByName("location"); // Use of plural to declare because "location" is already used by machine


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

// Birthdate
// Adding invalid input alert to inputs
birthdateInvalid = document.createElement("p");
birthdate.after(birthdateInvalid);
birthdateInvalid.innerText = "Veuilliez saisir une date de naissance valide";
birthdateInvalid.style.display = "none";

// Quantity
// Adding invalid input alert to inputs
quantityInvalid = document.createElement("p");
quantity.after(quantityInvalid);
quantityInvalid.innerText = "Veuilliez choisir un chiffre entre 0 et 99";
quantityInvalid.style.display = "none";

// Locations
// Adding invalid input alert to inputs
locationsInvalid = document.getElementById("location1").parentElement.appendChild(document.createElement("p"));
locationsInvalid.innerText = "Veuilliez choisir une ville";
locationsInvalid.style.display = "none";

// Terms
// Adding invalid input alert to inputs
termsInvalid = document.createElement("p");
checkboxLabel.after(termsInvalid);
termsInvalid.innerText = "Veuilliez accepter les conditions d'utilisation";
termsInvalid.style.display = "none";

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

//Fixing form styling errors
tournoiParent.style.marginTop = "11px";
textLabel.style.marginTop = "11px";

    // Validation events

// First name validation event
firstName.addEventListener("input", function() {
  validFirstName(this);
});

// First name validation function
function validFirstName(name) {
  /* Reg exp names validation (both first and last name have similar requirements)*/
  let regExName = new RegExp(
    /^[a-zA-Z\-àâçéèêëîïôûùüÿñæœ']{2,}$/,
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
    /^[a-zA-Z\-àâçéèêëîïôûùüÿñæœ']{2,}$/,
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

// Date of birth validation event
birthdate.addEventListener("input", function() {
  validBirthdate(this);
});

// Date of birth - max input is user's "today" date
var today = new Date();
var dd = today.getDate();
var mm = today.getMonth()+1; // January is 0 so we need to add 1 to make it 1
var yyyy = today.getFullYear();
if (dd < 10) {
  dd = '0' + dd
} 
if (mm < 10) {
  mm = '0' + mm
} 
today = yyyy+'-'+mm+'-'+dd;

// Prevent user from entering incorrect number values
birthdate.setAttribute("min", "1900-01-01");
birthdate.setAttribute("max", today);

function validBirthdate(date) {
  if (date.checkValidity()) {
    validInput(birthdate);
  } else {
    invalidInput(birthdate);
  }
}

// Quantity tournoi validation event
quantity.addEventListener("input", function() {
  validQuantity();
});

function validQuantity() {
  if (quantity.checkValidity()) {
    validInput(quantity);
    textLabel.style.marginTop = "11px";
  } else {
    invalidInput(quantity);
    quantity.nextSibling.style.marginBottom = "0";
    textLabel.style.marginTop = "0";
  }
}

// Locations validation function
function isLocationChecked() {
  let locationChecked = false;

  // Iterating through checkboxes to see if one of them is checked
  for(var i = 0; i < locations.length; i++) {
    if (locations[i].checked) {
      locationChecked = true;
    }
  }
  // Personalised invalid input message if no checkbox is checked
  if (locationChecked) {
    locationsInvalid.style.display = "none";
    locationsInvalid.parentElement.style.border = "none";
  } else {
    // Cannot use function invalid input as this element consists of several checkboxes
    locationsInvalid.parentElement.style.border = "2px solid #e54858";
    locationsInvalid.parentElement.style.borderRadius = "15px";
    locationsInvalid.parentElement.style.padding = "7px";
    locationsInvalid.style.display = "block";
    locationsInvalid.style.color = "#e54858";
    locationsInvalid.style.fontSize = "0.8rem";
  }
}

// Terms & conditions checkbox event
checkboxTerms.addEventListener("click", function() {
  if (checkboxTerms.checked) {
    validInput(checkboxLabel);
  }
});

// Terms & conditions checkbox function
function validTerms() {
  if (checkboxTerms.checked) {
    validInput(checkboxLabel);
  } else {
    invalidInput(checkboxLabel);
    // Terms & conditions personalised invalid input
    checkboxLabel.style.border = "none";
    checkboxLabel.nextSibling.style.textAlign = "left";
    checkboxLabel.nextSibling.style.padding = "10px 10px 20px";
  }
}

/*
  --- SUBMISSION ---
*/

//Make submission button look disabled if form is invalid
modalForm.addEventListener("input", function () {
  if (modalForm.checkValidity()) {
    btnSubmit.style.backgroundColor = "#fe142f";
  } else {
    btnSubmit.style.backgroundColor = "gray";
  }
  // Listening for click on "location" checkbox
  isLocationChecked();
});

/*
  --- Validation event on successful submit ---
*/
btnSubmit.addEventListener("click", function(event) {
  // Click animation
  btnSubmit.animate(
    [ { transform: 'scale(1)' },

      { transform: 'scale(1.05)' },

      { transform: 'scale(1)' }
    ], 300 );

  // Prevent form submission with page reload
  event.preventDefault();
  if (modalForm.checkValidity() === true) {
    // Validation 'load' effect
    setTimeout(validate, 600);
  } else {

    isLocationChecked();
    validTerms();
  }
});

// Validating form element
function validate() {

  // Sending the form asynchronously 
  /* 
  Put code here to send form data somewhere
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
  setTimeout(validationMessage, 900); // Give form element time to be sent
};


// ADD FAVICON

// !!! BE CAREFUL !!! FORM SUB ANIMATION SKETCHY