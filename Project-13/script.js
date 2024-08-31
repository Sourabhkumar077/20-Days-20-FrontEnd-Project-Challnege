
let userInput = document.getElementById("date");
userInput.max = new Date().toISOString().split("T")[0];

let btn = document.querySelector("button");
let result = document.getElementById("result");
userInput.addEventListener('click', function() {
    userInput.focus();
    userInput.click();
  });

btn.addEventListener('click',
    function calculateAge() {
        let birthDate = new Date(userInput.value);

        if (isNaN(birthDate.getTime())) {
            result.innerHTML = "Invalid date";
            return;
        }

        let d1 = birthDate.getDate();
        let m1 = birthDate.getMonth() + 1;
        let y1 = birthDate.getFullYear();

        let today = new Date();

        let d2 = today.getDate();
        let m2 = today.getMonth() + 1;
        let y2 = today.getFullYear();

        let d3, m3, y3;

        y3 = y2 - y1;

        if (m2 >= m1) {
            m3 = m2 - m1;
        } else {
            y3--;
            m3 = 12 + m2 - m1;
        }

        if (d2 >= d1) {
            d3 = d2 - d1;
        } else {
            m3--;
            let daysInMonth = getDaysInMonth(y2, m2 - 1); // use the correct year and month
            d3 = daysInMonth + d2 - d1;
        }

        if (m3 < 0) {
            y3--;
            m3 = 11;
        }

        result.innerHTML = `You are ${y3} years ${m3} months and ${d3} days old`;
    });

function getDaysInMonth(year, month) {
    return new Date(year, month, 0).getDate();
}