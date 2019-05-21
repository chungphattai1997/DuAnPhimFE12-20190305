import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PhimService } from 'src/app/_core/services/phim.service';
import { Title } from '@angular/platform-browser';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-chitietphim',
  templateUrl: './chitietphim.component.html',
  styleUrls: ['./chitietphim.component.css']
})
export class ChitietphimComponent implements OnInit, OnDestroy {

  subParam: Subscription;
  phim: any = {};
  constructor(private atvRoute: ActivatedRoute, private phimService: PhimService, private title: Title) { }

  ngOnInit() {
    // //Thông qua đối tượng activateRoute => Lấy param (tham số) từ url
    // this.atvRoute.params.subscribe((thamso) =>{
    //   this.LayThongTinPhim(thamso.id);
    //   // console.log(thamso.id);
    // })

    this.subParam = this.atvRoute.queryParams.subscribe((thamso) => {
      this.LayThongTinPhim(thamso.MaPhim);
      this.title.setTitle(thamso.TenPhim);
    });
  }

  LayThongTinPhim(maPhim) {
    // Lấy thông tin phim từ service
    this.phimService.layThongTinPhim(maPhim).subscribe((data) => {
      console.log(data);
      this.phim = data;
    });
  }
  ngOnDestroy(): void {
    if (this.subParam) {
      this.subParam.unsubscribe();
    }
  }
}
