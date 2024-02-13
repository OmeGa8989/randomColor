// let bt1 = document.querySelector("button").addEventListener('click', function (evt) {
//     console.log(evt)
// }

// let input3 = document.querySelector("#catName").value
// let form = document.querySelector("#shelter")
// form.addEventListener('submit', function (e) {
//     e.preventDefault()
//     console.log(input)  
//     let oldli = document.querySelector("#cats")
//     let newLi = document.createElement("li")
//     newLi.innerText = `${input}`
//     oldli.append(newLi)

//     // newLi.innerText = catName;
//     // console.log(newLi)
//     // li.append(newLi)
// })

// const input = document.querySelector('input');
// const h1 = document.querySelector('h1');

// // input.addEventListener('change', function (e) {
// //     console.log("CASKDJASKJHD")
// // })

input.addEventListener('input', function (e) {
    h1.innerText = input.value;
})
let h1 = document.querySelector("h1")
let input = document.querySelector("input")

document.addEventListener("input", function (e) {
    h1.innerText = `Welcome, ${input.value}`
    if (this.value === '') {
        return h1.innerText = "Enter Your Username"
        // e.stopPropagation()
    }
})

// event bubbling 
h1.classList.toggle('click')
e.stopPropagation()






