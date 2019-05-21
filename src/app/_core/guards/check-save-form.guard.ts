import { Injectable } from '@angular/core';
import { CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { DangKyComponent } from 'src/app/modules/home/dang-ky/dang-ky.component';

@Injectable({
  providedIn: 'root'
})
export class CheckSaveFormGuard implements CanDeactivate<DangKyComponent> {
  canDeactivate(
    dangKyComponent: DangKyComponent): boolean {
    if (dangKyComponent.saveForm === true) {
      return true;
    }
    const mess = confirm('Bạn chưa lưu thông tin! Bạn có muốn rời khỏi trang ?');
    if (mess === true) {
      return true;
    }
    return false;
  }
}
