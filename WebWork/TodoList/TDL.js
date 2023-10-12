// Get users info

let Bt = document.querySelector('#create');
let input = document.querySelector(".nav input")
let check = function () {
    let input = document.querySelector('.nav input');
    let Taskinfo = input.value;
    let Task = document.createElement('div');
    Task.className = 'Task';
    let span = document.createElement('span');
    span.innerHTML = Taskinfo;
    let checkBox = document.createElement('input');
    checkBox.type = 'checkbox';
    let delbt = document.createElement('button');
    delbt.innerHTML = 'delet'

    Task.appendChild(span);
    Task.appendChild(checkBox);
    Task.appendChild(delbt);
    let left = document.querySelector('.left');
    let right = document.querySelector('.right');
    left.appendChild(Task);
    // change Task position

    console.log(Task.className);

    // Determine the properties of the parent node of the current div and swap positions for it
    checkBox.onclick = function () {
        let pt = Task.parentNode;
        let location = pt.className;

        if (location == "left") {
            right.appendChild(Task);
        }
        else {
            left.appendChild(Task);
        }
        Task.remove;
    }

    // Delete a task
    delbt.onclick = function () {
        Task.remove();
    }
    // console.log("debug");
    input.value = "";
}

let TDL = function () {
    Bt.addEventListener("click", function () {
        check();
    })
    input.addEventListener("keydown", function (event) {
        if (event.code == "Enter") check();
    })
}


export {
    TDL
}