const closeBtn = document.querySelector("#close-btn");
const navbarTabs = document.querySelector("#navbarTabs");
const openBtn = document.querySelector("#open-btn");

closeBtn.addEventListener("click", ()=>{
    navbarTabs.classList.remove("active");
    navbarTabs.classList.add("inactive");
});

openBtn.addEventListener("click", ()=>{
    navbarTabs.classList.add("active");
})