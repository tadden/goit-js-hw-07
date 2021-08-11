const validInput = document.querySelector('#validation-input');

const dataLength = Number(validInput.dataset.length);


function fontSizeValidation(event) {
    if (event.currentTarget.value.length !== dataLength) {
        event.currentTarget.classList.add("invalid")
    }
        else {
        event.currentTarget.classList.remove('invalid')
        event.currentTarget.classList.add('valid');           
        }
    }
validInput.addEventListener('blur', fontSizeValidation);