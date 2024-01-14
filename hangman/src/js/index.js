
  const body = document.getElementById('body');
 

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
                <input type="text" id="input_text" maxlength="10">
                <p id="world__text"></p>
                <Span>Вопрос:</Span>
                <p>Неверные буквы 0/6</p>
            </div>
            <div class="keyboard" id="keyboard">
            </div>
        </div>
    </main>`


function generateBtn() {
    let buttonsHTML = 'ЙЦУКЕНГШЩЗХЪФЫВАПРОЛДЖЭЯЧСМИТЬБЮЁ'.split('').map(letter =>
          `<button
              class='key'
            >
              ` + letter + `
            </button>
          `).join('');
        document.getElementById('keyboard').innerHTML = buttonsHTML;
      }

generateBtn()
    const keyboard = document.getElementById('keyboard');
    const inputText = document.getElementById('input_text');

  keyboard.addEventListener('click', clickKey);
  document.addEventListener('keydown', pressKey);

  function clickKey(event) {
    const key = event.target.innerText;
    if (key) {
        inputText.value += key;
    }
  }

  function pressKey(event) {
    const key = event.key.toUpperCase();
    if (/^[А-Я]$/.test(key)) {
        inputText.value += key;
    }
  }

