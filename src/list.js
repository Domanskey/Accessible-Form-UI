const items = document.querySelectorAll('.item');

const map = {
    name : 0,
    email : 1,
    password : 2,
    passwordConfirmation : 3,
    button : 4
}


export function completeTask(input) {
  const item = items[map[input.id]];
  item.classList.add('done');
}