const emojiArray = [
    {
        emoji: "😃",
        description: "Smiling emoji"
    },
    {
        emoji: "😊",
        description: "Smiling with eyes closed"
    },
    {
        emoji: "😁",
        description: "Grinning face with smiling eyes"
    },
    {
        emoji: "😄",
        description: "Grinning face with big eyes"
    },
    {
        emoji: "😆",
        description: "Grinning squinting face"
    },
    {
        emoji: "😅",
        description: "Grinning face with sweat"
    },
    {
        emoji: "😂",
        description: "Face with tears of joy"
    },
    {
        emoji: "🤣",
        description: "Rolling on the floor laughing"
    },
    {
        emoji: "😇",
        description: "Smiling face with halo"
    },
    {
        emoji: "😍",
        description: "Smiling face with heart-eyes"
    }
];

const emojiFace = document.querySelector('.emoji');
const guess = document.querySelector(".guess");
const score = document.querySelector('.score');
const result = document.querySelector('.result');
const time = document.querySelector('.timer');
let idx = 0;
let scoreCount = 0;
let timer;

guess.addEventListener('keydown', (e) => handleGuess(e));

function handleGuess(e){
    if(e.key === 'Enter'){
        let enteredVal = e.target.value.trim().toLowerCase();
        if(enteredVal === "") return;

        let selected = emojiArray.find(emoji =>
             emoji.description.trim().toLowerCase() === enteredVal && emoji.emoji === emojiFace.textContent.trim()
        );
        console.log(selected);

        if(!selected){
            result.textContent = "Wrong!";
        }
        else {
            scoreCount++;
            result.textContent = "Correct!";
            score.textContent = `Score: ${scoreCount}`;
        }
        e.target.value = "";
        clearInterval(timer);
        setTimeout(() => {
            changeEmoji();
        },1400);
    }
}

function changeEmoji(){
    setTimer();
    if(idx == emojiArray.length) {
        endGame();
        return;
    }
    emojiFace.textContent = emojiArray[idx].emoji;
    result.textContent = "";
    idx++;
}

function endGame(){
    emojiFace.style.fontSize = "3rem";
    emojiFace.textContent = "Hurray you've Completed the Game!";
    time.style.display = 'none';
    guess.style.display = "none";
    result.textContent = "";
    score.textContent = `Score: ${scoreCount} / ${emojiArray.length}`
}
document.addEventListener('DOMContentLoaded', () => {
    changeEmoji();
});

function setTimer(){
    clearInterval(timer);
    let sec = 31;
    timer = setInterval(() => {
        sec--;
        time.textContent = `time: ${sec}`
        if(sec <= 0){
            changeEmoji();
            sec = 30;
        }
    }, 1000);
}