const display = document.querySelector('input');

function addToDisplay(input){
    const lastCharacter = display.value.charAt(display.value.length-1);

    const operators = ["+", "-", "/", "*"];

    if (operators.includes(lastCharacter) && operators.includes(input)) {
        display.value = display.value.replace(lastCharacter, input);   
    }
            
    else {
        display.value += input;
    }
}

function clearAll(){
    display.value = "";
}

function calculate(){
    display.value = eval(display.value).toFixed(2);
}
