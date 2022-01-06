var length = document.querySelectorAll(".myButton").length;
for (let i = 0; i < length; i++) {
    document.querySelectorAll(".myButton")[i].addEventListener("click", function () {
        var text = this.innerHTML;
        console.log(text);
        audioPlay(text);
        playAnimation(text);
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
        case 'D':
            var audio = new Audio('sounds/dog.mp3');
            audio.play();
            break;
        case 'E':
            var audio = new Audio('sounds/egg.mp3');
            audio.play();
            break;
        case 'F':
            var audio = new Audio('sounds/friend.mp3');
            audio.play();
            break;

        default:
            break;
    }
}
function playAnimation(text) {
    var selectedButton = document.querySelector("." + text);
    selectedButton.classList.add("anim");
    setTimeout( function(){
        selectedButton.classList.remove("anim");
    },1000);
}