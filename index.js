// Generating Random Number from 1 to 6
function getRandom(){
    return Math.floor((Math.random() * 6)+1);
}

const diceNumber1 = getRandom();
const diceNumber2 = getRandom();
const diceImage1 = `images/face-${diceNumber1}.svg`;
const diceImage2 = `images/face-${diceNumber2}.svg`;



document.querySelector("#container1 img").setAttribute("src", diceImage1);
document.querySelector("#container2 img").setAttribute("src", diceImage2);

let outcome = "";
if(diceNumber1>diceNumber2)
outcome = "🚩Player 1 wins!";
else if(diceNumber1 < diceNumber2)
outcome = "🚩Player 2 wins!";
else
outcome = "🎌Its a Draw!"

document.querySelector("h1").innerHTML = outcome;