function add(a, b) {
    return a + b;
}
function sub(a, b) {
    return a - b;
}
function mul(a, b) {
    return a * b;
}
function divis(a, b) {
    return a / b;
}
let n = parseInt(prompt(`Nhập a: `));
let n1 = parseInt(prompt(`Nhập b: `));
let choice;
do {
    choice = parseInt(prompt(`Nhập lựa chọn: `))
    switch (choice) {
        case 1:
            console.log(add(n, n1));
            break;
        case 2:
            console.log(sub(n, n1))
            break;
        case 3:
            console.log(mul(n, n1));
            break;
        case 4:
            console.log(divis(n, n1));
            break;
        case 5:
            console.log(`Thoát`);
            break;
        default:
            console.log(`Lựa chọn kh có`);
    }
} while (choice !== 5)
