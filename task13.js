// E-commerce Coupon Generator (Generator Function)

function* couponGenerator() {
    yield "WELCOME10";
    yield "SAVE20";
    yield "SUPER30";
    yield "MEGA50";
    return "No More Coupons";
}

const coupons = couponGenerator();

console.log(coupons.next().value);
console.log(coupons.next().value);
console.log(coupons.next().value);
console.log(coupons.next().value);
console.log(coupons.next().value);