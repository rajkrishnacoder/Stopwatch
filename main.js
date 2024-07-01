const display = document.querySelector("#display");
const start = document.getElementById("start");
const stopt = document.getElementById("stop");

let interval = null;
let minutes = 0;
let secondes = 0;
let mSec = 0;

start.addEventListener("click", () => {
    if (interval === null) interval = setInterval(startBtn, 10)
});

stopt.addEventListener('click', () => {
    clearInterval(interval);
    interval = null
})
//this function for start-button.
function startBtn() {
    mSec++
    if(mSec === 100) { 
        secondes++
        mSec = 0;
        if(secondes === 60) {
            minutes++
            secondes = 0;
        }
    }
    minutes = String(minutes).padStart(2, '0');
    secondes = String(secondes).padStart(2, '0');
    mSec = String(mSec).padStart(2, '0')
    display.innerHTML = `${minutes}:${secondes}:${mSec}`;
}    
function clearBtn() {
    clearInterval(interval);
    minutes = 0;
    secondes = 0;
    mSec = 0;
    display.innerHTML = "00:00:00";
}