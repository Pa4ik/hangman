
  const body = document.getElementById('body');
 

  body.innerHTML = `
    <header class="header">
        <h1 class="h1">Hangman</h1>
    </header>
    <main class="main">
        <div class="gallows__block">
        <img class="gallows" src="./src/gallows-img/gallows-6.png">
        </div>
        <div class="keyboard__text">
            <div class="input__span">
                <input type="text" id="input_text" maxlength="10">
                <p id="world__text"></p>
                <Span>Вопрос:</Span>
                <p>Неверные буквы 0/6</p>
            </div>
            <div class="keyboard" id="keyboard">
                <!-- Row 1 -->
                <button class="key">Й</button>
                <button class="key">Ц</button>
                <button class="key">У</button>
                <button class="key">К</button>
                <button class="key">Е</button>
                <button class="key">Н</button>
                <button class="key">Г</button>
                <button class="key">Ш</button>
                <button class="key">Щ</button>
                <button class="key">З</button>
                <button class="key">Х</button>
                <button class="key">Ъ</button>
                <!-- Row 2 -->
                <button class="key">Ф</button>
                <button class="key">Ы</button>
                <button class="key">В</button>
                <button class="key">А</button>
                <button class="key">П</button>
                <button class="key">Р</button>
                <button class="key">О</button>
                <button class="key">Л</button>
                <button class="key">Д</button>
                <button class="key">Ж</button>
                <button class="key">Э</button>
                <!-- Row 3 -->
                <button class="key">Я</button>
                <button class="key">Ч</button>
                <button class="key">С</button>
                <button class="key">М</button>
                <button class="key">И</button>
                <button class="key">Т</button>
                <button class="key">Ь</button>
                <button class="key">Б</button>
                <button class="key">Ю</button>
                <button class="key">Ё</button>
            </div>
        </div>
    </main>`

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

