var n = document.querySelectorAll(".drum").length;

for(var i=0;i<n;i++){
    document.querySelectorAll("button")[i].addEventListener("click",function(){
        

        var buttonAudio = this.innerHTML;

        makeSound(buttonAudio);
        animate(buttonAudio);

    })
}

document.addEventListener("keypress",function(evens){
    makeSound(evens.key);
    animate(evens.key);
})

function makeSound(key){
    switch(key){
        case "w":
            var audio = new Audio('./sounds/tom-1.mp3');
             audio.play();
        break;

        case "a":
            var audio = new Audio('./sounds/crash.mp3');
             audio.play();
        break;

        case "s":
            var audio = new Audio('./sounds/tom-2.mp3');
             audio.play();
        break;

        case "d":
            var audio = new Audio('./sounds/kick-bass.mp3');
             audio.play();
        break;

        case "j":
            var audio = new Audio('./sounds/tom-3.mp3');
             audio.play();
        break;

        case "k":
            var audio = new Audio('./sounds/snare.mp3');
             audio.play();
        break;

        case "l":
            var audio = new Audio('./sounds/tom-4.mp3');
             audio.play();
        break;

        default:console.log(buttonAudio);
    }

}
function animate(event){
    var temp=document.querySelector("." + event);
    temp.classList.add("pressed");
    setTimeout(function(){
        temp.classList.remove("pressed");
    },100);
}