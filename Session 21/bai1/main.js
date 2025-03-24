let n = [];
for (let i = 0;i < 5; i++) {
    n.push =Number(prompt("Nhập số: "));
}
let sum = 0;
for (let i = 0; i < 5; i++) {
    if (n[i] % 2 !== 0) {
        sum += n[i];
    }
}
document.write("Tổng các số lẻ: " + sum);
