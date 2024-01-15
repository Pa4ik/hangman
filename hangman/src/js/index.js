
  const body = document.getElementById('body');

  const wordsAndQuest = [
    {
        word: "Пенициллин",
        Quest: "Что было создано благодаря грибам-плесени?",
    },
    {
        word: "Олимпиада",
        Quest: "Как звали маму Македонского?",
    },
    {
        word: "Салага",
        Quest: "Новобранец на флоте – это …",
    },
    {
        word: "Танго",
        Quest: "Какой танец считается самым страстным?",
    },
    {
        word: "Минск",
        Quest: "Назовите город-столицу Республики Беларусь",
    },
    {
        word: "Клепсидра",
        Quest: "Каким словом называли в древние времена водяные часы?",
    },
    {
        word: "Прополис",
        Quest: "Как называется пчелиный клей?",
    },
    {
        word: "Мука",
        Quest: "Какой основной ингредиент нужен для создания пирожков?",
    },
]


  body.innerHTML = `
    <header class="header">
        <h1 class="h1">Hangman</h1>
    </header>
    <main class="main">
        <div class="gallows__block">
            <img class="gallows" src="./src/gallows-img/gallows-0.png">
        </div>
        <div class="keyboard__text">
            <div class="input__span">
                <p id="world__text">Слово:</p>
                <Span id='quest__text'>Вопрос:</Span>
                <p id="incorrect">Неверные буквы 0/6</p>
            </div>
            <div class="keyboard" id="keyboard">
            </div>
        </div>
    </main>`


function generateBtn() {
    let buttonsHTML = 'ЙЦУКЕНГШЩЗХЪФЫВАПРОЛДЖЭЯЧСМИТЬБЮЁ'.split('').map(letter =>
          `<button
              class='key'
              data-key='${letter}'
            >
              ` + letter + `
            </button>
          `).join('');
        document.getElementById('keyboard').innerHTML = buttonsHTML;
      }

generateBtn()


    const keyboard = document.getElementById('keyboard');
    const worldText = document.getElementById('world__text');
    const incorrect = document.getElementById('incorrect');

    keyboard.addEventListener('click', clickKey);
    document.addEventListener('keydown', pressKey);

    let guessedLetters = [];
    let incorrectLetter = 0;
    const maxIncorrectLetter = 6;
    

    function clickKey(event) {
        const key = event.target.innerText;
        if (key) {
            checkLetter(key);
            event.target.disabled = true;
        }
    }
   
  
    function pressKey(event) {
        const key = event.key.toUpperCase();
        if (/^[А-Я]$/.test(key)) {
            const button = document.querySelector(`.key[data-key='${key}']`);
            if (button) {
               checkLetter(key);
               button.disabled = true;
            }
        }
    }

 

    function checkLetter(letter) {
        if (!guessedLetters.includes(letter)) {
            guessedLetters.push(letter);
            if (!currentWord.includes(letter)) {
                incorrectLetter++;
                updateImgAndIncorrect ()
            }
            updateWord();
        } 
        }

    function updateWord() {
        let displayText = '';
        for (const char of currentWord) {
            if (guessedLetters.includes(char)) {
                displayText += char;
            } else {
                displayText += '_';
            }
        }
        worldText.innerHTML = `Слово: ${displayText}`;
    }



    function updateImgAndIncorrect () {
        incorrect.innerHTML =`Неверные буквы ${incorrectLetter}/6`
        document.querySelector('.gallows').src = "./src/gallows-img/gallows-" + incorrectLetter + ".png";
        if ( incorrectLetter === maxIncorrectLetter ){
            // incorrect.innerHTML =`Неверные буквы 6/6`
            // document.querySelector('.gallows').src = "./src/gallows-img/gallows-6.png";
        }
    }

let currentWordIndex = Math.floor(Math.random() * wordsAndQuest.length);
let currentWord = wordsAndQuest[currentWordIndex].word.toUpperCase();
let currentQuest = wordsAndQuest[currentWordIndex].Quest;


worldText.innerHTML = `Слово: ${hideWord(currentWord)}`;
document.getElementById('quest__text').textContent = `Вопрос: ${currentQuest}`;

function hideWord(word) {
    return word.replace(/./g, '_');
}





