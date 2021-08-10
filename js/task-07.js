const sizeControl = document.querySelector('#font-size-control');
const text = document.querySelector('#text');

function onInputRange(event) {
    const textSize = event.target.value;
    text.style.fontSize = `${textSize}%`;
}
sizeControl.addEventListener('input', onInputRange);