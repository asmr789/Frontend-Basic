let input1 = prompt("Nhập 1: ");
let input2 = prompt("Nhập 2: ");
let date1 = new Date(input1);
let date2 = new Date(input2);
let diff = date2 - date1;
document.write("Độ lệch: " + diff/(1000*60*60*24));