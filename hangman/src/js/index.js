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

