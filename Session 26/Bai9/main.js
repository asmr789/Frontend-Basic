function calculateEvenOddSums(array) {
    if (!Array.isArray(array)) {
        return "Dữ liệu không hợp lệ";
    }
    if (array.length === 0) {
        return "Mảng không có dữ liệu";
    }
    const totalEven = array
        .filter(num => num % 2 === 0)
        .reduce((sum, num) => sum + num, 0);
    const totalOdd = array
        .filter(num => num % 2 !== 0)
        .reduce((sum, num) => sum + num, 0);

    return { totalEven, totalOdd };
}
console.log(calculateEvenOddSums([1, 2, 3, 4, 5, 6, 7, 8, 9]));
console.log(calculateEvenOddSums([]));
console.log(calculateEvenOddSums("abc"));