import { CanActivateFn } from '@angular/router';

import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { SellerService } from './service/seller.service';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private sellerService: SellerService){}
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if(localStorage.getItem('seller')){
      console.log("true1")
      return true;
    }
    console.log('false')
    return false;
  }
}
