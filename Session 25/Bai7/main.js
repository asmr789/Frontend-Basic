function vietHoaChuDau(chuoi) {
    let cacTu = chuoi.split(' ');
    for (let i = 0; i < cacTu.length; i++) {
        if (cacTu[i].length > 0) {
            cacTu[i] = cacTu[i][0].toUpperCase() + cacTu[i].substring(1).toLowerCase();
        }
    }
    return cacTu.join(' ');
}
console.log(vietHoaChuDau("hello WORLD"));
console.log(vietHoaChuDau("HKKei acaDEMy"));