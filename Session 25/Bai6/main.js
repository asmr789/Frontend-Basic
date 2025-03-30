function daonguoc(aray) {
    let arayDaoNguoc = aray.split('').reverse().join(''); // split tách chuỗi thành từng cái
    return aray === arayDaoNguoc;
}
let arayNhap = prompt("Nhập chuỗi:");
if (daonguoc(arayNhap)) {
    alert("đối xứng!");
} else {
    alert("Không đối xứng!");
}