// console.log('Add validation!');

// initialize variables for input elements
let form = document.getElementById('parking-form');
let nameInput = document.getElementById('name');
let yearInput = document.getElementById('car-year');
let makeInput = document.getElementById('car-make');
let modelInput = document.getElementById('car-model');
let startInput = document.getElementById('start-date');
let daysInput = document.getElementById('days');
let ccInput = document.getElementById('credit-card');
let cvvInput = document.getElementById('cvv');
let expirationInput = document.getElementById('expiration');

form.addEventListener('submit', (event) => {
    event.preventDefault;
    nameValidation(nameInput);
    carYearValidation(yearInput);
    carMakeValidation(makeInput);
    carModelValidation(modelInput);
    startValidation(startInput);
    daysValidation(daysInput);
    ccValidation(ccInput);
    cvvValidation(cvvInput);
    expirationValidation(expirationInput);
})


function createErrorElement(input) {
    let error = document.createElement('p');
    error.id = input.id + "-error";
    return error;
}



function nameValidation(input) {
    errorEl = createErrorElement(input);
    if (input.value === "") {
        errorEl.innerText = "Name is required for submission"
        document.getElementById("name-field").appendChild(errorEl)
        nameInput.classList.remove("valid");
    }
}


function carYearValidation(input) {
    errorEl = createErrorElement(input);
    if (input.value === "") {
        errorEl.innerText = "Car year is required for submission"
        document.getElementById("car-field").appendChild(errorEl)
        nameInput.classList.remove("valid");
    }
}


function carMakeValidation(input) {
    errorEl = createErrorElement(input);
    if (input.value === "") {
        errorEl.innerText = "Car make is required for submission"
        document.getElementById("car-field").appendChild(errorEl)
        nameInput.classList.remove("valid");
    }
}


function carModelValidation(input) {
    errorEl = createErrorElement(input);
    if (input.value === "") {
        errorEl.innerText = "Car model is required for submission"
        document.getElementById("car-field").appendChild(errorEl)
        nameInput.classList.remove("valid");
    }
}


function startValidation(input) {
    errorEl = createErrorElement(input);
    if (input.value === "") {
        errorEl.innerText = "Start Date is required for submission"
        document.getElementById("start-date-field").appendChild(errorEl)
        nameInput.classList.remove("valid");
    }
}


function daysValidation(input) {
    errorEl = createErrorElement(input);
    if (input.value === "") {
        errorEl.innerText = "Number of days of parking is required for submission"
        document.getElementById("days-field").appendChild(errorEl)
        nameInput.classList.remove("valid");
    }
}


function ccValidation(input) {
    errorEl = createErrorElement(input);
    if (input.value === "") {
        errorEl.innerText = "Credit card number is required for submission"
        document.getElementById("credit-card-field").appendChild(errorEl)
        nameInput.classList.remove("valid");
    }
}


function cvvValidation(input) {
    errorEl = createErrorElement(input);
    if (input.value === "") {
        errorEl.innerText = "CVV is required for submission"
        document.getElementById("cvv-field").appendChild(errorEl)
        nameInput.classList.remove("valid");
    }
}


function expirationValidation(input) {
    errorEl = createErrorElement(input);
    if (input.value === "") {
        errorEl.innerText = "Credit card expiration is required for submission"
        document.getElementById("expiration-field").appendChild(errorEl)
        nameInput.classList.remove("valid");
    }
}