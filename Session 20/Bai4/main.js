let str = prompt("Nhập vào một chuỗi:");
let find = prompt("Nhập ký tự cần tìm:");
let found = false;
for (let i = 0; i < str.length; i++) {
    if (str[i] === find) {
        found = true;
        break;
    }
}
if (found) {
    alert("Tồn tại từ cần tìm kiếm");
} else {
    alert("Không tồn tại từ cần tìm kiếm");
}