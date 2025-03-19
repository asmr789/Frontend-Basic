let n = Number(prompt("Nhập số năm: "));

if( n < 1 ) {
    document.write("Mới vào nghề");
}
else if( n > 6 ) {
    document.write("Quản lý");
}
else if( n > 1 && n < 3 ) {
    document.write("Nhân viên có kinh nghiệm");
}
else if( n > 4 && n < 6 ) {
    document.write("Chuyên viên");
}