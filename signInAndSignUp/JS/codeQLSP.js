let danhSachSanPham = JSON.parse(localStorage.getItem('x'))|| [];

function list() {
    let str = '<h1>Danh sách sản phẩm</h1>';
    str += `<p>Số lượng sản phẩm: ${danhSachSanPham.length} </p>`;
    for (let i = 0; i < danhSachSanPham.length; i++) {
        str += `<h4>${danhSachSanPham[i].sanpham}  <button onclick="sua(${i})">Sửa</button> <button onclick="xoa(${i})">Xóa</button></h4>`
    }
    document.getElementById('hienThi').innerHTML = str;
}

function listMember() {
    let str = '<h1>Danh sách sản phẩm</h1>';
    str += `<p>Số lượng sản phẩm: ${danhSachSanPham.length} </p>`;
    for (let i = 0; i < danhSachSanPham.length; i++) {
        str += `<h4>${danhSachSanPham[i].sanpham}`
    }
    document.getElementById('hienThi').innerHTML = str;
}
function them() {
    document.getElementById('hienThi').innerHTML = '<input id="nhap"> <button onclick="taoMoi()">Tạo mới</button>';

}

function taoMoi() {

    let sanPham = document.getElementById('nhap').value
    // Thêm tài khoản mới vào danh sách
    danhSachSanPham.push({sanpham: sanPham});
    // Lưu lại danh sách tài khoản vào Local Storage
    localStorage.setItem('x',JSON.stringify(danhSachSanPham));
    list();
}

function sua(i) {
    document.getElementById('hienThi').innerHTML = `<input  id="nhap" value = "${danhSachSanPham[i].sanpham}"> <button onclick="luu(${i})">Lưu</button>`;
}

function luu(i) {
    danhSachSanPham[i].sanpham = document.getElementById('nhap').value;
    localStorage.setItem('x',JSON.stringify(danhSachSanPham));
    list();
}

function xoa(i) {
    danhSachSanPham.splice(i,1);
    localStorage.setItem('x',JSON.stringify(danhSachSanPham));
    list();
}

function tim() {
    let str = '<input  id="timKiem" oninput="search()">' //<button onclick="search()">Tìm</button>
    document.getElementById('hienThi').innerHTML = str + '<div id="hienThi2"></div>';
}

function search() {
    let giaTri = document.getElementById('timKiem').value
    let dem = 0
    let search = []
    for (let i = 0; i < danhSachSanPham.length; i++) {
        let kiemTra = danhSachSanPham[i].sanpham.includes(giaTri)
        if (kiemTra) {
            dem++
            search.push(danhSachSanPham[i].sanpham)
        }
    }
    if (dem !== 0) {
        document.getElementById('hienThi2').innerHTML = 'Các sản phẩm tìm thấy: <br>' + search.join('<br>')
    } else {
        document.getElementById('hienThi2').innerHTML = 'không tìm thấy sản phẩm nào'
    }
}
