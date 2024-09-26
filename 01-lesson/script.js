const depositTerm = +prompt("Укажите срок депозита: ", 10);
let sum = +prompt("Укажите сумму вложений", 1000);
const percent = 15;
const resultSum = 2000;
let counter = 0;

while (counter < depositTerm) {
    sum += sum * (percent / 100);
    counter++;
    document.write(counter + ": " + sum + "<br>")
}


