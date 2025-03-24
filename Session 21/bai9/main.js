let n = Number(prompt("Nhập số:"));
if (n > 1) {
    let isPrime = true;
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
            isPrime = false;
            break;
        }
    }
    if (isPrime) {
        document.write("Là số nguyên tố");
    } else {
        document.write("Không phải số nguyên tố");
    }
} else {
    document.write("Không phải số nguyên tố");
}