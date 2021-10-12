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
let total = document.getElementById('total');

form.addEventListener('submit', (event) => {
    event.preventDefault();
    nameValidation(nameInput);
    carYearValidation(yearInput);
    carMakeValidation(makeInput);
    carModelValidation(modelInput);
    startValidation(startInput);
    daysValidation(daysInput);
    ccValidation(ccInput);
    cvvValidation(cvvInput);
    expirationValidation(expirationInput);
    let validNum = document.querySelectorAll(".valid")
    console.log(validNum)
    if (validNum.length === 9) {
        let totalCost = document.createTextNode("$" + String(Number(days.input)*5));
        total.appendChild(totalCost);
    }
})


function createErrorElement(input) {
    let error = document.createElement('p');
    error.id = input.id + "-error";
    if (document.getElementById(error.id)) {
        document.getElementById(error.id).remove();
    }
    return error;
}



function nameValidation(input) {
    let errorEl = createErrorElement(input);
    if (input.value) {
        input.classList.remove("invalid");
        input.classList.add("valid");
    } else {
        errorEl.innerText = "Name is required for submission"
        document.getElementById("name-field").appendChild(errorEl)
        input.classList.remove("valid");
    }
}


function carYearValidation(input) {
    errorEl = createErrorElement(input);
    if (input.value === "") {
        errorEl.innerText = "Car year is required for submission"
        document.getElementById("car-field").appendChild(errorEl)
        input.classList.remove("valid");
    } else if (isNaN(input.value)) {
        console.log("failure")
        errorEl.innerText = "Car year must be a number";
        document.getElementById("car-field").appendChild(errorEl)
        input.classList.add("invalid")
        input.classList.remove("valid")
    } else if (Number(input.value) < 1901) {
        errorEl.innerText = "Car year is not valid";
        document.getElementById("car-field").appendChild(errorEl)
        input.classList.add("invalid")
        input.classList.remove("valid")
    } else {
        input.classList.remove("invalid")
        input.classList.add("valid")
    }
}


function carMakeValidation(input) {
    errorEl = createErrorElement(input);
    if (input.value === "") {
        errorEl.innerText = "Car make is required for submission";
        document.getElementById("car-field").appendChild(errorEl);
        input.classList.remove("valid");
    } else {
        input.classList.add("valid");
    }
}


function carModelValidation(input) {
    errorEl = createErrorElement(input);
    if (input.value === "") {
        errorEl.innerText = "Car model is required for submission";
        document.getElementById("car-field").appendChild(errorEl);
        input.classList.remove("valid");
    } else {
        input.classList.add("valid");
    }
}


function startValidation(input) {
    errorEl = createErrorElement(input);
    if (input.value === "") {
        errorEl.innerText = "Start Date is required for submission";
        document.getElementById("start-date-field").appendChild(errorEl);
        input.classList.remove("valid");
    } else {
        input.classList.add("valid");
    }
}


function daysValidation(input) {
    errorEl = createErrorElement(input);
    if (input.value === "") {
        errorEl.innerText = "Number of days of parking is required for submission";
        document.getElementById("days-field").appendChild(errorEl);
        input.classList.remove("valid");
    } else if (isNaN(input.value)) {
        errorEl.innerText = "Number of days of parking should be a number";
        document.getElementById("days-field").appendChild(errorEl);
        input.classList.remove("valid");
        input.classList.add("invalid")
    } else if (Number(input.value)<1 || Number(input.value)>30) {
        errorEl.innerText = "Please select a number from 1 to 30";
        document.getElementById("days-field").appendChild(errorEl);
        input.classList.remove("valid");
        input.classList.add("invalid");
    } else {
        input.classList.remove("valid");
        input.classList.add("invalid");
    }
}


function ccValidation(input) {
    errorEl = createErrorElement(input);
    if (input.value === "") {
        errorEl.innerText = "Credit card number is required for submission"
        document.getElementById("credit-card-field").appendChild(errorEl)
        input.classList.remove("valid");
    } else {
        input.classList.add("valid");
    }
}


function cvvValidation(input) {
    errorEl = createErrorElement(input);
    if (input.value === "") {
        errorEl.innerText = "CVV is required for submission";
        document.getElementById("cvv-field").appendChild(errorEl);
        input.classList.remove("valid");
    } else if (isNaN(input.value)) {
        errorEl.innerText = "CVV should be a number";
        document.getElementById("cvv-field").appendChild(errorEl);
        input.classList.remove("valid");
        input.classList.add("invalid");
    } else if (input.value.length !== 3) {
        errorEl.innerText = "CVV should be three digits";
        document.getElementById("cvv-field").appendChild(errorEl);
        input.classList.remove("valid");
        input.classList.add("invalid");
    } else {
        input.classList.remove("valid");
        input.classList.add("invalid");
    }
}


function expirationValidation(input) {
    errorEl = createErrorElement(input);
    if (input.value === "") {
        errorEl.innerText = "Credit card expiration is required for submission"
        document.getElementById("expiration-field").appendChild(errorEl)
        input.classList.remove("valid");
    } else {
        input.classList.add("valid")
    }
}