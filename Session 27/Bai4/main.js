let array = [];
function inputArray() {
    for (let i = 0; i < 10; i++) {
        let input = prompt("Nhập số: ");
        let num = parseInt(input);
        if (isNaN(num)) {
            console.log(`Không hợp lệ`);
            return;
        }
        array.push(num);
    }
    console.log("Danh sách số nguyên đã nhập:", array);
}
function average() {
    if (array.length === 0) {
        console.log("Không có số");
        return;
    }
    let sum = array.reduce((total, num) => total + num, 0);
    let average = sum / array.length;
    console.log("Trung bình:", average);
}
function lonnhat() {
    let sochan = array.filter((num) => num % 2 === 0);
    if (sochan.length === 0) {
        console.log("Không có số chẵn");
        return;
    }
    let sochanlonnhat = Math.max(...sochan);
    console.log("Số chẵn lớn nhất:", sochanlonnhat);
}
function nhonhat() {
    let sole = array.filter((num) => num % 2 !== 0);
    if (sole.length === 0) {
        console.log("Không có số lẻ");
        return;
    }
    let solenhonhat = Math.min(...sole);
    console.log("Số lẻ nhỏ nhất:", solenhonhat);
}
do {
    choice = parseInt(prompt(`Nhập lựa chọn: `));
    switch (choice) {
        case 1:
            inputArray();
            break;
        case 2:
            average();
            break;
        case 3:
            lonnhat();
            break;
        case 4:
            nhonhat();
            break;
        case 5:
            console.log("Thoát chương trình.");
            break;
        default:
            console.log("Lựa chọn không hợp lệ, vui lòng chọn lại!");
    }
} while (choice !== 5);
