let userChoice;
let computerChoice;
let isWinner = false;
const keyWords = ["камень", "ножницы", "бумага"];


while(!isWinner) {
    userChoice = prompt(`Выберите ${keyWords[0]}, ${keyWords[1]} или ${keyWords[2]}`).toLowerCase();

    let randomNumber = Math.floor(Math.random() * 3)

    switch (randomNumber) {
        case 0:
            computerChoice = keyWords[0];
            break;
        case 1:
            computerChoice = keyWords[1];
            break;
        case 2:
            computerChoice = keyWords[2];
            break; 
    }

    if (userChoice === keyWords[0] || userChoice === keyWords[1] || userChoice === keyWords[2]) {
        alert(`Компьютер выбрал: ${computerChoice}`);

        if (userChoice === computerChoice) {
            alert("Ничья, играем еще раз");
        } else {
            const isUserWinner =
            (userChoice === keyWords[0] && computerChoice === keyWords[1]) || 
            (userChoice === keyWords[1] && computerChoice === keyWords[2]) || 
            (userChoice === keyWords[2] && computerChoice === keyWords[0])
            const message = isUserWinner ? "WIN" : "LOSE";
            alert(message);
            isWinner = true;
        }
    } else {
        alert(`Введите корректное значение (${keyWords})`);
    }
}