/* ---------- Calculator Logic ---------- */

const display = document.getElementById("display");

const historyList = document.getElementById("history");

const memoryIndicator = document.getElementById("memory-indicator");

let memory = 0;
let lastResult = null;

/* ---------- Helpers ---------- */

// Return true if char is operator

const isOperator = (ch) => ["+", "-", "*", "/"].includes(ch);

// Safe evaluate: uses Function but wrapped

function safeEval(expr) {

    // basic guard: only numbers, operators, parentheses, dot and spaces

    if (!/^[0-9+\-*/().\s%]+$/.test(expr)) throw new Error("Invalid characters");

    // Replace percentage like 50% -> (50/100)

    const normalized = expr.replace(/(\d+(\.\d+)?)%/g, "($1/100)");

    // Evaluate inside a Function to avoid eval direct use

    const fn = new Function(`return (${normalized})`);
    return fn();
}

function pushHistory(entry) {
    
    if (!entry) return;
    
    const li = document.createElement("li");
    
    li.textContent = entry;
    
    historyList.prepend(li);
    
    // keep history length reasonable
    
    if (historyList.children.length > 20)
        historyList.removeChild(historyList.lastChild);
}

/* ---------- UI helpers ---------- */

function updateMemoryIndicator() {
    
    memoryIndicator.textContent = memory === 0 ? "M: —" : `M: ${memory}`;
}


/* ---------- Core actions ---------- */

function appendToDisplay(value) {

    const cur = display.value;

    const last = cur.slice(-1);

    // If value is operator: validation
    if (isOperator(value)) {

        if (cur === "") return; // don't start with operator

        if (isOperator(last)) return; // prevent double operator

        display.value += value;

        return;

    }


    // Prevent multiple decimals inside a number

    if (value === ".") {

        const lastNumber = cur.split(/[-+*/]/).pop();

        if (lastNumber.includes(".")) return;

    }

    // Append number or dot

    display.value += value;

}

function clearEntry() {

    display.value = "";

}

function allClear() {

    display.value = "";

    memory = 0;

    updateMemoryIndicator();

    historyList.innerHTML = "";

}

function deleteLast() {

    display.value = display.value.slice(0, -1);

}

function calculate() {

    try {

        const expr = display.value.trim();

        if (expr === "") return;


        // check division by zero roughly (catch Infinity result)

        const result = safeEval(expr);


        if (!isFinite(result)) throw new Error("Math error");

        display.value = String(result);

        lastResult = result;

        pushHistory(`${expr} = ${result}`);

    } catch (e) {

        display.value = "Error";

        setTimeout(() => {

            if (display.value === "Error") display.value = "";

        }, 900);

    }

}

function calculateSqrt() {

    try {

        const val = parseFloat(display.value);

        if (isNaN(val) || val < 0) throw new Error("Invalid");

        const res = Math.sqrt(val);

        display.value = String(res);
        pushHistory(`√${val} = ${res}`);

    } catch {

        display.value = "Error";

        setTimeout(() => {

            if (display.value === "Error") display.value = "";

        }, 900);

    }

}

/* Percentage behavior: convert current number or last token to percent */
function percentage() {

    try {

        const cur = display.value.trim();
        if (!cur) return;

        // If expression is simple number

        if (!/[+\-*/()]/.test(cur)) {

            const v = parseFloat(cur) / 100;

            display.value = String(v);

            pushHistory(`${cur}% = ${v}`);

            return;

        }

        // Otherwise append % which safeEval handles (converted to /100)

        display.value += "%";

    } catch {

        display.value = "Error";

        setTimeout(() => {

            if (display.value === "Error") display.value = "";

        }, 900);

    }

}

/* ---------- Memory functions ---------- */

function memoryClear() {

    memory = 0;

    updateMemoryIndicator();

}


function memoryRecall() {

    display.value = String(memory);

}



function memoryAdd() {

    const v = parseFloat(display.value);

    if (!isNaN(v)) {

        memory += v;

        updateMemoryIndicator();

    }

}

function memorySubtract() {

    const v = parseFloat(display.value);

    if (!isNaN(v)) {

        memory -= v;

        updateMemoryIndicator();

    }

}

/* ---------- Event handling ---------- */

// Button clicks - event delegation

document.querySelector(".buttons").addEventListener("click", (e) => {

    const btn = e.target.closest("button");

    if (!btn) return;


    const value = btn.dataset.value;

    const action = btn.dataset.action;

    if (value !== undefined) {

        appendToDisplay(value);

        return;

    }

    switch (action) {
        case "ac":
            allClear();
            break;
        case "c":
            clearEntry();
            break;
        case "del":
            deleteLast();
            break;
        case "equal":
            calculate();
            break;
        case "sqrt":
            calculateSqrt();
            break;
        case "percent":
            percentage();
            break;
        case "mc":
            memoryClear();
            break;
        case "mr":
            memoryRecall();
            break;
        case "mplus":
            memoryAdd();
            break;
        case "mminus":
            memorySubtract();
            break;
        default:
            break;
    }
});

/* Keyboard support */
document.addEventListener("keydown", (e) => {
   
    const key = e.key;

    // handle Enter
    
    if (key === "Enter") {
    
        e.preventDefault();

        calculate();

        return;

    }

    if (key === "Backspace") {

        deleteLast();

        return;

    }

    if (key === "Escape") {

        clearEntry();

        return;

    }

    // number or dot
    if ((key >= "0" && key <= "9") || key === ".") {

        appendToDisplay(key);

        return;

    }

    // operators

    if (["+", "-", "*", "/"].includes(key)) {

        appendToDisplay(key);

        return;

    }

    // shortcuts: % -> percent, m keys for memory

    if (key === "%") {

        percentage();

        return;

    }

    // optional: m (recall), p (m+), n (m-), x (mc) - not bound by default to avoid conflicts
});

/* Initialize */
updateMemoryIndicator();
