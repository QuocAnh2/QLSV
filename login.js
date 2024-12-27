// Hiển thị mật khẩu
document.getElementById("show-pass1").addEventListener("change", function () {
    const passwordInput = document.getElementById("password");
    passwordInput.type = this.checked ? "text" : "password";
});

// Tài khoản admin
const adminAccount = { username: "Admin", password: "1" };

// Hàm đăng nhập
function login() {
    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();
    const error = document.getElementById("error");

//Kiểm tra nếu thấy bỏ trống phần nhập liệu
if (!username || !password) {
        error.textContent="Vui lòng nhập đầy đủ thông tin tên đăng nhập và mật khẩu";
        return;
}


    // Lấy danh sách tài khoản từ localStorage
    const accounts = JSON.parse(localStorage.getItem("accounts")) || [];
    accounts.push(adminAccount); // Đảm bảo admin luôn có mặt trong danh sách

    // Kiểm tra thông tin đăng nhập
    const user = accounts.find(acc => acc.username === username && acc.password === password);

    if (user) {
        if (user.username === "Admin") {
            alert("Đăng nhập thành công với quyền Admin!");
        } else {
            alert("Đăng nhập thành công!");
        }
        window.location.href = "Home.html"; // Chuyển đến trang chính
    } else {
        error.textContent = "Tài khoản hoặc mật khẩu của bạn không chính xác.";
        document.getElementById("username").value = "";
        document.getElementById("password").value = "";
    }
}
