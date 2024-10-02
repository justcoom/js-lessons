function getRandomElement(array) {
    const randomIndex = Math.floor(Math.random() * array.length);
    return array[randomIndex]
}
const words1 = ["Мой кот", "Моя собака", "Мой попугай"];
const words2 = ["любит есть", "хочет поиграть", "всегда ищет"];
const words3 = ["морковку", "макароны", "косточку"];
const words4 = ["Мой енот", "Моя крыса", "Мой хомяк"];
function makePhrases(param1, param2, param3) {
    const phrase = getRandomElement(param1) + " " + getRandomElement(param2) + " " + getRandomElement(param3);
    return phrase;
}

console.log(makePhrases(words4, words2, words3));
