// Bank Transaction (Higher Order + Callback)

// Callback Function
function transactionSuccessful() {
    console.log("Transaction Successful");
}

// Higher Order Function
function withdraw(callback) {
    console.log("Processing...");
    callback();
}

// Function Call
withdraw(transactionSuccessful);