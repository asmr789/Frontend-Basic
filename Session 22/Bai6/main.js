let numbers = [2, 5, 7, 4, 1, 8, 6, 2, 5, 7];
let inputNumber = parseInt(prompt("Nhập số:"));
let count = 0;
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] === inputNumber) {
        count++;
    }
}
if (count > 0) {
    console.log(`Số ${inputNumber} xuất hiện ${count} lần trong mảng`);
} else {
    console.log(`Số ${inputNumber} không tồn tại trong mảng`);
}