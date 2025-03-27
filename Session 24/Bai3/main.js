let array = [];
let choice;
do {
    console.log("1. Nhập mảng: ");
    console.log("2. Hiển thị mảng: ");
    console.log("3. Tìm phần tử lớn nhất và in ra vị trí: ");
    console.log("4. Tính tổng và trung bình cộng số dương: ");
    console.log("5. Đỏa ngược mảng: ");
    console.log("6. Kiểm tra mảng đối xứng: ");
    console.log("7. Thoát");
    choice = Number(prompt("Nhập lựa chọn: "));
    if (choice < 1 || choice > 7) {
        console.log("Nhập 1 đến 7");
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
                    console.log("Lớn hơn 0");
                }
                break;
            case 2:
                console.log("Mảng:", array);
                break;
            case 3:
                let max = Math.max(...array);
                for ( let i = 0 ; i < array.length; i++ ) {
                    if ( array[i] === max ) {
                        console.log(`Phần tử lớn nhất ${max} nằm ở vị trí ${i +1}`);
                    }
                }
                break;
            case 4:
                let count = [];
                let sum = 0;
                let average = 0;
                for (let i = 0; i < array.length; i++) {
                    if (array[i] > 0) {
                        count.push(array[i]);
                    }
                }
                if (count.length > 0) {
                    for (let i = 0; i < count.length; i++) {
                        sum += count[i];
                    }
                    average = sum / count.length;
                    console.log(`Tổng: ${sum}`);
                    console.log(`Trung bình cộng: ${average}`);
                } else {
                    console.log("Không có số dương");
                }
                break;
            case 5:
                array.reverse();
                console.log("Mảng đảo ngược:", array);
                break;
            case 6:
                let doixung = true;

                for (let i = 0; i < array.length / 2; i++) {
                    if (array[i] !== array[array.length - 1 - i]) {
                        doixung = false;
                        break;
                    }
                }
                if (doixung) {
                    console.log("Mảng đối xứng");
                } else {
                    console.log("Không đối xứng");
                }
                break;
            case 7:
                console.log("Thoát chương trình.");
                break;
        }
    }
} while (choice !== 7);
