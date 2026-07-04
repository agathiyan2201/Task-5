// Online Payment (Higher Order + Callback)

// Callback Function
function paymentSuccess() {
    console.log("Payment Successful");
}

// Higher Order Function
function makePayment(callback) {
    console.log("Payment Processing...");
    callback();
}

// Function Call
makePayment(paymentSuccess);