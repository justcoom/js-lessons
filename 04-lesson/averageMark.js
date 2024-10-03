function calculateAverage(scores) {
    let sum = 0;
    for (let i = 0; i < scores.length; i++) {
        sum += scores[i];
    }
    return Math.round(sum / scores.length)
}

function classifyScores(scores) {
    const classifiedScores = [];
    for (let i = 0; i < scores.length; i++) {
        let grade;
        const score = scores[i];
        if (score >= 90) {
            grade = 'A';
        } else if (score >= 80) {
            grade = 'B';
        } else if (score >= 70) {
            grade = 'C';
        } else if (score >= 50) {
            grade = 'D';
        } else {
            grade = 'F';
        }
        classifiedScores.push(grade);
    }
    return classifiedScores;
}

function reverseArray(array) {
    const reverseArray = [];
    for (let i = 0; i < array.length; i++) {
        reverseArray[i] = array[array.length - 1 - i];
    }
    return reverseArray
}

const myScores = [32, 54, 65, 87, 96, 43];

const average = calculateAverage(myScores);
console.log(`Average student score: ${average}`);

const classifiedScores = classifyScores(myScores);
console.log(`Classified score: ${classifiedScores}`);

const reversedArray = reverseArray(myScores);
console.log(reversedArray);
console.log(myScores.reverse());

