let array = [];
let row,col;
do {
    console.log("1. Nhập mảng: ");
    console.log("2. Hiển thị mảng: ");
    console.log("3. Tính tổng: ");
    console.log("4. Tìm phần tử lớn nhất và chỉ số: ");
    console.log("5. Tính trung bình cộng: ");
    console.log("6. Đảo ngược: ");
    console.log("7. Thoát chương trình");
    let choice = Number(prompt("Nhập lựa chọn: "));
    switch (choice) {
        case 1:
            row = Number(prompt("Nhập số hàng: "));
            col = Number(prompt("Nhập số cột: "));
            array = []; 
            for (let i = 0; i < row; i++) {
                array[i] = []; 
                for (let j = 0; j < col; j++) {
                    array[i][j] = Number(prompt(`Nhập phần tử [${i}][${j}]: `));
                }
            }
            break;
        case 2:
            console.log("Mảng :", array);
            break;
        case 3:
            let sum = 0;
            for (let i = 0; i < row; i++) {
                for (let j = 0; j < col; j++) {
                    sum += array[i][j];
                }
            }
            console.log(`Tổng mảng: ${sum}`);
            break;
        case 4:
            let max = array[0][0];
            let maxRow = 0, maxCol = 0;
            for (let i = 0; i < row; i++) {
                for (let j = 0; j < col; j++) {
                    if (array[i][j] > max) {
                        max = array[i][j];
                        maxRow = i;
                        maxCol = j;
                    }
                }
            }
            console.log(`Phần tử${max}tại[${maxRow}][${maxCol}]`);
            break;
        case 5:
            let rowIndex = Number(prompt(`Nhập: `));
            if (rowIndex >= 0 && rowIndex < row) {
                let sumRow = 0;
                for (let j = 0; j < col; j++) {
                    sumRow += array[rowIndex][j];
                }
                let avarage = sumRow / col;
                console.log(`Trung bình cộng hàng ${rowIndex}: ${avarage}`);
            } else {
                console.log("Không có hàng");
            }
            break;
        case 6:
            for (let i = 0; i < row; i++) {
                array[i].reverse();
            }
            console.log("Mảng đảo ngược:");
            console.log(array);
            break;
        case 7:
            console.log("Thoát chương trình");
            break;
        default:
            console.log("Không hợp lệ");
    }
} while (choice !== 7);