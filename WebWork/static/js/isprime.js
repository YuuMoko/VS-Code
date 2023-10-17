
input = document.querySelector(".isprime-input");
output = document.querySelector(".isprime-output");
button = document.querySelector(".isprime-button")


function isInteger(s) {
    return s % 1 === 0;
};

check = function () {
    num = input.value;

    console.log(num);
    if (!isInteger(num)) {
        output.innerHTML = "Please enter an integer";
    }
    else {
        let flag = true;
        num = parseInt(num);
        if (num == 1) flag = false;

        for (let i = 2; i <= num / i; i++)
            if (num % i == 0) {
                flag = false;
                break;
            }
        if (flag) output.innerHTML = "Yes";
        else output.innerHTML = "No";
    }
}

function isprime() {


    button.addEventListener("click", function () {
        check();
    });
    input.addEventListener("keydown", function (event) {
        if (event.code == "Enter") check();
    })
};

isprime();