import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminTemplateComponent } from './admin-template/admin-template.component';
import { QuanLyPhimComponent } from './quan-ly-phim/quan-ly-phim.component';
import { QuanNguoiDungComponent } from './quan-nguoi-dung/quan-nguoi-dung.component';
import { Routes, RouterModule } from '@angular/router';
import { QuanLyNhanVienModule } from './quan-ly-nhan-vien/quan-ly-nhan-vien.module';

const adminRoutes:Routes =[ 
  {path:'',component:AdminTemplateComponent,children:[
    { path:'quanlyphim',component:QuanLyPhimComponent },
    { path:'quanlynguoidung',component:QuanNguoiDungComponent },
    { path: 'quanlynhanvien', loadChildren: () => QuanLyNhanVienModule }
  ]
}
]


@NgModule({
  declarations: [AdminTemplateComponent, QuanLyPhimComponent, QuanNguoiDungComponent],
  imports: [
    CommonModule,RouterModule.forChild(adminRoutes)
  ]
})
export class AdminModule { }
