let numbers = [];
for (let i = 0; i < 10; i++) {
  let num = Number(prompt(`Nhập số ${i + 1}:`));
  numbers.push(num);
}
let count = 0;
for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] > 10) {
    console.log(`${numbers[i]}`);
    count++;
  }
}
if (count === 0) {
  console.log(`Không có số lớn hơn 10`);
}
