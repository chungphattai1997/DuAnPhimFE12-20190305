import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NguoiDung } from 'src/app/_core/models/nguoi-dung';
import { NguoiDungService } from 'src/app/_core/services/nguoi-dung.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-dang-ky',
  templateUrl: './dang-ky.component.html',
  styleUrls: ['./dang-ky.component.css']
})
export class DangKyComponent implements OnInit {

  saveForm: Boolean = false;
  mangNguoiDung: NguoiDung[] = [
    new NguoiDung('taikhoan1', 'hoten1', 'matkhau1', '0123123', 'email@gmail.com'),
    new NguoiDung('taikhoan2', 'hoten2', 'matkhau2', '0123124', 'email1@gmail.com'),
    new NguoiDung('taikhoan3', 'hoten3', 'matkhau3', '0123125', 'email2@gmail.com'),
    new NguoiDung('taikhoan4', 'hoten4', 'matkhau4', '0123126', 'email3@gmail.com')];
  constructor(private nguoiDungService: NguoiDungService) { }
  @ViewChild('frmDangKy') frmDangKy: NgForm;
  ngOnInit() {
    // console.log(this.frmDangKy);
  }


  kiemTraMatKhau(reMatKhau: string, matKhau: string): boolean {
    if (reMatKhau !== matKhau) {

      // tạo ra 1 lỗi cho form
      this.frmDangKy.control.setErrors({ 'loiNhapLaiMatKhau': true });
      return true;
    }
    console.log(this.frmDangKy.errors);
    this.frmDangKy.control.setErrors({ 'loiNhapLaiMatKhau': false });
    return false;
  }
  Edit(nguoiDung: NguoiDung) {
    nguoiDung.reMatKhau = nguoiDung.MatKhau;
    this.frmDangKy.setValue(nguoiDung);
    // this.frmDangKy.setValue({
    //     TaiKhoan:nguoiDung.TaiKhoan
    // });
  }
  DangKy(nguoiDung: NguoiDung) {
    nguoiDung.MaNhom = 'GP02';
    nguoiDung.MaLoaiNguoiDung = 'KhachHang';
    this.nguoiDungService.dangKy(nguoiDung).subscribe((data) => {
      if (typeof data === 'object') {
        Swal.fire('Thông báo!', 'Chúc mừng bạn đăng ký thành công!', 'success');
      } else {
        Swal.fire('Thông báo!', data , 'warning');
      }

    });
  }
}
