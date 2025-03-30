let gameSeq = [];
let userSeq = [];

let started = false;
let level = 0;

let btns = ["yellow", "red", "purple", "green"];
let h2 = document.querySelector("h2");



// to start the game any key on screen must be pressed
document.addEventListener("keypress", function () {
    // game can be stared once only
    if (started == false) {
        started = true;

        levelUp();
    }
});

function gameFlash(btn) {
    btn.classList.add("flash");
    setTimeout(function () {
        btn.classList.remove("flash");
    }, 250);

}
function userFlash(btn) {
    btn.classList.add("userflash");
    setTimeout(function () {
        btn.classList.remove("userflash");
    }, 250);

}

function levelUp() {
    userSeq = [];
    level++;
    h2.innerText = `level ${level}`;

    // random button choose
    let ranIdx = Math.floor(Math.random() * 3);
    let randColor = btns[ranIdx];
    let randBtn = document.querySelector(`.${randColor}`);

    gameSeq.push(randColor);
    console.log(gameSeq);
    //button flash function
    gameFlash(randBtn);
}
function checkAns(idx) {
    if (userSeq[idx] == gameSeq[idx]) {
        if (userSeq.length == gameSeq.length) {
            setTimeout(levelUp, 1000);
        }
    }
    else {
        h2.innerHTML = `Game Over!  Your score was <b>${level}</b><br>press any key to restart `;
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(function () {
            document.querySelector("body").style.backgroundColor = "white";
        }, 300);
        reset();
    }
}


function btnPress() {
    let btn = this;
    userFlash(btn);
    let userColor = btn.getAttribute("id");
    userSeq.push(userColor);
    checkAns(userSeq.length - 1);

}
let allbtns = document.querySelectorAll(".btn");
for (btn of allbtns) {
    btn.addEventListener('click', btnPress);

}

function reset() {
    started = false;
    userSeq = [];
    gameSeq = [];
    level = 0;
}



