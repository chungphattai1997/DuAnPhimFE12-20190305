import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuanLyNhanVienComponent } from './quan-ly-nhan-vien/quan-ly-nhan-vien.component';
import { DanhSachNhanVienComponent } from './danh-sach-nhan-vien/danh-sach-nhan-vien.component';
import { ThemMoiNhanVienComponent } from './them-moi-nhan-vien/them-moi-nhan-vien.component';
import { Routes, RouterModule } from '@angular/router';

const nhanVienRoutes: Routes = [
  { path: '', component: QuanLyNhanVienComponent, children: [
    { path: '', component: DanhSachNhanVienComponent },
    { path: 'danhsach', component: DanhSachNhanVienComponent },
    { path: 'themmoi', component: ThemMoiNhanVienComponent }
  ]}
]

@NgModule({
  declarations: [
    QuanLyNhanVienComponent, 
    DanhSachNhanVienComponent, 
    ThemMoiNhanVienComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(nhanVienRoutes)
  ]
})
export class QuanLyNhanVienModule { }
