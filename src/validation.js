const inputs = document.querySelectorAll('.fieldset__input');
const password = document.getElementById('password');
const passwordConfirmation = document.getElementById('passwordConfirmation');

inputs.forEach(input => {
    // wyjscie z pola
    input.addEventListener('blur', () => {
        validateField(input);
    });

    // czyszczenie podcza pisania jesli bylo invalid
    input.addEventListener('input', () => {
        if (input.classList.contains('invalid')) {
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
            error.textContent = "Enter valid full name."
        }
        else if (field.validity.customError) {
            error.textContent = "Password must be identical.";
        }
    } else {
        error.style.visibility = 'hidden';
        field.classList.remove('invalid');
        field.classList.add('valid');
    }
}


// validatePassword(field);
// function validatePassword(field) {
//     // if (field.id == "password" && !(passwordConfirmation.value == '') && passwordConfirmation.value != password.value) {
//     //     passwordConfirmation.setCustomValidity("Hasła muszą być identyczne");
        
//     // }
//     // else 
//         if (field.id == 'passwordConfirmation' && passwordConfirmation.value != password.value) {
//         field.setCustomValidity("Hasła muszą być identyczne"); // blokuje mozliwosc wysylki formularza
//     } else {
//         field.setCustomValidity(""); // odblokowuje 
//     }
// }