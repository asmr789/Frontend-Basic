function demSo(mang) {
    let dem = 0;
    for (let i = 0; i < mang.length; i++) {
        if (mang[i] > 0) {
            dem++;
        }
    }
    if (dem === 0) {
        return "không có số nguyên dương";
    } else {
        return dem;
    }
}
console.log(demSo([4, 5.4, 6, -2]));
console.log(demSo([1, 2, 5, 7, -8, 6]));
console.log(demSo([1.2, -3, -6]));