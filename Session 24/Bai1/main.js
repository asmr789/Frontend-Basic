let array = [];
let choice;
do {
    console.log("1. Nhập mảng: ");
    console.log("2. Hiển thị mảng: ");
    console.log("3. Tìm phần tử lớn nhất và nhỏ nhất: ");
    console.log("4. Tính tổng: ");
    console.log("5. Tìm số lần xuất hiện: ");
    console.log("6. Sắp xếp tăng dần");
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
                if (array.length > 0) {
                    let max = Math.max(...array);
                    let min = Math.min(...array);
                    console.log(`Lớn nhất: ${max}`);
                    console.log(`nhỏ nhất: ${min}`);
                }
                else {
                    console.log(`Có đâu mà tìm`);
                }
                break;
            case 4:
                if ( array.length > 0 ) {
                    let sum = 0;
                    for ( let i = 0 ; i < array.length ; i++) {
                        sum += array[i];
                    }
                    console.log(`Tổng ${sum}`);
                }
                else {
                    console.log(`Không có`);
                }
                break;

            case 5:
                let inputNumber = parseInt(prompt("Nhập số cần tìm: "));
                let count = 0;
                for (let i = 0; i < array.length; i++) {
                    if (array[i] === inputNumber) {
                        count++;
                    }
                }
                if (count > 0) {
                    console.log(`Số ${inputNumber} xuất hiện ${count} lần trong mảng`);
                } else {
                    console.log(`Số ${inputNumber} không tồn tại trong mảng`);
                }
                break;
            case 6:
                for (let i = 0; i < array.length - 1; i++) {
                    for (let j = 0; j < array.length - 1 - i; j++) {
                        if (array[j] > array[j + 1]) {
                            let temp = array[j];
                            array[j] = array[j + 1];
                            array[j + 1] = temp;
                        }
                    }
                }
                console.log("Mảng:", array);
                break;
            case 7:
                console.log("Thoát chương trình.");
                break;
        }
    }
} while (choice !== 7);
