let a = prompt("Nhập tiền: ");
document.write(Number(a).toLocaleString("vi-VN", { style: "currency", currency: "VND" }));