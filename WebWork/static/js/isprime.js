
let input = document.querySelector(".isprime-input");
let output = document.querySelector(".isprime-output");
let button = document.querySelector(".isprime-button")


function isInteger(s) {
    return s % 1 === 0;
};

function isprime() {


    button.addEventListener("click", function () {
        let num = input.value;
        if (!isInteger(num)) {
            output.innerHTML = "Please enter an integer";
        }
        else {
            let flag = true;

            if (num == 1) flag = false;

            for (let i = 2; i <= num / i; i++)
                if (!num % i) {
                    flag = false;
                    break;
                }
            if (flag) output.innerHTML = "Yes";
            else output.innerHTML = "No";
        }
    });
};

export {
    isprime
};