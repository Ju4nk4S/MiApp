import { Injectable } from '@angular/core';
import { get } from 'http';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() {}
  getAuthToken(): Observable<boolean>{
    return of(true);
    }
   
}
function getAuthToken() {
  throw new Error('Function not implemented.');
}

