const durmList = document.querySelectorAll(".drum");

for(var i = 0 ; i < durmList.length; i ++){
    durmList[i].addEventListener("click",change);
}
function change(){
    console.log(this);
    this.style.color="white";
    var audio = new Audio('sounds/'+this.innerHTML+'.mp3');
    audio.play();
}
function playsound(){
    var audio = new Audio('sounds/tom-1.mp3');
    audio.play();
}