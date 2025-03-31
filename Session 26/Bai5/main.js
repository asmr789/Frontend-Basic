function maxandposition(array) {
    if (!Array.isArray(array)) {
        return "Dữ liệu không hợp lệ";
    }
    if (array.length === 0) {
        return "Mảng không có dữ liệu";
    }
    let max = Math.max(...array);
    let position = array.indexOf(max);
    return { max, position };
}
console.log(maxandposition([10, 9, 5, 11, 24, 5]));
console.log(maxandposition([]));
console.log(maxandposition("abc"));