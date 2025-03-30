function timsochan(array) {
    let number = [];
    for (let i = 0; i < array.length; i++) {
      if (array[i] % 2 === 0) {
        number.push(array[i]);
      }
    }
    return number;
  }
  let numbers = [1, 2, 3, 4, 5, 6, 7, 8];
  console.log(timsochan(numbers));
  