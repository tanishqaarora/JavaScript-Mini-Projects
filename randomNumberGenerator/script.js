const number = document.querySelector('.number');
const button = document.querySelector('.generate');

function generateNumber() {
    // generate number btw 1 and 10
    const random = Math.floor(Math.random() * 10 + 1);
    number.innerHTML = random;
}

button.addEventListener("click", generateNumber);