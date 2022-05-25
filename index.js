//Dice 1

var randomNumber1 = Math.floor(Math.random()*6)+1;
var randomImage1 = "dice" + randomNumber1 + ".png";
var imageLocation1 = "images/" + randomImage1;

var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src",imageLocation1);

//Dice 2 

var randomNumber2 = Math.floor(Math.random()*6)+1;
var randomImage2 = "dice" + randomNumber2 + ".png";
var imageLocation2 = "images/" + randomImage2;

var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src",imageLocation2);

//Condition

if (randomNumber1>randomNumber2) {
    document.querySelector("h1").innerHTML=("Player 1 Won!");
}
else if(randomNumber2>randomNumber1){
    document.querySelector("h1").innerHTML=("Player 2 Won");
}
else{
    document.querySelector("h1").innerHTML=("Draw");
}


