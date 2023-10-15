const toggleG = document.querySelector(".toggle-bar");
const menuBar = document.querySelector("#menu");
const lBtn = document.querySelector(".fa-angle-left");
const rBtn = document.querySelector(".fa-angle-right");
const slide = document.querySelector(".third-section .content .slide")
e

toggleG.addEventListener("click",()=>{
    menuBar.classList.toggle("active")
});

lBtn.addEventListener("click", ()=>{
    slide.style = `transform: translate(${e})`
})