//! Tính thuế thu nhập cá nhân
function tinhThue(){
   let name = document.getElementById('name').value;
   let kqBai1 = document.getElementById('result1');
   let tongThuNhap = Number(document.getElementById('thunhap').value);
   let soNgPhuThuoc = Number(document.getElementById('people').value);
   let thuNhapChiuThue = thuNhapCT(tongThuNhap,soNgPhuThuoc) / (1e+6);
   let result = 0;
   if(thuNhapChiuThue <= 50 && thuNhapChiuThue > 0){
    result = 0.05;
   }else if(thuNhapChiuThue <= 120){
    result = 0.1;
   }else if(thuNhapChiuThue <= 210){
    result = 0.15;
   }else if(thuNhapChiuThue <= 384){
    result = 0.2;
   }else if(thuNhapChiuThue <= 624){
    result = 0.25;
   }else if(thuNhapChiuThue <= 960){
    result = 0.3;
   }else{
    result = 0.35;
   }
   kqBai1.innerHTML = 'Thuế thu nhập cá nhân '+name+' phải trả theo quy định là: '
                    + (thuNhapChiuThue*result*(1e+6)).toLocaleString() + ' VND'
}   
function thuNhapCT(tong,soNg){
    return tong - (4e+6) - soNg*(1.6e+6)
}
//! Tính tiền cap
function addDisabled(){
    if((document.getElementById('loaiKH').value) == 'nhadan'){
        document.getElementById('sokn').setAttribute('disabled','true');
    }else{
        document.getElementById('sokn').removeAttribute('disabled')
    }
}
function tinhTienCap(){
    let maKH = document.getElementById('mkh').value;
    let loaiKH = document.getElementById('loaiKH').value;
    let soKetNoi = Number(document.getElementById('sokn').value);
    let soKenh = Number(document.getElementById('sokenh').value);
    let phiThueKenh = thueKenhCaoCap(loaiKH,soKenh);
    let PXL = 0;
    let PDV = 0;
//----------------------------------------------------------------->
    if(loaiKH == '' || maKH == ''){
        alert('Yêu cầu nhập đầy đủ thông tin !');
    }else if(loaiKH == 'nhadan'){
        PXL = 4.5;
        PDV = 20.5;
        loaiKH = 'Nhà dân'
    }else if(loaiKH == 'doanhnghiep'){
        PXL = 15;
        PDV = 75 + soKetNoi*5;
        loaiKH = 'Doanh Nghiệp'
    }
    let tongTien = PXL + PDV + phiThueKenh;
    document.getElementById('makh').innerHTML = maKH;
    document.getElementById('loaikh').innerHTML = loaiKH;
    document.getElementById('phixuli').innerHTML = PXL + '$';
    document.getElementById('phidv').innerHTML = PDV + '$'
    document.getElementById('thuekenh').innerHTML = phiThueKenh + '$'
    document.getElementById('tongtien').innerHTML = tongTien + '$';
}
function thueKenhCaoCap(kh,sk){
    if(kh == ''){
        return 0;
    }else if(kh == 'nhadan'){
        return 7.5 * sk;
    }else{
        return 50 * sk;
    }
}