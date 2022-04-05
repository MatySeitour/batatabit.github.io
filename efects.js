// LOGO EFECTS
const logo = document.getElementById("logo-batata");
let sizeScreen = window.innerHeight / 1
let position = logo.getBoundingClientRect().top;

window.onload = function(){
        logo.classList.add("logo-effect");
}

// function appear(){
//     if(){
//         logo.classList.add("logo-effect")
//         console.log(1);
//     }
// }

// window.addEventListener("scroll", appear);
// TABLE EFECTS

const buton_right = document.getElementById("buton-right");
const buton_left = document.getElementById("buton-left");
const right = document.querySelector(".right-arrow-tables");
const left = document.querySelector(".left-arrow-tables");
const tableCoins = document.querySelector(".table-container")
const tableComision = document.querySelector(".table-container2");
const mainDate = document.querySelector(".main-date");
left.classList.remove("left-bye");


buton_right.addEventListener("click", () => {
    right.classList.remove("right-bye");
    tableComision.style.display ="inline-block";
    left.style.display ="inline-block";
    tableCoins.style.display ="none";
})

buton_left.addEventListener("click", () => {
    right.classList.add("right-bye");
    tableComision.style.display ="none";
    left.style.display ="none";
    tableCoins.style.display ="inline-block";

})

// DATE TABLE

const date = new Date().toString();

const dateArr = date.split(" ");

mainDate.innerHTML = "<b>Actualizado : </b>" + dateArr[2] + " " + dateArr[1] + " " + dateArr[4];


// const fecha = () =>{
//     return new Promise((resolve, reject) =>{
//         if(true){
//             setTimeout((resolve) => {
//                 resolve = "Actualizado: ";
//                 let actually = new Date().toString();
//                 console.log(actually.split(" "));
//             }, 1000)
//         }
//     })
// }

// fecha().then(resolve => console.log(resolve));



