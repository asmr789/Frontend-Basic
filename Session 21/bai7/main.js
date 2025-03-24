let input = Number(prompt("Nhập số tiền: "));
let month = Number(prompt("Nhập số tháng: "));

let out = input * 0.01 * month;

let result = input+ out;
document.write("Tiền lãi: " + out +"<br>");
document.write("Tổng tiền: " + result);