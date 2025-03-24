let n = [];
for (let i = 0; i < 5; i++) {
    n.push(Number(prompt("Nhập số: ")));
}
let count = 0;
for (let i = 0; i < n.length; i++) {
    if (n[i] % 2 !== 0) {
        count += 1;
    }
}
document.write("Tổng các số lẻ: " + count);
