function countNumbers(n) {
    let count = [];
    let array = [];
    if (n <= 0) {
        console.log("Mảng không hợp lệ");
        return;
    } else {
        for (let i = 0; i < n; i++) {
            let input = prompt(`Nhập số thứ ${i + 1}:`);
            let num = parseInt(input);
            if (isNaN(num)) {
                console.log(`Dữ liệu không hợp lệ: ${input}`);
                return;
            }
            array.push(num);
            if (num > 10) {
                count.push(num);
            }
        }
        if (count.length === 0) {
            console.log("Không có số lớn hơn 10");
            return;
        } else {
            return count;
        }
    }
}
console.log(countNumbers(10));
