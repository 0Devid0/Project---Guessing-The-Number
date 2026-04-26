let gameNum = 7;

let userNum = prompt("Guess the number from 0 to 9: ");

while(userNum != gameNum)
{
    userNum = prompt("You gusseing the wrong number, Try again: ");
}

console.log("You guess the right number & that is 7");
