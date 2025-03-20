let n = prompt("Nhập tiền tệ muốn đổi: ");
let b = Number(prompt("Nhập số tiền: "));
let vnd= 23000;
let c;
if (n === "USD VND" || n === "usd vnd") {
    c = b*vnd;
}
else {
    c = b / vnd;
}
document.write("Đổi xong rồi " + c);