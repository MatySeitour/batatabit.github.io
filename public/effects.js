// LOGO EFECTS
const logo = document.getElementById("logo-batata");
let sizeScreen = window.innerHeight / 1
let position = logo.getBoundingClientRect().top;

window.onload = function () {
        logo.classList.add("logo-effect");
}

const buton_right = document.getElementById("buton-right");
const buton_left = document.getElementById("buton-left");
const right = document.querySelector(".right-arrow-tables");
const left = document.querySelector(".left-arrow-tables");
const tableCoins = document.querySelector(".table-container")
const tableComision = document.querySelector(".table-container2");
const mainDate = document.querySelector(".main-date");
const mainDate2 = document.querySelector(".main-date2");
left.classList.remove("left-bye");
tableCoins.classList.remove("table1--show");
tableCoins.classList.remove("table1--hide");
tableComision.classList.remove("table2--show");
tableComision.classList.remove("table2--hide");


buton_right.addEventListener("click", () => {
        right.classList.remove("right-bye");
        tableComision.classList.add("table2--show");
        left.style.display = "inline-block";
        tableCoins.classList.add("table1--show");
        tableCoins.classList.remove("table1--hide");
        tableComision.classList.remove("table2--hide");
})

buton_left.addEventListener("click", () => {
        right.classList.add("right-bye");
        left.style.display = "none";
        tableCoins.style.display = "inline-block";
        tableComision.classList.add("table2--hide");
        tableCoins.classList.add("table1--hide");
})

// DATE TABLE 1

const date = new Date().toString();

const dateArr = date.split(" ");

mainDate.innerHTML = `<b>Actualizado: </b> ${dateArr[2]} ${dateArr[1]} ${dateArr[4]}`

// "<b>Actualizado : </b>" + dateArr[2] + " " + dateArr[1] + " " + dateArr[4];

// DATE TABLE 2

const date2 = new Date().toString();

const dateArr2 = date.split(" ");

mainDate2.innerHTML = "<b>Actualizado : </b>" + dateArr[2] + " " + dateArr[1] + " " + dateArr[4];

// EFFECTS PLANS

const yearplan = document.querySelector(".cards-plan");
const monthlyplan = document.querySelector(".cards-plan2");
const arrowLeftPlan = document.querySelector(".arrow-left__plan");
const arrowRightPlan = document.querySelector(".arrow-right__plan");
let arrowState = false;


arrowLeftPlan.style.display = "none";
yearplan.classList.remove("card1-show");
yearplan.classList.remove("card1-hide");
monthlyplan.classList.remove("card2-show");
monthlyplan.classList.remove("card2-hide");


arrowRightPlan.onclick = () => {
        yearplan.classList.add("card1-show");
        monthlyplan.classList.add("card2-show");
        arrowRightPlan.style.display = "none";
        arrowLeftPlan.style.display = "inline-block";
        monthlyplan.classList.remove("card2-hide");
        yearplan.classList.remove("card1-hide");
}

arrowLeftPlan.onclick = () => {
        yearplan.classList.remove("card1-show");
        monthlyplan.classList.remove("card2-show");
        arrowRightPlan.style.display = "inline-block";
        arrowLeftPlan.style.display = "none";
        monthlyplan.classList.add("card2-hide");
        yearplan.classList.add("card1-hide");
}

// MODAL PLANS //
const body = document.querySelector("body");
const modal = document.querySelector(".modal-plans");
const planSelect = document.querySelector(".button-plan");
const modalCierre = document.querySelector(".modal-cierre");
let modalstate = false;

planSelect.onclick = (e) => {
        e.preventDefault();
        modal.classList.add("modal--mostrar");
}

modalCierre.onclick = (e) => {
        e.preventDefault();
        modal.classList.remove("modal--mostrar");
}