let array = [];
let choice;
do {
    console.log("1. Nhập mảng: ");
    console.log("2. Hiển thị mảng: ");
    console.log("3. Tìm chẵn lẻ: ");
    console.log("4. Tính trung bình cộng: ");
    console.log("5. Xóa phần tử vị trí: ");
    console.log("6. Tìm phần tử lớn thứ 2: ");
    console.log("7. Thoát");
    choice = Number(prompt("Nhập lựa chọn: "));
    if (choice < 1 || choice > 7) {
        console.log("Nhập 1 đến 7.");
    } else {
        switch (choice) {
            case 1:
                let n = Number(prompt("Nhập số lượng: "));
                if (n > 0) {
                    array = [];
                    for (let i = 0; i < n; i++) {
                        let num = Number(prompt(`Nhập ${i + 1}: `));
                        array.push(num);
                    }
                } else {
                    console.log("Lớn hơn 0.");
                }
                break;
            case 2:
                console.log("Mảng:", array);
                break;
            case 3:
                let chan = [];
                let le = [];
                for (let i = 0; i < array.length; i++) {
                    if ( array[i] % 2 === 0) {
                        chan.push(array[i])
                    }
                    else {
                        le.push(array[i])
                    }
                }
                break;
            case 4:
                if ( array.length > 0 ) {
                    let sum = 0;
                    let avarege = 0;
                    for ( let i = 0 ; i < array.length ; i++) {
                        sum += array[i];
                    }
                    avarege = sum / array.length;
                    console.log(`Tổng ${sum}`);
                }
                else {
                    console.log(`Không có`);
                }
                break;
            case 5:
                let deleteIndex = parseInt(prompt(`Nhập vị trí xóa: `));
                if (deleteIndex >= 0 && deleteIndex < array.length) {
                    for (let i = deleteIndex; i < array.length - 1; i++) {
                        array[i] = array[i + 1];
                    }
                    array.pop();
                } else {
                    console.log("không hợp lệ");
                }
                break;
            case 6:
                    if (array.length < 2) {
                        console.log("Mảng cần ít nhất 2 phần tử.");
                    } else {
                        if (array.length < 2) {
                            console.log("Không có phần tử lớn thứ hai.");
                        } else {
                            let max1 = Math.max(...array);
                            array.splice(array.indexOf(max1), 1);
                            let max2 = Math.max(...array);
                            console.log(`Phần tử lớn thứ hai: ${max2}`);
                        }
                    }
                break;
            case 7:
                console.log("Thoát chương trình.");
                break;
        }
    }
} while (choice !== 7);
