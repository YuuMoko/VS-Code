
let input1 = document.querySelector(".isprime-input");
let output1 = document.querySelector(".isprime-output");
let button1 = document.querySelector(".isprime-button")


function isInteger(s) {
    return s % 1 === 0;
};

let check1 = function () {
    let num1 = input1.value;

    console.log(num1);
    if (!isInteger(num1)) {
        output1.innerHTML = "Please enter an integer";
    }
    else {
        let flag = true;
        num1 = parseInt(num1);
        if (num1 == 1) flag = false;

        for (let i = 2; i <= num1 / i; i++)
            if (num1 % i == 0) {
                flag = false;
                break;
            }
        if (flag) output1.innerHTML = "Yes";
        else output1.innerHTML = "No";
    }
}

function isprime() {


    button1.addEventListener("click", function () {
        check1();
    });
    input1.addEventListener("keydown", function (event) {
        if (event.code == "Enter") check1();
    })
};

isprime();