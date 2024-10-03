const scores = [33, 40, 24, 90, 72, 45, 81, 4, 15, 37, 55, 67, 16, 88, 93, 21, 9, 22, 99, 26, 91, 35, 66, 44, 48, 3, 29, 71, 51, 79, 6, 80, 82, 7, 94, 99, 47, 11, 62, 98]

const costs = [4, 29, 28, 25, 27, 35, 18, 29, 7, 1, 22, 15, 31, 12, 12, 7, 10, 34, 23, 35, 8, 13, 4, 30, 12, 34, 11, 3, 27, 24, 35, 24, 3, 1, 14, 32, 31, 14, 35, 14]

function printGetHighLowScore(array) {
    let output;
    let highScore = 0;
    let lowScore = array[0];

    for (let i = 0; i < array.length; i++) {
        output = `bubble solution #${i} score: ${array[i]}`;
        console.log(output);
        highScore > array[i] ? highScore : highScore = array[i];
        if (lowScore > array[i]) {
            lowScore = array[i];
        }
    }
    return [highScore, lowScore];
}

const highScore = printGetHighLowScore(scores)[0];
const lowScore = printGetHighLowScore(scores)[1];
console.log(`highest bubble score: ${highScore}`);
console.log(`lowest bubble score: ${lowScore}`);
console.log(`bubble tests: ${scores.length}`);

function findBestSolutions(array, maxValue) {
    const bestSolution = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i] === maxValue) {
            bestSolution.push(i);
        }
    }
    return bestSolution;
}
const bestSolution = findBestSolutions(scores, highScore);
console.log(`number of highest score: ${bestSolution}`);

function getMostCostEffectiveSolution(resultArray, costsArray, maxValue) {
    let index;
    const bestSolution = findBestSolutions(resultArray, maxValue);
    if (costsArray[bestSolution[0]] < costsArray[bestSolution[1]]) {
        index = bestSolution[0];
    } else {
        index = bestSolution[1];
    }
    return index;
}

const mostCostEffective = getMostCostEffectiveSolution(scores, costs, highScore);
console.log(`Bubble solution ${mostCostEffective} is the most cost effective`);

