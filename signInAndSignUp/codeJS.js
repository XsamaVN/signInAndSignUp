// let danhSachTaiKhoan = JSON.parse(localStorage.getItem('taiKhoan')) || [];
let accountDN = document.getElementById('taiKhoanDangNhap').value
let passDN = document.getElementById('taiKhoanDangNhap').value
let accountDK = document.getElementById('taiKhoanDangKy').value;
let passDK = document.getElementById('matKhauDangKy').value;
let rePassDK = document.getElementById('nhapLaiMatKhauDangKy').value;



    let nutDK = document.querySelector("#nutDK");
    nutDK.addEventListener("click", (e) => {
        e.preventDefault();
        if (accountDK === "" || passDK === "" || rePassDK === '') {
            alert("vui lòng không để trống");
        }
        else {

            let user = {
                username: accountDK,
                password: passDK,
            };
            let json = JSON.stringify(user);
            localStorage.setItem(accountDK, json);
            alert("Đăng Ký Thành Công");
            window.location.href = "login.html";
        }
        // if(passDK.value !== rePassDK){
        //     document.getElementById('nhapsai').innerHTML='Mật khẩu nhập lại không khớp'
        // }
    });



        let nutDN = document.querySelector("#phimDN");
        nutDN.addEventListener("click", (e) => {
            e.preventDefault();
            if (accountDN === "" || passDN === "") {
                alert("vui lòng không để trống");
            } else {
                let user = JSON.parse(localStorage.getItem(accountDN));
                if (user.username === accountDN && user.password === passDN) {
                    alert("Đăng Nhập Thành Công");
                    window.location.href = "index.html";
                } else {
                    alert("Đăng Nhập Thất Bại");
                }
            }
        });

