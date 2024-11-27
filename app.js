var mainImg = document.getElementById("mainImg");
var smallImages = document.querySelectorAll(".small-image img");

smallImages[0].addEventListener("click", ()=>{
    mainImg.src = smallImages[0].src;
});
smallImages[1].addEventListener("click", ()=>{
    mainImg.src = smallImages[1].src;
});
smallImages[2].addEventListener("click", ()=>{
    mainImg.src = smallImages[2].src;
});
smallImages[3].addEventListener("click", ()=>{
    mainImg.src = smallImages[3].src;
});
