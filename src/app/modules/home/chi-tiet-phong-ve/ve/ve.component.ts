import { Component, OnInit, Input } from '@angular/core';
import { PhimService } from 'src/app/_core/services/phim.service';

@Component({
  selector: 'app-ve',
  templateUrl: './ve.component.html',
  styleUrls: ['./ve.component.css']
})
export class VeComponent implements OnInit {

  @Input() ve:any = {};
  dangDat:boolean = false;
  constructor(private phimService:PhimService) { }

  datGhe(){
    this.dangDat = !this.dangDat;
    //Tạo ra object output mỗi khi người dùng đặt click vào button ghế
    let gheDuocDat = {
      MaGhe:this.ve.MaGhe,
      GiaVe:this.ve.GiaVe,
      DangDat:this.dangDat
    }
    //Đẩy giá trị vào storeService
    this.phimService.ve.emit(gheDuocDat);
  }


  ngOnInit() {
  }

}
