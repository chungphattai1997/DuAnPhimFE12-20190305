import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeTemplateComponent } from './home-template/home-template.component';
import { TrangChuComponent } from './trang-chu/trang-chu.component';
import { DanhSachPhimComponent } from './danh-sach-phim/danh-sach-phim.component';
import { LienHeComponent } from './lien-he/lien-he.component';
import { Routes, RouterModule } from '@angular/router';
import { QuanLyPhimComponent } from '../admin/quan-ly-phim/quan-ly-phim.component';
import { ChitietphimComponent } from './chitietphim/chitietphim.component';
import { DangNhapComponent } from './dang-nhap/dang-nhap.component';
import { FormsModule } from '@angular/forms';
import { DangKyComponent } from './dang-ky/dang-ky.component';
import { PipeComponent } from './pipe/pipe.component';
import { PipeModule } from 'src/app/_core/pipe/pipe/pipe.module';
import { CheckSaveFormGuard } from 'src/app/_core/guards/check-save-form.guard';
import { ChiTietPhongVeComponent } from './chi-tiet-phong-ve/chi-tiet-phong-ve.component';
import { CheckLoginGuard } from 'src/app/_core/guards/check-login.guard';
import { VeComponent } from './chi-tiet-phong-ve/ve/ve.component';
const homeRoute: Routes = [
  {
    path: '', component: HomeTemplateComponent, children: [
      { path: '', component: QuanLyPhimComponent },
      { path: 'trangchu', component: QuanLyPhimComponent },
      { path: 'danhsachphim', component: QuanLyPhimComponent },
      { path: 'lienhe', component: LienHeComponent },
      { path: 'chitiet/:id', component: ChitietphimComponent },
      { path: 'chitietphim', component: ChitietphimComponent },
      { path: 'dangnhap', component: DangNhapComponent },
      { path: 'dangky', component: DangKyComponent, canDeactivate: [CheckSaveFormGuard] },
      { path: 'pipe', component: PipeComponent },
      { path: 'chitietphongve/:id', component: ChiTietPhongVeComponent, canActivate: [CheckLoginGuard]}
    ]
  }];
@NgModule({
  declarations: [HomeTemplateComponent,
    TrangChuComponent,
    DanhSachPhimComponent,
    LienHeComponent,
    QuanLyPhimComponent,
    ChitietphimComponent,
    DangNhapComponent,
    DangKyComponent,
    PipeComponent,
    ChiTietPhongVeComponent,
    VeComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(homeRoute),
    FormsModule,
    PipeModule
  ]
})
export class HomeModule { }
