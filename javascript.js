const display = document.querySelector('input');

function addToDisplay(input){
    display.value += input;
}

function clearAll(){
    display.value = "";
}

function calculate(){
    display.value = eval(display.value).toFixed(2);
}
