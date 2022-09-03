const word = ["hello","yellow","house","sheep","friend","love","bullet","hangman","father","mother","cousin","jungle","video","music","garden"];

let strings = "";
let selectedWord = [];
let result = "";
let mistakes = 0;

const words = document.querySelectorAll(".doIt");
const spellWord = document.querySelector(".spell");

function spellCheck(){
    const splitedWord = strings.split("");
    const returnSpellCheck = splitedWord.map(letter => (selectedWord.indexOf(letter) >= 0 ? letter : "-"));
    result = returnSpellCheck.join("");
    spellWord.innerHTML = `<p>${result}</p>`;
}


function randomItem(){
    strings = word[Math.floor(Math.random() * word.length)];
    spellCheck();
}

function updateImage(){
    const picHangMan = document.querySelector(".picHang");
    picHangMan.src = `./assets/hangman${mistakes}.png`;
}

function checkIfLose(){
    if(mistakes === 6){
        const gameOver = document.querySelector(".gameOver");
        gameOver.style.display = "block";
        spellWord.innerHTML = `<p>random word is: ${strings}</p>`;
    }
}

function checkIfWin(){
    if(result === strings){
        const picHangMan = document.querySelector(".picHang");
        picHangMan.src = `./assets/winner.png`;
        const gameOver = document.querySelector(".gameOver");
        gameOver.style.display = "block";
    }
}

words.forEach(i => {
    i.addEventListener("click", (event) => {
        const idWord = event.target.id;
        let lowerWord = idWord.toLowerCase();
        selectedWord.indexOf(lowerWord) === -1 ? selectedWord.push(lowerWord) : null;
        i.style.background = "#ed8b7a6b";
        spellCheck();
        if(strings.indexOf(lowerWord) >= 0){
            spellCheck();
            checkIfWin();
        } else if(strings.indexOf(lowerWord) === -1){
            mistakes++;
            updateImage();
            checkIfLose();
        }
    })
})

spellCheck();
randomItem();