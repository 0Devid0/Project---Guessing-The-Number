let gameNum = Math.floor(Math.random() * 10);

let attempts = 0;

function checkGuess()
{
    let userNum = Number(document.getElementById("guessInput").value);
    let message = document.getElementById("message");
    let attemptText = document.getElementById("attempts");

    attempts++;

    if(userNum === gameNum) 
    {
        message.innerText = "🎉 Correct! Number was " + gameNum + " 🎉";
    }
    else if(userNum < gameNum)
    {
        message.innerText = "📉 Low!";
    }
    else
    {
        message.innerText = "📈 High!";
    }

    attemptText.innerText = "Attempts: " + attempts;
}