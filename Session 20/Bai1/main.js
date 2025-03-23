let n = prompt("Nhập số:");
let sum = 0;
if (n <=0 || n >= 'a' && n <= 'z' || n >='A' && n <='Z') {
    document.write("Không hợp lệ");
} else {
    n=Number(n);
    for (let i = 1; i <= n; i++) {
        sum += i; 
    }
    alert("Tổng " +sum);
}