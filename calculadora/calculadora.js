function clearDisplay() {
    document.getElementById('display').innerText = '0';
}

function deleteDigit() {
    let display = document.getElementById('display');
    if (display.innerText.length > 1) {
        display.innerText = display.innerText.slice(0, -1);
    } else {
        display.innerText = '0';
    }
}

function appendToDisplay(value) {
    let display = document.getElementById('display');
    if (display.innerText === '0' && value !== '.') {
        display.innerText = value;
    } else {
        display.innerText += value;
    }
}

function calculateResult() {
    let display = document.getElementById('display');
    try {
        let result = eval(display.innerText);
        display.innerText = result;
    } catch {
        display.innerText = 'Error';
    }
}
