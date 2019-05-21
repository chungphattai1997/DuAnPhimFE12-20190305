import { Injectable } from '@angular/core';
import { NhanVien } from '../models/nhan-vien';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NhanVienService {

  private dsNhanVien: NhanVien[] = [
    { MaNV: 1, TenNV: 'Nguyễn Văn A', Tuoi: 22 },
    { MaNV: 2, TenNV: 'Nguyễn Văn B', Tuoi: 23 },
    { MaNV: 3, TenNV: 'Nguyễn Văn C', Tuoi: 24 },
    { MaNV: 4, TenNV: 'Nguyễn Văn D', Tuoi: 25 },
  ];

  constructor() { }

  // Lấy danhsa sách nhân viên trả về component
  public layDanhSachNhanVien(): Observable<NhanVien[]> {
    return of(this.dsNhanVien);
  }

  // Thêm nhân viên mới vào mảng từ component gửi lên
  public themNhanVien(nhanVien: NhanVien): void {
    this.dsNhanVien.push(nhanVien);
  }

}
