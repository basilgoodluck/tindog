const toggleG = document.querySelector(".toggle-bar-icon-fa");
const menuBar = document.querySelector("#menu");

toggleG.addEventListener("click",()=>{
    menuBar.classList.toggle("active")
});

