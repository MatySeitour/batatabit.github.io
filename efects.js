const buton_right = document.getElementById("buton-right");
const buton_left = document.getElementById("buton-left");
const right = document.querySelector(".right-arrow-tables");
const left = document.querySelector(".left-arrow-tables");
const tableCoins = document.querySelector(".table-container")
const tableComision = document.querySelector(".table-container2");
left.classList.remove("left-bye");


buton_right.addEventListener("click", () => {
    right.classList.remove("right-bye");
    tableComision.style.display ="inline-block";
    left.style.display ="inline-block";
})

buton_left.addEventListener("click", () => {
    right.classList.add("right-bye");
    tableComision.style.display ="none";
    left.style.display ="none";

})

