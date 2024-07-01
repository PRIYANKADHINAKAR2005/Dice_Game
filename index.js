function changeDice()
{
var randomNumber=Math.floor((Math.random()*6))+1;
var dice="./images/"+"dice"+randomNumber+".png";

var image1=document.querySelectorAll("img")[0];
image1.setAttribute("src",dice);
var randomNumber2=Math.floor((Math.random()*6))+1;
var dice2="./images/"+"dice"+randomNumber2+".png";

var image2=document.querySelectorAll("img")[1];
image2.setAttribute("src",dice2);

if(randomNumber>randomNumber2)
    {
        
        document.querySelector("h1").innerHTML="Player 1 wins!!";
    }
    else if(randomNumber2>randomNumber)
    {
        document.querySelector("h1").innerHTML="Player 2 wins!!";
    }
    else{
        document.querySelector("h1").innerHTML="Draw!!";
    }
}
setTimeout(changeDice,1000);
