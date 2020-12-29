import {Inject, Injectable} from '@angular/core';
// @ts-ignore
import {LOCAL_STORAGE, WINDOW} from '@ng-toolkit/universal';


const KEY = 'authToken';

@Injectable({providedIn: 'root'})

export class TokenService{
  constructor(
    @Inject(WINDOW) private window: Window,
    @Inject(LOCAL_STORAGE) private localStorage: any
  ) {}


  hasToken(): boolean{
    return !!this.getToken();
  }
  setToken(token): void{
      this.localStorage.setItem(KEY, token);
  }
  getToken(): any{
    return this.localStorage.getItem(KEY);
  }
  removeToken(): void{
    this.localStorage.removeItem(KEY);
  }
}
