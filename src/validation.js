import { updateCircle } from "./percentage";

const inputs = document.querySelectorAll('.fieldset__input');
const password = document.getElementById('password');
const passwordConfirmation = document.getElementById('passwordConfirmation');
let curNumber= 0;
const set = new Set(), inputsLength = inputs.length;

inputs.forEach(input => {
    // input exit
    input.addEventListener('blur', () => {
        validatePassword(input);
        validateField(input);
    });

    // check value every letter if valid or invalid
    input.addEventListener('input', () => {
        if (input.classList.contains('invalid') || input.classList.contains("valid")) {
            validatePassword(input);
            validateField(input);
        }
    });
});

function validateField(field) {
    const error = field.closest('.fieldset').querySelector('.fieldset__error'); // input -> parent -> child

    if (!field.checkValidity()) {
        set.delete(field)
        error.style.visibility = 'visible';
        field.classList.add('invalid');
        field.classList.remove('valid');

        // komunikat
        if (field.validity.valueMissing) {
            error.textContent = "This field cannot be empty.";
        } else if (field.validity.typeMismatch) {
            error.textContent = "Enter the correct format.";
        } else if (field.validity.tooShort) {
            error.textContent = `Minimum ${field.minLength} characters required.`;
        } else if (field.validity.patternMismatch) {
            if (field.id == "name") error.textContent = "Enter valid full name."
            else if (field.id == "password" || field.id == "passwordConfirmation")
                error.textContent = "Must contain at least one uppercase letter,"
        } else if (field.validity.customError) {
            error.textContent = "Passwords must be identical.";
        }
    } else {
        set.add(field);
        error.style.visibility = 'hidden';
        field.classList.remove('invalid');
        field.classList.add('valid');
    }

    curNumber = (set.size / inputsLength).toFixed(2) * 100;
    updateCircle(curNumber);
}

function validatePassword(field) {
    if (field.id == "password" && !(passwordConfirmation.value == '')) {

        if (passwordConfirmation.value != password.value) {
            passwordConfirmation.setCustomValidity("Passwords must be identical.");
            validateField(passwordConfirmation);

        } else if (passwordConfirmation.value == password.value && passwordConfirmation.validity.customError) {
            passwordConfirmation.setCustomValidity("");
            validateField(passwordConfirmation);

        }
    }

    if (field.id == 'passwordConfirmation' && passwordConfirmation.value != password.value) {
        field.setCustomValidity("Passwords must be identical."); // blokuje mozliwosc wysylki formularza
    } else if (field.id == 'passwordConfirmation' && passwordConfirmation.value == password.value) {
        field.setCustomValidity(""); // odblokowuje 
    }
}