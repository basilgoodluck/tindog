const toggleG = document.querySelector(".toggle-bar");
const menuBar = document.querySelector("#menu");

toggleG.addEventListener("click",()=>{
    menuBar.classList.toggle("active")
});

