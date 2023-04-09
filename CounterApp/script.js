// Using event delegation, insead of adding event listeners to each button it will be applies to the parent of these buttons only once and then target each of these buttons
let count = document.querySelector('.count');

const buttons = document.querySelector('.buttons');

buttons.addEventListener("click", (e)=> {
    if(e.target.classList.contains("subtract")) {
        count.innerHTML--;
        setColor();
    }
    if(e.target.classList.contains("reset")) {
        count.innerHTML = 0;
        setColor();
    }
    if(e.target.classList.contains("add")) {
        count.innerHTML++;
        setColor();
    }
});

function setColor() {
    if(count.innerHTML > 0) {
        count.style.color = "green"; 
    }
    else if(count.innerHTML < 0) {
        count.style.color = "orangered"; 
    }
    else {
        count.style.color = ""; 
    }
}

