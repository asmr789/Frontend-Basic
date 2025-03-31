function filterStrings(array) {
    let result = [];
    if (Array.isArray(array)) { // is.array để đảm bảo đầu vào tham số là mảng
        for (let i = 0; i < array.length; i++) {
            if (array[i].length > 5) {
                result.push(array[i]);
            }
        }
        if (result.length === 0) {
            console.log("Mảng không có phần tử nào");
            return;
        }
        return result;
    }
    else {
        console.log("không hợp lệ");
        return;
    }
}
