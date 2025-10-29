window.onload = function () {
    var square1 = document.getElementById("square1");
    var square2 = document.getElementById("square2");
    var square3 = document.getElementById("square3");

    // Hover on square1
    square1.onmouseenter = function () {
        square2.style.backgroundColor = "#6F4E37";
        square3.style.backgroundColor = "#6F4E37";
    };
    square1.onmouseleave = function () {
        square2.style.backgroundColor = "#E6E6FA";
        square3.style.backgroundColor = "#E6E6FA";
    };

    // Hover on square2
    square2.onmouseenter = function () {
        square1.style.backgroundColor = "#6F4E37";
        square3.style.backgroundColor = "#6F4E37";
    };
    square2.onmouseleave = function () {
        square1.style.backgroundColor = "#E6E6FA";
        square3.style.backgroundColor = "#E6E6FA";
    };

    // Hover on square3
    square3.onmouseenter = function () {
        square1.style.backgroundColor = "#6F4E37";
        square2.style.backgroundColor = "#6F4E37";
    };
    square3.onmouseleave = function () {
        square1.style.backgroundColor = "#E6E6FA";
        square2.style.backgroundColor = "#E6E6FA";
    };
};
