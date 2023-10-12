function isInteger(s) {
    return s % 1 === 0;
};

let low = document.querySelector(".count-prime-low");
let high = document.querySelector(".count-prime-high");

let output = document.querySelector(".count-prime-output");

let button = document.querySelector(".count-prime-button");

let primes = new Array(100010).fill('');

let cnt = 0;

let get_primes = function (n) {
    let st = new Array(n).fill(false);
    st.fill(false);
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

    primes.fill('');

    cnt = 0;
    if (isInteger(l) && isInteger(r)) {
        if (parseInt(l) >= parseInt(r)) {
            output.innerHTML = "Left should smaller than right";
        }
        else {
            if (parseInt(r) > 1000000) {
                output.innerHTML = "Pease do not enter an integer greater than one million";
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