function employeeLogin() {
    if (true) {
        var companyName = "Stackly IT";
        let employeeId = "EMP101";
        const password = "pass123";

        console.log("Inside if block:");
        console.log("Company Name:", companyName);
        console.log("Employee ID:", employeeId);
        console.log("Password:", password);
    }

    console.log("\nOutside if block:");
    console.log("Company Name:", companyName); // Accessible

    try {
        console.log("Employee ID:", employeeId); // Error
    } catch (error) {
        console.log("Employee ID Error:", error.message);
    }

    try {
        console.log("Password:", password); // Error
    } catch (error) {
        console.log("Password Error:", error.message);
    }
}

employeeLogin();