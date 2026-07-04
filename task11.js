// Salary Calculator (Uncurrying)

function salary(basic, hra, bonus) {
    return basic + hra + bonus;
}

// Function Call
let totalSalary = salary(50000, 5000, 3000);

console.log("Total Salary : " + totalSalary);