let math = Number(prompt("Nhập điểm Toán: "));
let english = Number(prompt("Nhập điểm Anh: "));
let literature = Number(prompt("Nhập điểm Văn: "));
let average = (math + english + literature) / 3;

if (average >= 8.0) {
    document.write("Giỏi");
}
else if (average > 6.4 && average < 7.9) {
    document.write("Khá");
}
else if (average >= 5.0 && average < 6.3) {
    document.write("Trung bình");
}
else {
    document.write("cook");
}