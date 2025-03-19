let a = Number(prompt("Nhập a: "));
let b = Number(prompt("Nhập b: "));
let c = prompt("Nhập phép tính (+, -, *, /): ");
let d;

if (c === "+") {
    d = a + b;
}
else if (c === "-") {
    d = a - b;
}
else if (c === "*") {
    d = a * b;
}
else if (c === "/") {
    if (b !== 0) d = a / b;
}

alert("Kết quả là: " + d);
