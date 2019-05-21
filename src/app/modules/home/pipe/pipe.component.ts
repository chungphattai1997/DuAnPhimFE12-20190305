import { Component, OnInit } from '@angular/core';
import { NguoiDung } from 'src/app/_core/models/nguoi-dung';

@Component({
  selector: 'app-pipe',
  templateUrl: './pipe.component.html',
  styleUrls: ['./pipe.component.css']
})
export class PipeComponent implements OnInit {

  title:string = 'CYberSOFT';
  ngay:Date = new Date();
  tien:number = 100000000000;
  dola:number = 9.4546;
  phanTram:number = 0.87;
  nguoiDung:NguoiDung = new NguoiDung('taikhoan1', 'hoten1', 'matkhau1', '0123123', 'email@gmail.com');
  constructor() { }

  ngOnInit() {
  }

}
