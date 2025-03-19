let n = Number(prompt("Nhập năm: "));

if ((n % 4 === 0 && n % 100 != 0) || (n % 400 === 0)) {
    document.write("Năm " + n + " là năm nhuận");
}