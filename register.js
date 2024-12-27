document.getElementById('registrationForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Ngăn reload trang

    const username = document.getElementById('input_acc').value.trim();
    const password = document.getElementById('input_pass').value.trim();
    const confirmPassword = document.getElementById('input_agPass').value.trim();
    const error = document.getElementById('registrationErro');
    
    //Kiểm tra nếu thấy bỏ trống phần nhập liệu
    if(!username || ! password || !confirmPassword)  {
        erro.textContent = "Vui lòng điền đầy đủ thông tin";
        return;
    }

    // Kiểm tra mật khẩu khớp
    if (password !== confirmPassword) {
        alert("Mật khẩu không khớp. Vui lòng kiểm tra lại!");
        return;
    }

    // Lấy danh sách tài khoản hiện tại từ localStorage
    const accounts = JSON.parse(localStorage.getItem('accounts')) || [];

    // Kiểm tra tài khoản trùng
    if (accounts.find(acc => acc.username === username)) {
        alert("Tài khoản đã tồn tại. Vui lòng chọn tên khác!");
        return;
    }
    

    // Thêm tài khoản mới vào mảng
    accounts.push({ username, password });

    // Lưu lại mảng vào localStorage
    localStorage.setItem('accounts', JSON.stringify(accounts));

    alert("Đăng ký thành công!");
    window.location.href = "Login.html";
});
