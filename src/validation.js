const inputs = document.querySelectorAll('.fieldset__input');
const password = document.getElementById('password');
const passwordConfirmation = document.getElementById('passwordConfirmation');

inputs.forEach(input => {
    // wyjscie z pola
    input.addEventListener('blur', () => {
        validatePassword(input);
        validateField(input);
    });

    // czyszczenie podczas pisania jesli bylo invalid lub valid
    input.addEventListener('input', () => {
        if (input.classList.contains('invalid') || input.classList.contains("valid")) {
            validatePassword(input);
            validateField(input);
        }
    });
});

function validateField(field) {
    const error = field.closest('.fieldset').querySelector('.fieldset__error'); // input -> rodzic -> dziecko

    if (!field.checkValidity()) {
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
        error.style.visibility = 'hidden';
        field.classList.remove('invalid');
        field.classList.add('valid');
    }
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