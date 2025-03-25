let numbers = [1,2,3,4,5,7,78];
let a = 0;
let b = 0;
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
        a += numbers[i];
    } else {
        b += numbers[i];
    }
}
console.log("Tổng các số chẵn: " + a);
console.log("Tổng các số lẻ: " + b);
