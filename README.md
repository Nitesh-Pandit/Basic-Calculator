🧮 Advanced Calculator

A clean and modern calculator built using HTML, CSS, and JavaScript, featuring memory functions, validations, and keyboard support.

🚀 Live Demo

👉 Add your GitHub Pages link here:

https://yourusername.github.io/calculator/

✨ Features

✔ Basic arithmetic operations

✔ Square root & percentage

✔ Memory functions (M+, M-, MR, MC)

✔ Prevent double operators

✔ Prevent division by zero

✔ Keyboard input support

✔ Responsive and clean UI

✔ Error handling for invalid expressions

🛠️ Technologies Used
Technology	Purpose
HTML5	Structure
CSS3	Styling
JavaScript	Logic & validation
📦 Project Structure
📁 Calculator-Project
│── index.html
│── styles.css
│── script.js
│── README.md

📸 Preview

(Add screenshot here once ready)

![App Screenshot](your-image-link-here)

🔧 How to Run the Project
# Clone this repository
git clone https://github.com/yourusername/calculator.git

# Go to the project folder
cd calculator

# Open index.html in browser

🧩 Key Code Snippets
➤ JavaScript (Operator Validation)
function appendToDisplay(value) {
    const last = display.value.slice(-1);
    const operators = ["+", "-", "*", "/"];

    if (operators.includes(value)) {
        if (display.value === "" || operators.includes(last)) return;
    }

    display.value += value;
}

➤ Memory Functions
function memoryAdd() {
    memory += parseFloat(display.value) || 0;
}

function memorySubtract() {
    memory -= parseFloat(display.value) || 0;
}

function memoryRecall() {
    display.value = memory;
}

function memoryClear() {
    memory = 0;
}

➤ Keyboard Support
document.addEventListener("keydown", (e) => {
    if ((e.key >= "0" && e.key <= "9") || e.key === ".") {
        appendToDisplay(e.key);
    } else if ("+-*/".includes(e.key)) {
        appendToDisplay(e.key);
    } else if (e.key === "Enter") {
        calculate();
    } else if (e.key === "Backspace") {
        deleteLast();
    } else if (e.key === "Escape") {
        clearDisplay();
    }
});

📈 Future Improvements

 Add scientific calculator mode

 Add dark/light theme switch

 Add history panel

 Add sound / button animations

🤝 Contributing

Contributions and suggestions are welcome!
Feel free to open an issue or a pull request.

📝 License

This project is licensed under the MIT License.