var length = document.querySelectorAll(".myButton").length;
for (let index = 0; index < length; index++) {

    document.querySelectorAll(".myButton")[index].addEventListener("click", function () {
        var text = this.innerHTML;
        audioPlay(text);

    });

}

function audioPlay(text) {
    switch (text.trim()) {
        case "A":
            var audio = new Audio('sounds/apple.mp3');
            audio.play();
            break;
        case 'B':
            var audio = new Audio('sounds/ball.mp3');
            audio.play();
            break;
        case 'C':
            var audio = new Audio('sounds/cat.mp3');
            audio.play();
            break;

        default:
            break;
    }
}