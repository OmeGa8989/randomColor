let btn1 = document.querySelector("button")
btn1.addEventListener('click', function () {
    const r = Math.floor(Math.random() * 255)
    const g = Math.floor(Math.random() * 255)
    const b = Math.floor(Math.random() * 255)
    const newColor = `rgb(${r},${g},${b})`
    document.body.style.backgroundColor = newColor;
    let h1 = document.querySelector("h1")
    h1.innerText = newColor;

})

// rgb(100,200,300)