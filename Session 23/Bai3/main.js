let n = Number(prompt(`Nhập kích thước: `));
let numbers = [];
if (n < 0) { 
    console.log(`Số lượng phần tử không hợp lệ`);
} else if (n === 0) { 
    console.log(`Mảng không có phần tử`);
} else {
    for (let i = 0; i < n; i++) {
        let num = Number(prompt(`Nhập phần tử thứ ${i + 1}: `));
        numbers.push(num);
    }
    let count = 0;
    for (let i = 0; i < numbers.length; i++) {
        if (Number.isInteger(numbers[i]) && numbers[i] < 0) {
            count++;
        }
    }
    console.log(`Số lượng số nguyên âm trong mảng: ${count}`);
}
