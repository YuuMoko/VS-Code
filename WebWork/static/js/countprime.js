
function isInteger(s) {
    return s % 1 === 0;
};

let low = document.querySelector(".count-prime-low");
let high = document.querySelector(".count-prime-high");

let output = document.querySelector(".count-prime-output");

let button = document.querySelector(".count-prime-button");

let a = new Array(10000010).fill('');
let primes = new Array(10000010).fill('');
let st = new Array(10000010).fill(false);
let cnt = 0;

let get_primes = function (n) {

    for (let i = 2; i <= n; i++) {
        if (!st[i]) primes[cnt++] = i;
        for (let j = 0; primes[j] <= n / i; j++) {
            st[primes[j] * i] = true;
            if (i % primes[j] === 0) break;
        }
    }
}

let check = function () {
    let l = low.value;
    let r = high.value;

    a.fill('');
    primes.fill('');
    st.fill(false);
    cnt = 0;
    if (isInteger(l) && isInteger(r)) {
        if (parseInt(l) >= parseInt(r)) {
            output.innerHTML = "Left should smaller than right";
        }
        else {
            get_primes(r);
            let idx;
            for (let i = 0; i < cnt; i++)
                if (parseInt(primes[i]) >= parseInt(l)) {
                    idx = i;
                    break;
                }
            output.innerHTML = `The number of primes between ${l} and ${r} is ${cnt - idx}`;
        }
    }
    else {
        output.innerHTML = "Please enter an integer";
    }
}

let countprime = function () {
    button.addEventListener("click", function () {
        check();
    });
    low.addEventListener("keydown", function (event) {
        if (event.code == "Enter") check();
    });
    high.addEventListener("keydown", function (event) {
        if (event.code == "Enter") check();
    });
}
export {
    countprime
}