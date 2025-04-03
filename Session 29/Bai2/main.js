let products = [
    { id: 1, name: "ABCD", price: 100, category: "Điện tử", quantity: 10 }
];

function addProduct() {
    let id;
    while (true) {
        id = parseInt(prompt("Nhập ID:"), 10);
        if (products.some(product => product.id === id)) {
            alert("ID đã tồn tại");
            continue;
        }
        break;
    }
    let name = prompt("Nhập tên:");
    let price = parseFloat(prompt("Nhập giá:"));
    let category = prompt("Nhập danh mục:");
    let quantity = prompt("Nhập số lượng:");
    products.push({ id, name, price, category, quantity });
    alert("đã thêm");
}

function showProducts() {
    products.forEach(product => {
        console.log(`ID: ${product.id}, Name: ${product.name}, Price: ${product.price}, Category: ${product.category}, Quantity: ${product.quantity}`);
    });
}

function showProductDetails() {
    let id = +prompt("Nhập ID sản phẩm để hiển thị chi tiết:");
    let product = products.find(product => product.id === id);
    if (product) {
        console.log(`ID: ${product.id}, Name: ${product.name}, Price: ${product.price}, Category: ${product.category}, Quantity: ${product.quantity}`);
    } else {
        alert("Không tìm thấy");
    }
}

function updateProduct() {
    let id = +prompt("Nhập ID sản phẩm cần cập nhật:");
    let product = products.find(product => product.id === id);
    if (product) {
        product.name = prompt("Nhập tên mới:") || product.name;
        product.price = parseFloat(prompt("Nhập giá mới:")) || product.price;
        product.category = prompt("Nhập danh mục mới:") || product.category;
        product.quantity = parseInt(prompt("Nhập số lượng mới:"), 10) || product.quantity;
        alert("Đã cập nhật");
    } else {
        alert("Không tìm thấy");
    }
}

function deleteProduct() {
    let id = +prompt("Nhập ID sản phẩm cần xóa:");
    let index = products.findIndex(product => product.id === id);
    if (index !== -1) {
        products.splice(index, 1);
        alert("Đã xóa!");
    } else {
        alert("Không tìm thấy");
    }
}

function filterProductsByPrice() {
    let minPrice = +prompt("Nhập giá thấp nhất:");
    let maxPrice = +prompt("Nhập giá cao nhất:");
    let filteredProducts = products.filter(product => product.price >= minPrice && product.price <= maxPrice);
    if (filteredProducts.length > 0) {
        filteredProducts.forEach(product => {
            console.log(`ID: ${product.id}, Name: ${product.name}, Price: ${product.price}, Category: ${product.category}, Quantity: ${product.quantity}`);
        });
    } else {
        alert("Không có sản phẩm");
    }
}

function menu() {
    let choice;
    do {
        console.log("--------- MENU ---------");
        console.log("1. Thêm sản phẩm.");
        console.log("2. Hiển thị tất cả sản phẩm.");
        console.log("3. Hiển thị chi tiết sản phẩm theo ID.");
        console.log("4. Cập nhật sản phẩm theo ID.");
        console.log("5. Xóa sản phẩm theo ID.");
        console.log("6. Lọc sản phẩm theo khoảng giá.");
        console.log("7. Thoát.");
        console.log("------------------------");
        choice = prompt("Nhập lựa chọn:");
        switch (choice) {
            case "1":
                addProduct();
                break;
            case "2":
                showProducts();
                break;
            case "3":
                showProductDetails();
                break;
            case "4":
                updateProduct();
                break;
            case "5":
                deleteProduct();
                break;
            case "6":
                filterProductsByPrice();
                break;
            case "7":
                alert("Thoát chương trình.");
                break;
            default:
                alert("Lựa chọn không hợp lệ.");
        }
    } while (choice !== "7");
}
menu();
