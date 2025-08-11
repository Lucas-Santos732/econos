import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Auth {
  constructor() {}
  login(user: any) {
    return new Promise((resolve) => {
      window.localStorage.setItem('token', 'meu-token');
      resolve(true);
    });
  }
  cadaster(account: any) {
    return new Promise((resolve) => {
      resolve(false);
    });
  }
}
