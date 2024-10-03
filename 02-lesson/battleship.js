const locationShip = [Math.floor(Math.random() * 5), 5, 6];
let userChoice;
let isSunk = false;
let countOfHits = 0;
let shots = 0;
let hits = [];

alert(locationShip);

while (isSunk === false) {
    userChoice = +prompt("Enter the number from 0 to 6");
    
    if (userChoice < 0 || userChoice > 6 || isNaN(userChoice)) {
        alert("Enter correct number (0-6)")
    } else {
        shots++;

        if (hits.includes(userChoice)) {
            alert("you already hit this spot, pick another one");
        } else if (locationShip.includes(userChoice)) {
            alert("you hitted");
            countOfHits++;
            hits.push(userChoice);
            if (countOfHits >= 3) {
                isSunk = true;
                alert("you sunk a ship!!! congratulations!!!");
                alert(`you have ${countOfHits} hits from ${shots} shots`);
            }   
        } else {
            alert("you missed");
            hits.push(userChoice);
        }
    }
}