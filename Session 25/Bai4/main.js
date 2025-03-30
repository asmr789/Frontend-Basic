function isPrime(num) {
    if (num <= 0) {
        return "không hợp lệ";
    }
    if (num < 2) {
        return "Không phải số nguyên tố";
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return "Không phải số nguyên tố";
        }
    }
    return "Là số nguyên tố";
}
console.log(isPrime(17));
console.log(isPrime(6));
console.log(isPrime("text"));
console.log(isPrime(-5));
console.log(isPrime(2.5));
