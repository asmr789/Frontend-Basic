let soTienGui = Number(prompt("Nhập số tiền gửi (VND):"));
let soThangGui = Number(prompt("Nhập số tháng gửi:"));
let laiSuatNam = 4.3;
let laiSuatThang = laiSuatNam / 12 / 100;
let tienLai = soTienGui * laiSuatThang * soThangGui;
document.write("Tiền lãi là: " + tienlai);
