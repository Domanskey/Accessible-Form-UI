import './style.scss'

const password = document.getElementById('password');
const passwordConfirmation = document.getElementById('passwordConfirmation');

const toggleButton = document.getElementById('toggle-password');
const toggleButtonConfirmation = document.getElementById('toggle-password-confirmation');

function showPassword(input, button) {
  const isVisible = input.type === 'text';

  if (isVisible) {
    // Ukrywamy hasło
    input.type = 'password'; 
    button.classList.remove('visible');
    button.setAttribute('aria-pressed', 'false');
  } else {
    // Pokazujemy hasło
    input.type = 'text';
    button.classList.add('visible');
    button.setAttribute('aria-pressed', 'true');
  }
}

toggleButton.addEventListener('click', () => {showPassword(password, toggleButton)});
toggleButtonConfirmation.addEventListener('click', () => {showPassword(passwordConfirmation, toggleButtonConfirmation)});






// const warningElement = document.getElementById('password-warning');

// function showWarning(message) {
//   warningElement.textContent = message;
//   warningElement.classList.add('is-visible');
// }

// function hideWarning() {
//   warningElement.classList.remove('is-visible');
//   // Opcjonalnie: wyczyść tekst po animacji, aby zwolnić miejsce
// }