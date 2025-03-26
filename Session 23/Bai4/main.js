let n = Number(prompt(`Nhập kích thước: `));
let numbers = [];
let count = [];
if (n === 0 || n < 0) {
    console.log(`Không có ký tự số`);
} else {
    for (let i = 0; i < n; i++) {
        numbers[i] = prompt(`Nhập số ${i + 1}:`);
    }
    for (let i = 0; i < n; i++) {
        if (numbers[i] >= 0 && numbers[i] <= 9) {
            count.push(numbers[i]);
        }
    }
    console.log(`Mảng các ký tự số: ${count}`);
}
