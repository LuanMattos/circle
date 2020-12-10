import {Injectable} from '@angular/core';
import {TokenService} from '../token/token.service';
import {BehaviorSubject, Observable} from 'rxjs';
import {User} from './user';
import * as jwt_decode from 'jwt-decode';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';

const API  = environment.ApiUrl;

@Injectable({providedIn: 'root'})
export class UserService{

  private userSubject = new BehaviorSubject<User>(null);
  private user = new BehaviorSubject<User>(null);
  private userName: string;
  private verified: boolean;

  constructor(
    private http: HttpClient,
    private tokenService: TokenService) {
    this.tokenService.hasToken() && this.decodeAndNotify();
  }

  setToken( token: string ): void{
    this.tokenService.setToken(token);
    this.decodeAndNotify();
  }
  getUserByToken(): Observable<any>{
    return this.userSubject.asObservable();
  }
  setDataUser( data ): void{
    this.user.next(data);
  }
  getUser(): Observable<User>{
    return this.user.asObservable();
  }

  private decodeAndNotify(): void{
    const token = this.tokenService.getToken();
    const user = jwt_decode(token) as User;

    this.userName = user.user_name;
    this.verified = user.user_code_verification;

    this.userSubject.next(user);

  }

  logout(): void{
    this.tokenService.removeToken();
    this.userSubject.next(null);
  }

  isLogged(): boolean{
    return this.tokenService.hasToken();
  }
  verifiedAccount(): boolean{
    return !this.verified;
  }
  getUserName(): string{
    return this.userName;
  }


  dataUserBasic(userName: string): any{
     return this.http.post<any>(API + 'data_user_basic/' + userName, false);
  }
  saveSettings( data ): Observable<any>{
    return this.http.post(API + 'save_setting', data);
  }
  uploadImgProfile( file: File ): Observable<any>{
    const formData = new FormData();
    formData.append('imageFile', file);

    return this.http.post(API + 'upload_img_profile', formData,
      {
        observe: 'events',
        reportProgress: true
      }
    );
  }
  uploadImgCover(file: File): Observable<any>{
    const formData = new FormData();
    formData.append('imageFile', file);

    return this.http.post(API + 'upload_img_cover', formData,
      {
        observe: 'events',
        reportProgress: true
      }
    );
  }

}
