function abcd(array, n) {
    if (n <= 0) {
        console.log("Lớn hơn 0");
        return;
    }
    let result = [];
    for (let i = 0; i < array.length; i += n) {
        let tach = array.slice(i, i + n);
        result.push(tach);
    }
    return result;
}
let myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let tachSize = 3;
let tach = abcd(myArray, tachSize);
console.log(tach);
