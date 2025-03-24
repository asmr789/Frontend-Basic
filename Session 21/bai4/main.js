let a=Number(prompt("Nhập a: "));
let b=Number(prompt("Nhập b: "));
let c=Number(prompt("Nhập c: "));

let result = b*b - 4*a*c;
if ( result < 0) {
    document.write("Phương trình vô nghiệm");
}
else if ( result === 0) {
    let x1= -b / 2*a;
    document.write ("phương trình có nghiệm kép x1=x2= " +x1)
}
else {
    let x3 = -b - Math.sqrt(result) /2*a;
    let x2 = -b + Math.sqrt(result) /2*a;
    document.write("Phương trình có 2 nghiệm kép x1= " + x2 +" và x2= " +x3);
}