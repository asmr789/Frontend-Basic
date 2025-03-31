function array(array) {
    if (!Array.isArray(array)) {
        return "Dữ liệu không hợp lệ";
    }
    if (array.length === 0) {
        return "Mảng không có dữ liệu";
    }
    const squaredEvens = array
        .map(num => num ** 2)
        .filter(num => num % 2 === 0);

    return squaredEvens;
}
console.log(array([2, 5, 10]));
console.log(array([]));
console.log(array("abc"));
