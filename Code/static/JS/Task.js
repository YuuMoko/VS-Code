
let $bt = $('#create');
let $input = $('.nav input');
let $left = $('.left');
let $right = $('.right');

// This is a function used to create a Task and add functionality to the components of each Task
let NewTask = function () {

    let text = $input.val();
    // If the input is empty, an error will be reported
    if (text == "") {
        alert("You must write something!");
        return 0;
    }
    // Set sub elements for Task
    let $task = $("<div class='task'></div>");
    let $p = $('<p>' + text + '</p>');
    $task.append($p);
    $input.val('');
    $task.append('<input type="checkbox">');
    $task.append('<button class="del">Delete</button>');
    $task.append('<button class="edit">Edit</button>');
    $left.append($task);

    // Set the deletion function. If you click this button, the corresponding task will be deleted
    let $del = $task.find('.del');
    $del.on('click', function () {
        let p = confirm("Do you really want to delete it?");
        if (!p) return;
        $task.fadeOut(200, function () {
            $task.remove();
        });
    });

    let $check = $task.find('input');
    // Determine the location of the task based on the checkbox, move it to another location, and add a strikethrough to it
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

    // Editing function

    let $edit = $task.find('.edit');

    // add a change function for $edit

    let flag = true;

    $edit.on('click', function (e) {
        if (flag) flag = false;
        else flag = true;
    });

    $edit.on('click', function (e) {
        if (!flag) return;
        let $change = $task.find('.change');
        if ($task.children('.change').length == 0) return;
        if ($change.val() == "") {
            if (flag) flag = false;
            else flag = true;
            alert("You must write something!");
            return;
        }
        $p.text($change.val());
        $change.remove();

    });

    $edit.on('click', function () {
        if (flag) return;
        // Similarly, if the input is empty, modification is not allowed
        if (($task.children('.change').length > 0)) return;
        $task.append("<input type='text' class='change' placeholder='Enter change'/>");
        let $change = $task.find('.change');
        $change.on('keydown', function (e) {
            if (e.code == 'Enter') {
                if ($change.val() == "") {
                    alert("You must write something!");
                    return 0;
                }
                if (flag) flag = false;
                else flag = true;
                $p.text($change.val());
                $change.remove();
            }
        });
    });


}
// Main function, mainly set to enter and click the Create key to trigger the New function
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