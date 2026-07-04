// Employee Profile (Scope)

function employeeProfile() {
    if (true) {
        var company = "Stackly";
        let designation = "MERN Developer";
        const salary = 50000;
    }

    // Accessible
    console.log("Company:", company);

    // Not Accessible
    try {
        console.log("Designation:", designation);
    } catch (error) {
        console.log("Designation Error:", error.message);
    }

    try {
        console.log("Salary:", salary);
    } catch (error) {
        console.log("Salary Error:", error.message);
    }
}

employeeProfile();