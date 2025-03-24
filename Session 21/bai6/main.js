let n = Number(prompt("Nhập số: "));
if (n <= 0) {
    document.write("Nhập lại");
} else {
    document.write("Các ước của số " + n + " là: ");
    for (let i = 1; i <= n; i++) {
        if (n % i === 0) {
            document.write(i + "<br>");
        }
    }
}
