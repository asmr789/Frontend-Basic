let numbers = [];
for (let i = 0; i < 10; i++) {
    let num = Number(prompt(`Nhập số ${i + 1}: `));
    numbers.push(num);
}
let result = numbers[0];
for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > result) {
        result = numbers[i];
    }
}
console.log(`Số lớn nhất là: ${result}`);
