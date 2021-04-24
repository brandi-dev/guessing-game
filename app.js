
let maximum = parseInt(prompt("Enter the maximum number!"));
while(!maximum) {
    maximum = parseInt(prompt("Enter a valid number!"));
}

const targetNum = Math.floor(Math.random() * maximum) + 1;
let attempts = 1; 

let guess = parseInt(prompt("Enter your first guess!"));
while(parseInt(guess) !== targetNum) {
    if(guess === 'q') break;
    attempts++;
    if(guess > targetNum) {
        guess = prompt("Too HIGH! Enter a new guess:");
    } else {
        guess = prompt("Too LOW! Enter a new guess:");
    }
}
if (guess === 'q') {
    prompt("YOU QUIT!")
} else {
    prompt(`YOU GOT IT! It took you ${attempts} guesses`);
}

