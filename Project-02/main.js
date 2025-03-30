
const letters =  document.querySelectorAll(".letter span");

letters.forEach((letter)=>{
    letter.addEventListener("click", (e)=>{
        e.target.classList.add("active");
    });
});