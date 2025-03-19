let a = Number(prompt("Nhập a: "));
let b = Number(prompt("Nhập b: "));
let c = Number(prompt("Nhập c: "));

if (a + b > c && a + c > b && b + c > a) {
    console.log("Hợp lệ.");
    if (a === b && b === c) {
        console.log("Tam giác đều.");
    } else if (a === b || b === c || a === c) {
        console.log("Tam giác cân.");
    } else if (a * a + b * b === c * c || a * a + c * c === b * b || b * b + c * c === a * a) {
        console.log("Tam giác vuông.");
    } else {
        console.log("Tam giác thường.");
    }
} else {
    console.log("Không hợp lệ.");
}
