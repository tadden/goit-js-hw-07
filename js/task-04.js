const div = document.querySelector('#counter');
const counterValue = document.querySelector('#value');

const btnDecr = div.firstElementChild;
const btnIncr = div.lastElementChild;


let counter = 0;

function increment() {
    counterValue.textContent = counter += 1;
}
function decrement() {
    counterValue.textContent = counter -= 1;
}

btnIncr.addEventListener('click', increment);
btnDecr.addEventListener('click', decrement);
