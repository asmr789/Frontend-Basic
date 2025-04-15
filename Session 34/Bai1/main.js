document.getElementById("registerForm").addEventListener("submit", function(e) {
    e.preventDefault();
  
    const inputValue = document.getElementById("email").value.trim();
    const inputPassword = document.getElementById("password").value.trim();
    const confirmPassword = document.getElementById("confirm").value.trim();
  
    if (!inputValue || !inputPassword || !confirmPassword) {
      alert("Vui lòng nhập đầy đủ thông tin.");
      return;
    }
  
    if (inputPassword !== confirmPassword) {
      alert("Mật khẩu xác nhận không khớp.");
      return;
    }
  
    const users = JSON.parse(localStorage.getItem("users")) || [];
  
    const isExist = users.some(user => user.email === inputValue);
    if (isExist) {
      alert("Email đã tồn tại!");
      return;
    }
  
    const newUser = {
      email: inputValue,
      password: inputPassword
    };
  
    users.push(newUser);
    localStorage.setItem("users", JSON.stringify(users));
    alert("Đăng ký thành công!");
  });
  