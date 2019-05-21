import { Component, OnInit } from '@angular/core';
import { NguoiDungService } from 'src/app/_core/services/nguoi-dung.service';

@Component({
  selector: 'app-dang-nhap',
  templateUrl: './dang-nhap.component.html',
  styleUrls: ['./dang-nhap.component.css']
})
export class DangNhapComponent implements OnInit {

  dsNhom: any[] = [{
    MaNhom: 'GP01',
    TenNhom: 'Nhóm 1'
  }, {
    MaNhom: 'GP02',
    TenNhom: 'Nhóm 2'
  }, {
    MaNhom: 'GP03',
    TenNhom: 'Nhóm 3'
  }];

  constructor(private nguoiDungService: NguoiDungService) { }

  ngOnInit() {
  }
  DangNhap(thongTinDangNhap: any) {
    console.log(thongTinDangNhap);
    this.nguoiDungService.dangNhap(thongTinDangNhap.TaiKhoan, thongTinDangNhap.MatKhau)
      .subscribe((data) => {
        if (typeof data === 'object') {
          // Thành công: Lưu vào localstorage;
          const sUserLogin: string = JSON.stringify(data);
          localStorage.setItem('userLogin', sUserLogin);
        } else {
          alert(data);
        }
      });
  }
}
