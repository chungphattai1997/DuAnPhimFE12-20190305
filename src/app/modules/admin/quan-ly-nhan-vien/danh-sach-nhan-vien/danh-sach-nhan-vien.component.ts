import { Component, OnInit } from '@angular/core';
import { NhanVien } from 'src/app/_core/models/nhan-vien';
import { NhanVienService } from 'src/app/_core/services/nhan-vien.service';

@Component({
  selector: 'app-danh-sach-nhan-vien',
  templateUrl: './danh-sach-nhan-vien.component.html',
  styleUrls: ['./danh-sach-nhan-vien.component.css']
})
export class DanhSachNhanVienComponent implements OnInit {

  public dsNhanVien: NhanVien[] = [];

  constructor(private nhanVienService: NhanVienService) { }

  ngOnInit() {
    this.nhanVienService.layDanhSachNhanVien().subscribe(
      (data) => {
        this.dsNhanVien = data;
      }
    );    
  }

}
