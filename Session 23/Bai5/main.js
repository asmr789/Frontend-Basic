let n = Number(prompt(`Nhập kích thước: `));
let numbers = [];
let count=0;
if (n === 0 || n < 0) {
    console.log(`Không có ký tự số`);
} else {
    for (let i = 0; i < n; i++) {
        numbers[i] = prompt(`Nhập ${i + 1}:`);
    }
    for (let i = 0; i < n; i++) {
        if (numbers[i] >= 0 && numbers[i] <= 9) {
            count++;
        }
    }
    console.log(`Mảng có ${count} ký tự số`);
}
