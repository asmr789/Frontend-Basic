let n = Number(prompt("Nhập số:")); 
if (isNaN(n) || !Number.isInteger(n)) {
    alert("Nhập lại!");
} else {
    let isPrime = true;
    if (n < 2) {
        isPrime = false;
    } else {
        for (let i = 2; i <= Math.sqrt(n); i++) {
            if (n % i === 0) {
                isPrime = false;
                break;
            }
        }
    }
    if (isPrime) {
        alert("là số nguyên tố");
    } else {
        alert("không phải là số nguyên toos");
    }
}
