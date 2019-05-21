import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { NguoiDung } from '../models/nguoi-dung';
@Injectable({
  providedIn: 'root'
})
export class NguoiDungService {

  constructor(private http: HttpClient) { }

  public dangNhap(taiKhoan: string, matKhau: string): Observable<any> {
    const linkApi = `http://sv2.myclass.vn/api/QuanLyNguoiDung/DangNhap?taikhoan=${taiKhoan}&matkhau=${matKhau}`;
    const header: Headers = new Headers(); // Cho biết định dạng dữ liệu truyền đi
    header.append('Content-Type', 'application/json;charset=UTF-8');
    const observable = this.http.post(linkApi, null);
    return observable;
  }

  public dangKy(nguoiDung: NguoiDung): Observable<any> {
    const linkApi = `http://sv2.myclass.vn/api/QuanLyNguoiDung/ThemNguoiDung`;
    const header: HttpHeaders = new HttpHeaders(); // Cho biết định dạng dữ liệu truyền đi
    header.append('Content-Type', 'application/json;charset=UTF-8');
    const observable = this.http.post(linkApi, nguoiDung, { headers: header });
    return observable;
  }
}
