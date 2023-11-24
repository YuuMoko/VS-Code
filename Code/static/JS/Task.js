
let $bt = $('#create');
let $input = $('.nav input');
let $left = $('.left');
let $right = $('.right');
let NewTask = function () {

    let text = $input.val();

    if (text == "") {
        alert("You must write something!");
        return 0;
    }

    let $task = $("<div class='task'></div>");
    let $p = $('<p>' + text + '</p>');
    $task.append($p);
    $input.val('');
    $task.append('<input type="checkbox">');
    $task.append('<button class="del">Delete</button>');
    $task.append('<button class="edit">Edit</button>');
    $left.append($task);

    let $del = $task.find('.del');
    $del.on('click', function () {
        $task.remove();
    });

    let $check = $task.find('input');

    $check.on('click', function () {
        if (!$check.is(':checked')) {
            $left.append($task);
            $p.css("text-decoration", "none");
        }
        else {
            $right.append($task);
            $p.css("text-decoration", "line-through");
        }
    });

    let $edit = $task.find('.edit');
    $edit.on('click', function () {
        if (($task.children('.change').length > 0)) return;
        $task.append("<input type='text' class='change' placeholder='Enter change'/>");
        let $change = $task.find('.change');
        $change.on('keydown', function (e) {
            if (e.code == 'Enter') {
                $p.text($change.val());
                $change.remove();
            }
        });
    });


}

let main = function () {

    $bt.on('click', function () {
        NewTask();
    });
    $input.on('keydown', function (e) {
        if (e.code == "Enter") {
            NewTask();
        }
    });
}

main();