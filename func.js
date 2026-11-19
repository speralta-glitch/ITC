// Assignment #1: Unit Conversion
function runConversion() {
    const type = document.getElementById("convType").value;
    const val = parseFloat(document.getElementById("convInput").value);
    const out = document.getElementById("convResult");

    if (isNaN(val)) {
        out.textContent = "Please enter a valid number.";
        return;
    }

    let result = 0;
    let label = "";

    if (type === "cToF") {
        result = (val * 9 / 5) + 32;
        label = `${val}°C = ${result.toFixed(2)}°F`;
    } else if (type === "fToC") {
        result = (val - 32) * 5 / 9;
        label = `${val}°F = ${result.toFixed(2)}°C`;
    } else if (type === "mToFt") {
        result = val * 3.28084;
        label = `${val} m = ${result.toFixed(2)} ft`;
    } else if (type === "ftToM") {
        result = val / 3.28084;
        label = `${val} ft = ${result.toFixed(2)} m`;
    }

    out.textContent = label;
}

// Assignment #2: Income Tax Calculator 
function calculateTax() {
    const income = parseFloat(document.getElementById("taxIncome").value);
    const out = document.getElementById("taxResult");

    if (isNaN(income) || income < 0) {
        out.textContent = "Please enter a valid income amount.";
        return;
    }

    let tax = 0;
    if (income <= 250000) {
        tax = 0;
    } else if (income <= 400000) {
        tax = (income - 250000) * 0.20; 
    } else if (income <= 800000) {
        tax = 30000 + (income - 400000) * 0.25; 
    } else if (income <= 2000000) {
        tax = 130000 + (income - 800000) * 0.30; 
    } else if (income <= 8000000) {
        tax = 490000 + (income - 2000000) * 0.32; 
    } else {
        tax = 2410000 + (income - 8000000) * 0.35; 
    }

    out.textContent = `Income Tax: ₱${tax.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
}

// Assignment #3: Factorial (While), Sum (Do-While), Average (For)
function calculateLoops() {
    const n = parseInt(document.getElementById("loopN").value);
    const out = document.getElementById("loopResult");

    if (isNaN(n) || n < 1) {
        out.textContent = "Please enter a positive integer (1 or higher).";
        return;
    }

    // 1. Factorial using While Loop
    let factorial = 1;
    let i = 1;
    while (i <= n) {
        factorial *= i;
        i++;
    }

    // 2. Sum using Do-While Loop
    let sum = 0;
    let j = 1;
    do {
        sum += j;
        j++;
    } while (j <= n);

    // 3. Average using For Loop
    let total = 0;
    for (let k = 1; k <= n; k++) {
        total += k;
    }
    let avg = total / n;

    out.innerHTML = `Factorial: ${factorial.toLocaleString()}<br>Sum: ${sum.toLocaleString()}<br>Average: ${avg.toFixed(2)}`;
}

// Assignment #4: Simple Payroll
let payrollList = [];

function computePayroll() {
    const name = document.getElementById("empName").value.trim();
    const days = parseFloat(document.getElementById("daysWorked").value);
    const rate = parseFloat(document.getElementById("dailyRate").value);
    const deduction = parseFloat(document.getElementById("deduction").value) || 0;

    if (!name || isNaN(days) || isNaN(rate) || days < 0 || rate < 0 || deduction < 0) {
        alert("Please enter valid payroll parameters.");
        return;
    }

    const grossPay = days * rate;
    const netPay = grossPay - deduction;

    payrollList.push({ name, days, rate, grossPay, deduction, netPay });

    document.getElementById("empName").value = "";
    document.getElementById("daysWorked").value = "";
    document.getElementById("dailyRate").value = "";
    document.getElementById("deduction").value = "";

    renderPayrollTable();
}

function deletePayrollRow() {
    const lineNum = parseInt(document.getElementById("deleteLineNum").value);

    if (isNaN(lineNum) || lineNum < 1 || lineNum > payrollList.length) {
        alert("Invalid Line Number.");
        return;
    }

    payrollList.splice(lineNum - 1, 1);
    document.getElementById("deleteLineNum").value = "";

    renderPayrollTable();
}

function renderPayrollTable() {
    const tbody = document.getElementById("payrollTableBody");
    tbody.innerHTML = "";

    payrollList.forEach((emp, index) => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${index + 1}</td>
            <td>${emp.name}</td>
            <td>${emp.days}</td>
            <td>₱${emp.rate.toFixed(2)}</td>
            <td>₱${emp.grossPay.toFixed(2)}</td>
            <td>₱${emp.deduction.toFixed(2)}</td>
            <td>₱${emp.netPay.toFixed(2)}</td>
        `;
        tbody.appendChild(row);
    });
}
