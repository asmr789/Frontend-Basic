let contacts = [{id: 1, name: "Nguyễn A", email: "abcd1234@gmail.com", numberPhone: "03232165465"}];

function addContact() {
    let id;
    while (true) {
        id = +prompt("Nhập id:")
        if (contacts.some(contact => contact.id === id)) {
            alert("ID đã tồn tại");
            continue;
        }
        break;
    }
    let name = prompt("Nhập tên: ");
    let email = prompt("Nhập email: ");
    let numberPhone = prompt("Nhập số điện thoại: ");
    contacts.push({id, name, email, numberPhone});
    alert("Đã thêm");
}

function showContacts() {
    contacts.forEach(contact => {
        console.log(`ID: ${contact.id}, Name: ${contact.name}, Email: ${contact.email}, Phone: ${contact.numberPhone}`);
    });
}

function findContact() {
    let findphone = prompt("Nhập số điện thoại: ");
    let contact = contacts.find(contact => contact.numberPhone === findphone);
    if (contact) {
        alert(`Thông tin: ID: ${contact.id}, Name: ${contact.name}, Email: ${contact.email}, Phone: ${contact.numberPhone}`);
    } else {
        alert("Không thấy");
    }
}

function updateContact() {
    let updateID= +prompt("Nhập id:");
    let contact = contacts.find(contact => contact.id === updateID);
    if (contact) {
        contact.name = prompt("Cập nhật tên: ") || contact.name;
        contact.email = prompt("Cập nhật email: ") || contact.email;
        contact.numberPhone = prompt("Cập nhật số điện thoại: ") || contact.numberPhone;
        alert("Đã cập nhật ");
    } else {
        alert("Không tìm thấy");
    }
}

function deleteContact() {
    let deleteID = +prompt("Nhập id");
    let index = contacts.findIndex(contact => contact.id === deleteID);
    if (index !== -1) {
        contacts.splice(index, 1);
        alert("Đã xóa liên hệ.");
    } else {
        alert("Không tìm thấy");
    }
}

function menu() {
    let choice;
    do {
        console.log("------------------------------------");
        console.log("1. Thêm đối tượng Contact vào danh sách liên hệ.");
        console.log("2. Hiển thị danh sách danh bạ.");
        console.log("3. Tìm kiếm thông tin Contact theo số điện thoại.");
        console.log("4. Cập nhật thông tin Contact(name, email, phone) theo id.");
        console.log("5. Xóa một đối tượng Contact khỏi danh sách danh bạ theo id.");
        console.log("6. Thoát.");
        console.log("------------------------------------");
        choice = prompt("Nhập lựa chọn:");
        switch (choice) {
            case "1":
                addContact();
                break;
            case "2":
                showContacts();
                break;
            case "3":
                findContact();
                break;
            case "4":
                updateContact();
                break;
            case "5":
                deleteContact();
                break;
            case "6":
                alert("Thoát.");
                break;
            default:
                alert("Không có lựa chọn hợp lệ.");
        }
    } while (choice !== "6");
}

menu();
