let a = Number(prompt("Nhập a: "));
let b = Number(prompt("Nhập b: "));
let c = Number(prompt("Nhập c: "));
let d = b*b - 4*a*c;
if (d < 0) {
    document.write("Pt vô nghiệm");
}
else if (d == 0) {
    document.write("Pt có nghiệm kép x= " + -b/(2*a));
}
else {
    document.write("Pt có 2no phân biệt: x1= " + (-b + Math.sqrt(d))/(2*a) + " và x2 = " + (-b - Math.sqrt(d))/(2*a));
}