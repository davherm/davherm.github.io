var KEY = { a:65, d:68, s:83, w:87 };
var move = 80;
var snake = document.getElementById("huve");
var collision = false;
var delay = 1000;

do {

    setTimeout(function() {
        snake.style.transform += "translateX("+ (move) + "px)";
    }, delay);
} while (collision===false);

document.documentElement.addEventListener('keydown',function(press){



    switch(press.keyCode) {
        case 65:
            snake.style.transform += "translateX("+ (-move) + "px)";
            break;

        case 68:
            do {

                setTimeout(function() {
                    snake.style.transform += "translateX("+ (move) + "px)";
                }, delay);
            } while (collision===false);
            break;
    }


/*var x = pacman.getAttribute('x')*1,
    y = pacman.getAttribute('y')*1,
    direction = "right";

    if (press.keyCode === 65 && direction === "left") {
        pacman.style.transform += "translateX("+ (move) + "px)";
    } else if (press.keyCode === 65 && direction === "right") {
        pacman.style.transform += "translateX("+ (move) + "px)";
        pacman.style.transform += "rotateY("+ (180) +"deg)";
        direction = "left";
    } else if (press.keyCode === 68 && direction === "right") {
        pacman.style.transform += "translateX("+ (move) + "px)";
    } else if (press.keyCode === 68 && direction === "left") {
        pacman.style.transform += "translateX("+ (move) + "px)";
        pacman.style.transform += "rotateY("+ (180) +"deg)";
        direction = "right";
    }*/
},false);
