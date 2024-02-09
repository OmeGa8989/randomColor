// let btn1 = document.querySelector("button")
// btn1.addEventListener('click', function randomColor() {
//     const r = Math.floor(Math.random() * 255)
//     const g = Math.floor(Math.random() * 255)
//     const b = Math.floor(Math.random() * 255)
//     const newColor = `rgb(${r},${g},${b})`
//     document.body.style.backgroundColor = newColor;
//     let h1 = document.querySelector("h1")
//     h1.innerText = newColor;


function randomColor() {
    const r = Math.floor(Math.random() * 255)
    const g = Math.floor(Math.random() * 255)
    const b = Math.floor(Math.random() * 255)
    return `rgb(${r},${g},${b})`
}

let btns = document.querySelectorAll("button")
for (let button of btns) {
    button.addEventListener('click', colorize)

}

const h1s = document.querySelectorAll("h1")
for (let h1 of h1s) {
    console.log(this)
    h1.addEventListener('click', colorize)

}

function colorize() {
    console.log(this)
    this.style.backgroundColor = randomColor();
    this.style.color = randomColor();
}




// rgb(100,200,300)