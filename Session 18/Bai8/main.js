let a = Number(prompt("Nhập a: "));
let b = Number(prompt("Nhập b: "));
let c = Number(prompt("Nhập c: "));

if (a + b > c && a + c > b && b + c > a) {
    document.write("Hợp lệ.");
    if (a === b && b === c) {
        document.write("Tam giác đều.");
    } else if (a === b || b === c || a === c) {
        document.write("Tam giác cân.");
    } else if (a * a + b * b === c * c || a * a + c * c === b * b || b * b + c * c === a * a) {
        document.write("Tam giác vuông.");
    } else {
        document.write("Tam giác thường.");
    }
} else {
    document.write("Không hợp lệ.");
}
