let num = Number(prompt("Nhập số: "));
let hunderd = Math.floor(num / 100);
let ten = Math.floor((num % 100) / 10);
let unit = num % 10;
let result = (hunderd * hunderd * hunderd) + (ten * ten * ten) + ( unit * unit * unit);
if ( result === num ) {
    document.write("Là số amrstrong");
}
else {
    document.write("Không phải");
}
