let n = Number(prompt("Nhập một: ")); 
if (number < 0) {
    alert("Nhập lại");
} else {
    let a = n; 
    let b = n.split('').reverse().join(''); 
    if (a === b) {
        alert("Số bạn nhập là số đối xứng!");
    } else {
        alert("Số bạn nhập không phải là số đối xứng!");
    }
}
