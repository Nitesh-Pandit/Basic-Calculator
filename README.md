-----------xxxx-----Calculator-------xxxxxx------

-------Project Overview-------

This project is a Basic Calculator built using HTML, CSS, and JavaScript.

It performs all basic arithmetic operations and includes extra features like Square Root (√), Percentage (%), and Memory Functions (M+, M-, MR, MC).

It also has smart input validation — users cannot start with an operator or enter multiple consecutive operators — ensuring a clean and correct calculation process.

--------Technologies Used---------

HTML5 – Structure of the calculator

CSS3 – Styling and layout (responsive and modern UI)

JavaScript (ES6) – Logic and interactivity

----------Project Objectives----------

To design a user-friendly calculator interface.

To implement basic and advanced operations using JavaScript.

To demonstrate error handling and input validation in a front-end project.


----------- Features--------------

 -----Basic Operations-----
 
Addition (+)

Subtraction (−)

Multiplication (×)

Division (÷)

Decimal point support

----------- Advanced Features--------------

Square Root (√): Calculates the square root of the displayed value.

Percentage (%): Converts the current value to a percentage.

---------Memory Functions---------

M+ → Adds the current display value to memory.

M- → Subtracts the current display value from memory.

MR → Recalls the stored memory value.

MC → Clears the memory.

--------- Smart Input Handling----------

Operators (+, -, ×, ÷) cannot be pressed first.
Prevents multiple consecutive operators (e.g., 5 ++ not allowed).

Keyboard input supported for all keys.


->-------Handles errors like -<--------     

Division by zero

Invalid or empty expressions

-------- How It Works---------

Open index.html in your browser.

Click buttons or use your keyboard to type numbers and operations.

Use:

C → Clear the display

DEL → Delete the last character

= → Calculate the result

√ → Find the square root

% → Convert to percentage

Use memory buttons to store and recall values:

M+, M-, MR, MC

------------ Project Structure-----------

📁 Basic Calculator
│
├── index.html       # Main HTML file

├── styles.css        # CSS for layout and design

├── script.js        # JavaScript logic

└── README.md        # Project documentation

----------- Error Handling-----------

Prevents invalid sequences like ++, --, */, etc.

Division by zero shows "Error".

Inputting invalid values for square root or percentage also displays "Error".

---------Example Calculations-----------

Input	Output:

5 + 3 * 2	11

√9	3

50 %	0.5

M+ after 10 → MR	10

----------- Assessment Criteria-----------

Criteria	Description

Functionality	All operations perform correctly

UI/UX	Clean, simple, and responsive interface

Code Quality	Readable, modular, and commented

Error Handling	Prevents invalid inputs gracefully

Extra Features	Implemented square root, percentage, and memory

---------- Conclusion--------

This project demonstrates strong understanding of HTML structure, CSS styling, and JavaScript logic handling.
It effectively showcases validation, keyboard integration, and additional features — making it a well-rounded mini-project for web development practice.
