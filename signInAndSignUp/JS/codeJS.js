
function signUp() {
    let taiKhoanDK = document.getElementById('taiKhoanDangKy').value;
    let matKhauDK = document.getElementById('matKhauDangKy').value;
    let rePassDK = document.getElementById('nhapLaiMatKhauDangKy').value;
    // Kiểm tra xem Local Storage có sẵn không
    if (typeof(Storage) !== "undefined") {
        if(matKhauDK !== rePassDK){
            document.getElementById('nhapsai').innerHTML = 'mật khẩu nhập lại không khớp'
        }
        else {
       if(taiKhoanDK.length < 6 && matKhauDK.length < 6){
           document.getElementById('nhapsai').innerHTML = 'tài khoản mà mật khẩu phải có nhiều hơn 6 ký tự'
       }
       else {
           // Lấy dữ liệu từ Local Storage (nếu có)
           let danhSachTaiKhoan = JSON.parse(localStorage.getItem('danhSachTaiKhoan')) || [];

           // Thêm tài khoản mới vào danh sách
           danhSachTaiKhoan.push({ taiKhoan: taiKhoanDK, matKhau: matKhauDK });

           // Lưu lại danh sách tài khoản vào Local Storage
           localStorage.setItem('danhSachTaiKhoan', JSON.stringify(danhSachTaiKhoan));
           alert('Đăng ký thành công');
           window.location.href = "index.html"
       }
        }
    } else {
        alert("Trình duyệt của bạn không hỗ trợ Local Storage.");
    }

}

function signIn() {
    let taiKhoanDN = document.getElementById('taiKhoanDangNhap').value;
    let matKhauDN = document.getElementById('matKhauDangNhap').value;
    let dangNhapThanhCong = false;
    // Kiểm tra xem Local Storage có sẵn không
    if (typeof(Storage) !== "undefined") {
        if(taiKhoanDN.length < 6 && matKhauDN.length < 6){
                document.getElementById('chuaNhap').innerHTML = 'tài khoản và mật khẩu phải có nhiều hơn 6 ký tự'
            }
            else {
            // Lấy danh sách tài khoản từ Local Storage
            let danhSachTaiKhoan = JSON.parse(localStorage.getItem('danhSachTaiKhoan')) || [];

            // Kiểm tra xem tài khoản và mật khẩu có tồn tại trong danh sách không

            for (let i = 0; i < danhSachTaiKhoan.length; i++) {
                if (danhSachTaiKhoan[i].taiKhoan === taiKhoanDN && danhSachTaiKhoan[i].matKhau === matKhauDN) {
                    dangNhapThanhCong = true;
                    break;
                }
            }
        }


        if (dangNhapThanhCong){
           alert("Đăng nhập thành công!")
            window.location.href = "user.html";
        } else {
            document.getElementById('chuaNhap').innerHTML = "Tài khoản hoặc mật khẩu không đúng.";
        }
        if(taiKhoanDN === 'admin1' && matKhauDN === 'admin1'){
            alert('chào mừng Admin đăng nhập')
            window.location.href = 'home.html'
        }
    } else {
        alert("Trình duyệt của bạn không hỗ trợ Local Storage.");
    }
}

function kiemTraNhap() {
    let taiKhoanDN = document.getElementById('taiKhoanDangNhap').value;
    let matKhauDN = document.getElementById('matKhauDangNhap').value;
    if(taiKhoanDN.length < 6 || matKhauDN.length < 6){
        document.getElementById('chuaNhap').innerHTML = 'tài khoản và mật khẩu phải có nhiều hơn 6 ký tự'
    }
    else if(taiKhoanDN.length === 0 && matKhauDN.length === 0){
        document.getElementById('chuaNhap').innerHTML = '&nbsp;'
    }
    else {
            document.getElementById('chuaNhap').innerHTML = '&nbsp;'
    }
}


