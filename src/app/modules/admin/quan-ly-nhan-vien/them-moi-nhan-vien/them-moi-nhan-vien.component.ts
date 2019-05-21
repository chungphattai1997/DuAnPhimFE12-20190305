import { Component, OnInit } from '@angular/core';
import { NhanVien } from 'src/app/_core/models/nhan-vien';
import { NhanVienService } from 'src/app/_core/services/nhan-vien.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-them-moi-nhan-vien',
  templateUrl: './them-moi-nhan-vien.component.html',
  styleUrls: ['./them-moi-nhan-vien.component.css']
})
export class ThemMoiNhanVienComponent implements OnInit {

  constructor(
    private nhanVienService: NhanVienService,
    private location: Location
    ) { }

  ngOnInit() {
  }

  ThemNhanVien(maNhanVien: number, tenNhanVien: string, tuoi: number): void {

      let nhanVien: NhanVien = { 
        MaNV: maNhanVien, 
        TenNV: tenNhanVien, 
        Tuoi: tuoi 
      };
      
      // Gửi nhân viên lên service để thêm vào mảng
      this.nhanVienService.themNhanVien(nhanVien);
      // Quay lại trang trước đó
      this.location.back();
  }

}
