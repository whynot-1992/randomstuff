const wordList = [
    "iLoveCoding",
    "helloWorld",
    "monkeyLover",
    "gamingGod",
    "brainrotPerson"
];
const numList = [
    "837",
    "690",
    "069",
    "895",
    "394",
    "924"
];

console.log("Password generator");

console.log("Your password is...");

function passwordGenerate() {
    if (wordList.length === 0 || numList.length === 0) {
        return "Error: Arrays are empty.";
    }

    const wordIndex = Math.floor(Math.random() * wordList.length);
    const numIndex = Math.floor(Math.random() * numList.length);

    const randomWord = wordList[wordIndex];
    const randomNumber = numList[numIndex];

    const password = randomWord + randomNumber;

    return password;
}

const generatedPassword = passwordGenerate();
console.log(generatedPassword);
