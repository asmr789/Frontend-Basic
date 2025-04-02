let num = {
  width: 10,
  height: 5,
  getArea: function () {
    return this.width * this.height;
  }
}
let dientich = num.getArea();
console.log(`Diện tích hình chữ nhật là: ${dientich}`);
