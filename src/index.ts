import './styles/reset.css';
import './styles/main.css';

// Members
const INPUT = document.getElementById('input') as HTMLInputElement;
const OUTPUT = document.getElementById('output');

// Functions
function handleInput(value: string): void {
    OUTPUT.appendChild(newOutput(value, 'output-msg', 'output-msg-player'));
}

function newOutput(value: string, ...classes: string[]): HTMLElement {
    const node = document.createElement('li');
    node.classList.add(...classes);
    node.innerText = value;

    return node;
}

// Attach listeners
INPUT.addEventListener('keyup', handleInputType);

function handleInputType(event: KeyboardEvent): void {
    // Return if the user did not type 'enter'
    if (event.keyCode !== 13) return;

    // Copy the input value from the element
    const value = INPUT.value;

    // Clear the input on the screen
    INPUT.value = '';

    // Pass the value off to be handled
    handleInput(value);
}