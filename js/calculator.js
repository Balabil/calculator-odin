/*
    Basic Calculator functions add, subtract, multiply and divide.
*/

const buttons = document.querySelectorAll(".btn");
const display = document.querySelector(".calc-display h2");

buttons.forEach(btn => {
    btn.addEventListener('click', () => {
        display.textContent = btn.textContent;
    })
});

function populateDisplay(btn) {
    display.textContent = btn.textContent;
};

function add(a,b){
    return a + b;
}

function subtract(a,b){
    return a - b;
}

function multiply(a,b){
    return a * b;
}

function divide(a,b){
    return a / b;
}

function operate(a,b,op){
    switch(op){
        case "+":
            add(a,b);
        case "-":
            subtract(a,b);
        case "x":
            multiply(a,b);
        case "/":
            divide(a,b);
    }
}