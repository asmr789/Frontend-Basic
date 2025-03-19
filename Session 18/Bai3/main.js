let username = prompt("Nhập tên: ");

if (username === "ADMIN") {
    let password = prompt("Nhập mk: ");
    if (password === "TheMaster") {
        alert("Welcome");
    } else if (password === null) {
        alert("Cancelled");
    } else {
        alert("Wrong password");
    }
} else if (username === null) {
    alert("Cancelled");
} else {
    alert("I don't know you");
}
