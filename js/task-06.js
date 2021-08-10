const validInput = document.querySelector('#validation-input');

const dataLength = Number(validInput.dataset.length);


function fontSizeValidation(event) {
    if (event.currentTarget.value.length === dataLength) {
        event.currentTarget.classList.add("valid")
    }
        else {
            event.currentTarget.classList.add("invalid");
        }
    }
validInput.addEventListener('blur', fontSizeValidation);