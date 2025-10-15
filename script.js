//Get the display input field
const display = document.getElementById("display");

// Initialize memory variable
let memory = 0; //used for storing memory calculations

// Append value to display when user clicks numbrer/operator buttons
function appendToDisplay(value) {
    const current = display.value;
    const lastChar = display.value.slice(-1);

    //Rule 1: Don't allow operatiors at the beginning

    const operators = ["+", "-", "*", "/"];
    if (operators.includes(value)) {
        if (current === "") return;
        //Rule 2: Don't allow two operators in a row

        if (operators.includes(lastChar)) return;
        //if okay,append operator

        display.value += value;
        return;
    }
    //Allow bynvers abd decunak points normally
    display.value += value;
}

// Clear the entire display
function clearDisplay() {
    display.value = "";
}

// Delete the last character from the display
function deleteLast() {
    display.value = display.value.slice(0, -1);
}

//Perform calculation when "=" button is clicked
function calculate() {
    try {
        // Prevent diving by zero
        if (display.value.includes("/0")) {
            throw new Error("Cannot divide by zero");
        }
        // Use eval to calculate the expression safely
        display.value = eval(display.value);
    } catch (error) {
        //Show error message for invalid expressions
        display.value = "Error";
    }
}

//Calculate square root of current value
function calculateSquareRoot() {
    try {
        const value = parseFloat(display.value);
        if (isNaN(value) || value < 0) {
            throw new Error("Invalid input");
        }
        display.value = Math.sqrt(value);
    } catch (error) {
        display.value = "Error";
    }
}

// Convert current value to percentage
function calculatePercentage() {
    try {
        const value = parseFloat(display.value);
        display.value = value / 100;
    } catch (error) {
        display.value = "Error";
    }
}
// Memory functions


// M+: Add current value to memory
function memoryAdd() {
    if (display.value !== "" && !isNaN(display.value)) {
        memory += parseFloat(display.value);
    }
}

// M-: Subtract current value from memory
function memorySubtract() {
    if (display.value !== "" && !isNaN(display.value)) {
        memory -= parseFloat(display.value);
    }
}

// MR: Recall memory value to display
function memoryRecall() {
    display.value = memory;
}

// MC: Clear memory
function memoryClear() {
    memory = 0;
}

// Keyboard support for typing numbers and operators
document.addEventListener("keydown", (event) => {
    const key = event.key;
    // Allow numbers and decimal point
    if ((key >= "0" && key <= "9") || key === ".") {
        appendToDisplay(key);
    }
    // Allow operators with same validation rules
    else if ("+-*/".includes(key)) {
        appendValue(key);
    }
    // Enter calcuate result
    else if (key === "Enter") {
        calculate();
    } else if (key === "Backspace") {
        deleteLast();
    }
    // Escape clear display
    else if (key === "Escape") {
        clearDisplay();
    }
});
