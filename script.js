const like = document.getElementById("like");
const goback = document.getElementById("goback");
let popup = document.getElementById("popup");

like.addEventListener("click",()=>{
    popup.classList.add("open-popup");
})
goback.addEventListener("click",()=>{
    popup.classList.remove("open-popup")
})