let numbers = [1,2,3,4,5,6,7];
let input = Number(prompt("Nhập một số:"));
if (numbers.includes(input)) {
    console.log("Bingo");
} else {
    console.log("Chúc bạn may mắn lần sau");
}