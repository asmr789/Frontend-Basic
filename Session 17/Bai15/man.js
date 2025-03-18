let a = Number(prompt("Nhập bán kính:"));
let chuVi = 2 * 3.14 * a;
let dienTich = 4 * 3.14 * a * a;
let theTich = (4 / 3) * 3.14 * a * a * a;

document.write("Chu vi lớn nhất: " + chuVi + "<br>");
document.write("Diện tích bề mặt:" + dienTich+ "<br>");
document.write("Thể tích hình cầu: " + theTich +"<br>");
