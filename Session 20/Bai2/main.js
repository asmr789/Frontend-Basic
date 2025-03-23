let n = Number(prompt("Nhập số: "));
console.log("Các số chia hết cho 5 là: ");
for (let i = 1; i <= n; i++) {
  if (i % 5 === 0) {
    document.write(i +"<br>");
  }
}