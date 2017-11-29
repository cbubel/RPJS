import './styles/reset.css';
import './styles/main.css';

// Members
const INPUT = document.getElementById('game-input') as HTMLInputElement;

// Functions
function handleInput(value: string): void {
    console.log(value);
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