import { state } from '@angular/animations';
import { Injectable, inject } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateFn, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/servicios/core/auth.service';

  Injectable({
  providedIn: 'root'
})
export const authGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  return authService.getAuthToken();
}
export class AuthGuard implements CanActivate {
  
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return true;
  }
  ;
}
