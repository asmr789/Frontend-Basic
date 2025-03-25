let input = prompt("Nhập số:");
let value = true;
for (let i = 0; i < input.length; i++) {
    if (input[i] < '0' || input[i] > '9') {
        value = false;
        break;
    }
}
if (value) {
    let max = input[0];
    for (let i = 1; i < input.length; i++) {
        if (input[i] > max) {
            max = input[i];
        }
    }
    console.log(max + " là số lớn nhất");
} else {
    console.log("không hợp lệ");
}
