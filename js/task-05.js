const nameInput = document.querySelector('#name-input');
const nameOutput = document.querySelector('#name-output');

function onInputChange(value) {
    nameOutput.textContent = value.currentTarget.value || 'незнакомец';
}
nameInput.addEventListener('input', onInputChange);