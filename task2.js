

console.log("Using var:");
console.log(accountBalance); // Output: undefined
var accountBalance = 5000;



console.log("\nUsing let:");
try {
    console.log(balance); // Error
} catch (error) {
    console.log(error.message);
}
let balance = 10000;


console.log("\nUsing const:");
try {
    console.log(minBalance); // Error
} catch (error) {
    console.log(error.message);
}
const minBalance = 2000;