function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// CONFIRMATION PAGE
let newPage = document.createElement("div");
newPage.style.display = "none";
newPage.style.justifyContent = "center";
newPage.style.alignItems = "center";
newPage.style.backgroundColor = "#232323";
newPage.style.width = "100%";
newPage.style.height = "90%";
newPage.style.maxWidth = "500px";
newPage.style.position = "fixed";
newPage.style.zIndex = "3";
newPage.style.borderRadius = "10px";

let newBg = document.createElement("div");
newBg.style.display = "none";
newBg.style.position = "fixed";
newBg.style.justifyContent = "center";
newBg.style.alignItems = "center";
newBg.style.zIndex = "2";
newBg.style.height = "100%";
newBg.style.width = "100%";
newBg.style.backgroundColor = "rgba(26, 39, 156, 0.4)";
newBg.style.top = "0";
newBg.style.left = "0";

let title = document.createElement("h1");
title.innerText = "Merci pour votre inscription";
title.style.color = "white";
title.style.display = "flex";
title.style.textAlign = "center";

let closeBtn = document.createElement("span");
closeBtn.innerText = "x";
closeBtn.style.color = "white";
closeBtn.style.fontSize = "30px";
closeBtn.style.cursor = "pointer";
closeBtn.style.position = "absolute";
closeBtn.style.right = "20px";
closeBtn.style.top = "20px";

let secondCloseBtn = document.createElement("button");
secondCloseBtn.innerText = "Fermer";
secondCloseBtn.style.backgroundColor = "#fe142f";
secondCloseBtn.style.color = "white";
secondCloseBtn.style.width = "33%";
secondCloseBtn.style.height = "6%";
secondCloseBtn.style.position = "absolute";
secondCloseBtn.style.bottom = "15px";
secondCloseBtn.style.borderRadius = "10px";
secondCloseBtn.style.fontSize = "20px";
secondCloseBtn.style.border = "none";
secondCloseBtn.style.cursor = "pointer";

newBg.appendChild(newPage);
newPage.appendChild(title);
newPage.appendChild(closeBtn);
newPage.appendChild(secondCloseBtn);
document.body.appendChild(newBg);

// ERROR MESSAGES
const messageEmailError = "L'adresse électronique n'est pas valide";
const messageFirstNameError =
  "Veuillez entrer 2 caractères ou plus pour le prénom";
const messageLastNameError = "Veuillez entrer 2 caractères ou plus pour le nom";
const messageBirthDateError = "Veuillez entrer votre date de naissance";
const messageContestError = "Veuillez entrer un nombre";
const messageLocationError = "Veuillez sélectionner une ville";
const messageCheckTermsError = "Veuillez accepter les termes et conditions";

// REGEX
const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
const nameRegex = /^[a-z ,.'-]+$/i;
const numberRegex = /^[0-9]{1,2}$/;

// DOM Elements

// FORM
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const closeSpan = document.querySelectorAll(".close");

const form = document.getElementById("form");
const submitBtn = document.getElementById("btn-submit");

// NAME
let firstName = document.getElementById("first");
let lastName = document.getElementById("last");
const firstNameError = document.getElementById("firstNameError");
const lastNameError = document.getElementById("lastNameError");

// EMAIL
let emailInput = document.getElementById("email");
const emailError = document.getElementById("emailError");

// BIRTHDATE
let birthdate = document.getElementById("birthdate");
const birthdateError = document.getElementById("birthdateError");

// CONTESTS
let contestInput = document.getElementById("contest");
const contestError = document.getElementById("contestError");

// LOCATIONS
const allLocations = document.getElementById("allLocations");
const locations = document.querySelectorAll("#allLocations .checkbox-input");
const locationError = document.getElementById("locationError");

// TERMS OF USE
const checkTerms = document.getElementById("checkbox1");
const checkTermsError = document.getElementById("checkboxError");

// FUNCTIONS

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// close modal form
function closeModal() {
  modalbg.style.display = "none"; // change le display de la modal bg en none
}

// first name validation
function validFirstName() {
  let testFirstName = nameRegex.test(firstName.value);

  if (testFirstName === false || firstName.value.length < 2) {
    firstNameError.innerText = messageFirstNameError;
    firstNameError.style.color = "red";
    firstNameError.style.fontSize = "12px";
    firstName.style.border = "3px solid red";

    return false;
  } else {
    firstNameError.innerText = "";
    firstName.style.border = "3px solid green";

    return true;
  }
}
// last name validation
function validLastName() {
  let testLastName = nameRegex.test(lastName.value);

  if (testLastName === false || lastName.value.length < 2) {
    lastNameError.innerText = messageLastNameError;
    lastNameError.style.color = "red";
    lastNameError.style.fontSize = "12px";
    lastName.style.border = "3px solid red";

    return false;
  } else {
    lastNameError.innerText = "";
    lastName.style.border = "3px solid green";

    return true;
  }
}

// email validation
function validEmail() {
  let testEmail = emailRegex.test(emailInput.value);

  if (testEmail) {
    emailError.innerText = "";
    emailInput.style.border = "3px solid green";
    return true;
  } else {
    emailError.innerText = messageEmailError;
    emailError.style.color = "red";
    emailError.style.fontSize = "12px";
    emailInput.style.border = "3px solid red";
    return false;
  }
}

// birthdate validation

function validBirthdate() {
  if (birthdate.value.length !== 10) {
    birthdateError.innerText = messageBirthDateError;
    birthdateError.style.color = "red";
    birthdateError.style.fontSize = "12px";
    birthdate.style.border = "3px solid red";
    return false;
  } else {
    birthdateError.innerText = "";
    birthdate.style.border = "3px solid green";

    return true;
  }
}

// Contest validation

function validContest() {
  let testContest = numberRegex.test(contestInput.value);

  if (testContest === true || contestInput.value === true) {
    contestError.innerText = "";
    contestInput.style.border = "3px solid green";
    return true;
  } else {
    contestError.innerText = messageContestError;
    contestError.style.color = "red";
    contestError.style.fontSize = "12px";
    contest.style.border = "3px solid red";
    return false;
  }
}

// Location Validation

function validLocations() {
  for (let i = 0; i < locations.length; i++) {
    if (locations[i].checked === true) {
      locationError.innerText = "";
      return true;
    }
  }
  locationError.innerText = messageLocationError;
  locationError.style.color = "red";
  locationError.style.fontSize = "12px";
  return false;
}

// CheckTerms Validation

function validCheckTerms() {
  if (checkTerms.checked === false) {
    checkTermsError.innerText = messageCheckTermsError;
    checkTermsError.style.color = "red";
    checkTermsError.style.fontSize = "12px";
    return false;
  } else {
    checkTermsError.innerText = "";
    return true;
  }
}

// Validation of all fields

function validAllFields() {
  validFirstName();
  validLastName();
  validEmail();
  validBirthdate();
  validContest();
  validLocations();
  validCheckTerms();
}

// validate form

function validateForm() {
  if (
    validFirstName() === true &&
    validLastName() === true &&
    validEmail() === true &&
    validBirthdate() === true &&
    validContest() === true &&
    validLocations() === true &&
    validCheckTerms() === true
  ) {
    return true;
  }
  return false;
}

// EVENTS

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// close modal event
closeSpan[0].addEventListener("click", closeModal);

// valid firstname input
firstName.addEventListener("focusout", validFirstName);

// valid lastname input
lastName.addEventListener("focusout", validLastName);

// valid email input
emailInput.addEventListener("focusout", validEmail);

// valid birthdate
birthdate.addEventListener("focusout", validBirthdate);

// valid contest number
contestInput.addEventListener("focusout", validContest);

// valid location
allLocations.addEventListener("change", validLocations);

// valid checkTerms
checkTerms.addEventListener("change", validCheckTerms);

form.addEventListener("submit", function (e) {
  e.preventDefault();
  if (validateForm() == true) {
    newBg.style.display = "flex";
    newPage.style.display = "flex";
    modalbg.style.display = "none";
    document.querySelector("form").reset();
  } else {
    validAllFields();
  }
});

closeBtn.addEventListener("click", function () {
  newBg.style.display = "none";
  newPage.style.display = "none";
  contestInput.style.border = "";
  birthdate.style.border = "";
  emailInput.style.border = "";
  firstName.style.border = "";
  lastName.style.border = "";
});

secondCloseBtn.addEventListener("click", function () {
  newPage.style.display = "none";
  newBg.style.display = "none";
  contestInput.style.border = "";
  birthdate.style.border = "";
  emailInput.style.border = "";
  firstName.style.border = "";
  lastName.style.border = "";
});
