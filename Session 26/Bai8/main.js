function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}
function Array(array) {
    if (!Array.isArray(array)) {
        return "Dữ liệu không hợp lệ";
    }
    if (array.length === 0) {
        return "Mảng không có dữ liệu";
    }
    return array.filter(num => isPrime(num) && num % 2 !== 0);
}
console.log(Array([10, 2, 3, 5, 7, 9]));
console.log(Array([]));
console.log(Array("abc"));