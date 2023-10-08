let a = [5, 4, 1, 3, 2];



let main = function () {
    console.log(a);
    a.sort(function (a, b) {
        return b - a;
    });
    console.log(a);

}



export {
    main
}