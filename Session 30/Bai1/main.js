let products = [
    {
        id: 1,
        name: "men mén",
        price: 200000,
        quantity: 20,
        category: "Món ăn dân tộc Mông"
    },
    {
        id: 2,
        name: "mứt",
        price: 80000,
        quantity: 21,
        category: "Món ăn dân tộc Kinh"
    },
    {
        id: 3,
        name: "cơm lam",
        price: 40000,
        quantity: 15,
        category: "Món ăn dân tộc Mông"
    },
    {
        id: 4,
        name: "bánh đậu xanh",
        price: 60000,
        quantity: 30,
        category: "Món ăn dân tộc Kinh"
    }
]
let cart = [];

function showProducts() {
    console.log("DANH SÁCH SẢN PHẨM:");
    products.forEach(product => {
        console.log(`${product.id}. ${product.name} - ${product.price}đ - SL: ${product.quantity}`);
    });
}

function buyProduct(productId, quantity) {
    let product = products.find(p => p.id === productId);
    if (!product) {
        console.log("Sản phẩm không có trong cửa hàng.");
        return;
    }
    if (product.quantity < quantity || quantity <= 0) {
        console.log("Số lượng không hợp lệ hoặc không đủ hàng.");
        return;
    }

    product.quantity -= quantity;
    cart.push({
        id: product.id,
        name: product.name,
        price: product.price,
        quantity: quantity
    });
    console.log(`Đã thêm ${quantity} sản phẩm "${product.name}" vào giỏ hàng.`);
}

function sortProducts(order = "asc") {
    let sorted = [...products];
    sorted.sort((a, b) => order === "asc" ? a.price - b.price : b.price - a.price);
    console.log(`Sản phẩm sắp xếp theo giá (${order === "asc" ? "Tăng dần" : "Giảm dần"}):`);
    sorted.forEach(p => {
        console.log(`${p.name}: ${p.price}đ`);
    });
}

function tong() {
    let total = 0;
    cart.forEach(item => {
        total += item.price * item.quantity;
    });
    console.log(`Tổng tiền: ${total}đ`);
}
let choice;
do {
    console.log("---------------------------------------------------");
    console.log("1. Hiển thị sản phẩm theo danh mục");
    console.log("2. Chọn sản phẩm để mua");
    console.log("3. Sắp xếp sản phẩm theo giá");
    console.log("4. Tính tổng tiền trong giỏ hàng");
    console.log("5. Thoát");
    choice = prompt("Chọn chức năng: ");

    switch (choice) {
        case '1':
            showProducts();
            break;
        case '2':
            let productId = parseInt(prompt("Nhập ID sản phẩm muốn mua: "));
            let quantity = parseInt(prompt("Nhập số lượng sản phẩm muốn mua: "));
            buyProduct(productId, quantity);
            break;
        case '3':
            let order = prompt("Sắp xếp giá theo (asc: tăng dần, desc: giảm dần): ");
            sortProducts(order);
            break;
        case '4':
            tong();
            break;
        case '5':
            console.log("Thoát chương trình.");
            break;
        default:
            console.log("Lựa chọn không hợp lệ. Vui lòng chọn lại.");
            break;
    }
} while (choice !== '5');
