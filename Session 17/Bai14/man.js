let a = Number(prompt("Nhập bán kính:"));
let b = Number(prompt("Nhập chiều cao:"));
let chuVi = 2 * 3.14 * a;
let XungQuanh = 2 * 3.14 * a * b;
let ToanPhan = XungQuanh + 2 * 3.14 * a * a;
let theTich = 3.14 * a * a * b;

document.write("Chu vi: " + chuVi + "<br>");
document.write("Diện tích xung quanh: " + XungQuanh + "<br>");
document.write("Diện tích toàn phần: " + ToanPhan + "<br>");
document.write("Thể tích: " + theTich );
