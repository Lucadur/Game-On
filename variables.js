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
