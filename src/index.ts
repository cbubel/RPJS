import './styles/reset.css';
import './styles/main.css';

// Members
const INPUT = document.getElementById('input') as HTMLInputElement;
const OUTPUT = document.getElementById('output');
const DEFAULT_OUTPUT = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, error impedit commodi incidunt ut dolorem explicabo modi iste, accusamus eos eveniet, quos dolorum ullam laboriosam vitae obcaecati odio corporis est!';

// Functions
function handleInput(value: string): void {
    OUTPUT.appendChild(newOutput(value, 'output-msg', 'output-msg-player'));
    OUTPUT.appendChild(newOutput(DEFAULT_OUTPUT, 'output-msg', 'output-msg-game'));

    scrollToBottom();
}

function scrollToBottom(): void {
    OUTPUT.scrollTo(0, OUTPUT.scrollHeight);
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