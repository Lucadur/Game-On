// FUNCTIONS

function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

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
