import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CheckLoginGuard implements CanActivate {
  constructor(private router: Router) {

  }
  canActivate() {

    if (localStorage.getItem('userLogin')) {
      return true;
    }
    alert('Bạn chưa đăng nhập !');
    this.router.navigate(['/dangnhap']);
    return false;


  }
}
