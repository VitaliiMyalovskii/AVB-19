let myNumber = Math.floor(Math.random() * (100));
let tries = 1;
let vField = document.getElementById("inputValue");
let resultField = document.getElementById("result");
let gBtn = document.getElementById("buttonGuess");

document.getElementById("guessedLabel").innerHTML = "Число загадано (число: " + myNumber + ")";

gBtn.addEventListener("click", fClicked);

function fClicked() {
    let guessedValue = parseInt(vField.value);

    if (tries == 7) {
        resultField.innerHTML = "Попыток больше нет!";
        gBtn.innerHTML = "Угадать. Попыток: " + 0;
    }
    else {
        gBtn.innerHTML = "Угадать. Попыток: " + (7 - tries++);
        if (guessedValue > myNumber) {
            resultField.innerHTML = "Загаданное число меньше.";
        }
        else if (guessedValue < myNumber) {
            resultField.innerHTML = "Загаданное число больше.";
        }
        else if (guessedValue == myNumber) {
            resultField.innerHTML = "Вы угадали!";
        }
    }
    document.getElementById("result").innerHTML = value;
};