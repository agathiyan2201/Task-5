// Food Bill (Currying)

function foodBill(food) {
    return function (drinks) {
        return function (dessert) {
            return food + drinks + dessert;
        };
    };
}

// Function Call
let total = foodBill(200)(100)(80);

console.log(total);