function isPrime(n) {
    if (n <= 0) {
        console.log("Số lượng không hợp lệ");
        return;
    }
    let array = [];
    let primes = [];
    for (let i = 0; i < n; i++) {
        let input = prompt(`Nhập ${i + 1}:`);
        let num = parseInt(input);
        if (isNaN(num)) {
            console.log(`Không hợp lệ`);
            return;
        }
        array.push(num);
    }
    for (let i = 0; i < array.length; i++) {
        if (isPrimeNumber(array[i])) {
            primes.push(array[i]);
        }
    }
    if (primes.length === 0) {
        console.log("Không có số nguyên tố");
        return;
    } else {
        return primes;
    }
}
function isPrimeNumber(n) {
    if (n < 2) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
            return false;
        }
    }
    return true;
}

console.log(isPrime(5));
