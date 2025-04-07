let books = [
    { id: 1, name: "abcd", price: 10000, quantity: 10, category: "Lập trình" },

]
let cart = [];

function showBooksByCategory() {
    let category = prompt("Nhập thể loại:");
    let filtered = books.filter(b => b.category.toLowerCase() === category.toLowerCase());
    if (filtered.length === 0) {
        alert("Không có sách trong thể loại này.");
        return;
    }
    let result = `Sách thể loại "${category}":\n`;
    filtered.forEach(b => result += `${b.id}. ${b.name} - ${b.price}đ - SL: ${b.quantity}\n`);
    alert(result);
}
function addBook() {
    let id = Number(prompt("Nhập ID sách:"));
    if (books.some(b => b.id === id)) {
        alert("ID đã tồn tại.");
        return;
    }
    let name = prompt("Tên sách:");
    let price = Number(prompt("Giá sách:"));
    let quantity = Number(prompt("Số lượng:"));
    let category = prompt("Thể loại:");
    books.push({ id, name, price, quantity, category });
    alert("Đã thêm sách mới.");
}

function searchBook() {
    let keyword = prompt("Nhập tên hoặc ID sách cần tìm:");
    let found = books.filter(b =>
        b.name.toLowerCase().includes(keyword.toLowerCase()) || b.id === Number(keyword)
    );
    if (found.length === 0) {
        alert("Không tìm thấy sách.");
        return;
    }
    let result = "Kết quả tìm kiếm:\n";
    found.forEach(b => result += `${b.id}. ${b.name} - ${b.price}đ - SL: ${b.quantity}\n`);
    alert(result);
}

function buyBook() {
    let id = Number(prompt("Nhập ID sách muốn mua:"));
    let qty = Number(prompt("Nhập số lượng cần mua:"));
    let book = books.find(b => b.id === id);
    if (!book) {
        alert("Không tìm thấy sách.");
        return;
    }
    if (qty <= 0 || qty > book.quantity) {
        alert("Số lượng không hợp lệ.");
        return;
    }
    book.quantity -= qty;
    cart.push({ id: book.id, name: book.name, price: book.price, quantity: qty });
    alert(`Đã mua ${qty} cuốn "${book.name}".`);
}

function sortBooks() {
    let order = prompt("Sắp xếp theo giá: nhập 'asc' (tăng dần) hoặc 'desc' (giảm dần):");
    let sorted = [...books];
    sorted.sort((a, b) => order === "asc" ? a.price - b.price : b.price - a.price);
    let result = `Sách theo giá (${order}):\n`;
    sorted.forEach(b => result += `${b.name} - ${b.price}đ\n`);
    alert(result);
}

function calcCart() {
    let totalQty = 0;
    let totalPrice = 0;
    cart.forEach(item => {
        totalQty += item.quantity;
        totalPrice += item.quantity * item.price;
    });
    alert(`Tổng số sách đã mua: ${totalQty}\nTổng tiền: ${totalPrice}đ`);
}

function totalStock() {
    let total = books.reduce((sum, b) => sum + b.quantity, 0);
    alert(`Tổng số sách trong kho: ${total}`);
}

let choice;
do {
    console.log("-----------------------------------------");
    console.log("1. Hiển thị sách");
    console.log("2. Thêm sách");
    console.log("3. Tìm sách theo tên hoặc ID");
    console.log("4. Mua sách");
    console.log("5. Sắp xếp sách theo giá");
    console.log("6. Xem giỏ hàng và tổng tiền");
    console.log("7. Xem tổng số sách");
    console.log("8. Thoát");
    console.log("Nhập lựa chọn của bạn:");    
    choice = prompt("Nhập lựa chọn:");
    switch (choice) {
        case "1":
            showBooksByCategory();
            break;
        case "2":
            addBook();
            break;
        case "3":
            searchBook();
            break;
        case "4":
            buyBook();
            break;
        case "5":
            sortBooks();
            break;
        case "6":
            calcCart();
            break;
        case "7":
            totalStock();
            break;
        case "8":
            alert("Đã thoát chương trình.");
            break;
        default:
            alert(" Vui lòng nhập số từ 0 đến 8.");
    }
} while (choice !== "8");