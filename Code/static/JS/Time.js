// Retrieve the current time and print it under Create Input
let $time = $('.Time');
let Time = function () {
    let date = new Date();

    let year = date.getFullYear();
    let month = date.getMonth() + 1;
    let day = date.getDate();
    let hour = date.getHours();
    let minutes = date.getMinutes();
    $time.text(year + "/" + month + "/" + day + " " + hour + ":" + minutes);
}
// Execute time function every 300 milliseconds
setInterval(() => {
    Time();
}, 300);