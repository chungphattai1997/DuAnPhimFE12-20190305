import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PhimService } from 'src/app/_core/services/phim.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-chi-tiet-phong-ve',
  templateUrl: './chi-tiet-phong-ve.component.html',
  styleUrls: ['./chi-tiet-phong-ve.component.css']
})
export class ChiTietPhongVeComponent implements OnInit {

  constructor(private atvRoute: ActivatedRoute, private phimService: PhimService) { }
  danhSachVe: any[] = [];
  danhSachGheDaDat: any[] = []; //Mảng chứa các ghế mà khách hàng đặt
  maLichChieu: any = 0;
  //ve:any = {};
  ngOnInit() {
    this.atvRoute.params.subscribe((thamso) => {
      this.maLichChieu = thamso.id; //Lấy thông tin mã lịch chiếu từ URL thông qua đối tượng ActivatedRoute
      this.LayChiTietPhongVe(thamso.id);
    });

    this.phimService.ve.subscribe((gheDangDat: any) => {

      //ghế được lấy từ mỗi lần hàm emit chạy
      //Nếu thuộc tính DangDat == true thì push vào mảng ghedadat
      if (gheDangDat.DangDat) {
        this.danhSachGheDaDat.push(gheDangDat);
      } else {
        //Ngược lại DangDat = false tìm và xóa ghế đó trong mảng danhSachGheDaDat
        for (let i = 0; i < this.danhSachGheDaDat.length; i++) {
          if (gheDangDat.MaGhe == this.danhSachGheDaDat[i].MaGhe) {
            this.danhSachGheDaDat.splice(i, 1);
          }
        }
      }

    })

  }

  LayChiTietPhongVe(maLichChieu: number) {
    this.phimService.layThongTinPhongVe(maLichChieu).subscribe((data: any) => {
      if (typeof data == 'object') {
        console.log(data);
        this.danhSachVe = data.DanhSachGhe;
      }
    })
  }

  datVe() {
    //Object đưa về backend (Lưu ý: Đúng định dạng model Backend cung cấp)
    let taiKhoanNguoiDung = '';
    if (localStorage.getItem('userLogin')) {
      const userLogin: any = JSON.parse(localStorage.getItem('userLogin'));
      taiKhoanNguoiDung = userLogin.TaiKhoan;
    }
    if (taiKhoanNguoiDung != '' && this.danhSachGheDaDat.length > 0) {
      let thongTinDatVe: any = {
        "MaLichChieu": this.maLichChieu,
        "TaiKhoanNguoiDung": taiKhoanNguoiDung,
        "DanhSachVe": this.danhSachGheDaDat
      }
      this.phimService.DatVe(thongTinDatVe).subscribe((data) => {
        if (typeof data == 'string') {
          Swal.fire('Thông báo', 'Chúc mừng bạn dặt vé thành công!', 'success').then(() => {
            location.reload();
          })
        }

      })
    } else {
      Swal.fire('Thông báo', 'Bạn chưa chọn ghế', 'warning');
    }

  }


}
