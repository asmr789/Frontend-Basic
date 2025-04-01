function dientichtron(r) {
    return Math.PI * r * r;
}
function chuvitron(r) {
    return 2 * Math.PI * r;
}
function dientichnhat(a, b) {
    return a * b;
}
function chuvinhat(a, b) {
    return 2 * (a + b);
}
let choice;
do {
    choice = parseInt(prompt(`Nhập lựa chọn: `));
    switch (choice) {
        case 1:
            let r1 = parseFloat(prompt("Nhập bán kính: "));
            console.log("Diện tích:", areaCircle(r1));
            break;
        case 2:
            let r2 = parseFloat(prompt("Nhập bán kính: "));
            console.log("Chu vi: ", circumferenceCircle(r2));
            break;
        case 3:
            let a1 = parseFloat(prompt("Nhập chiều dài: "));
            let b1 = parseFloat(prompt("Nhập chiều rộng: "));
            console.log("Diện tích: ", areaRectangle(a1, b1));
            break;
        case 4:
            let a2 = parseFloat(prompt("Nhập chiều dài: "));
            let b2 = parseFloat(prompt("Nhập chiều rộng: "));
            console.log("Chu vi: ", perimeterRectangle(a2, b2));
            break;
        case 5:
            console.log("Thoát ");
            break;
        default:
            console.log("Lựa chọn không có");
    }
} while (choice !== 5);
