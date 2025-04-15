
const users = JSON.parse(localStorage.getItem("users")) || [];
function handleLogin() {
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();

    if (!email || !password) {
        alert('Vui lòng nhập đầy đủ thông tin.');
        return;
    }

    const user = users.find(u => u.email === email && u.password === password);

    if (user) {
        alert('Đăng nhập thành công!');
        window.location.href = 'home.html';
    } else {
        alert('Email hoặc mật khẩu không đúng.');
    }
}