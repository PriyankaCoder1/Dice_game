
var randomNo1=Math.floor(Math.random()*6)+1;

var randomDiceImage="dice" + randomNo1 + ".png";
var image1=document.querySelectorAll("img")[0].setAttribute("src","dice" + randomNo1 + ".png"); 

var randomNo2=Math.floor(Math.random()*6)+1;
var randomDiceImage2="dice"+ randomNo2 + ".png";
var image2=document.querySelectorAll("img")[1].setAttribute("src",randomDiceImage2);

//for announcing the result

if(randomNo1>randomNo2){
    document.querySelector("h1").innerHTML="Player 1 wins!";
}
else if(randomNo2>randomNo1){
    document.querySelector("h1").innerHTML="Player 2 wins!";
}
else{
    document.querySelector("h1").innerHTML="Draw!"
}