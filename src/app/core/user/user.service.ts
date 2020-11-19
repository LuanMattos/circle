import {Injectable} from "@angular/core";
import {TokenService} from "../token/token.service";
import {BehaviorSubject} from "rxjs";
import {User} from "./user";
import * as jwt_decode from 'jwt-decode';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';

const API  = environment.ApiUrl;

@Injectable({providedIn:'root'})
export class UserService{

  private userSubject = new BehaviorSubject<User>(null);
  private user = new BehaviorSubject<User>(null);
  private userName:string;

  constructor(
    private http:HttpClient,
    private tokenService:TokenService) {
    this.tokenService.hasToken() && this.decodeAndNotify()
  }

  setToken(token:string){
    this.tokenService.setToken(token)
    this.decodeAndNotify()
  }
  getUserByToken(){
    return this.userSubject.asObservable();
  }
  setDataUser( data ){
    this.user.next(data);
  }
  getUser(){
    return this.user.asObservable();
  }

  private decodeAndNotify(){
    const token = this.tokenService.getToken();
    const user = jwt_decode(token) as User;

    this.userName = user.user_name;

    this.userSubject.next(user);

  }

  logout(){
    this.tokenService.removeToken();
    this.userSubject.next(null);
  }

  isLogged(){
    return this.tokenService.hasToken();
  }
  getUserName(){
    return this.userName;
  }


  dataUserBasic(){
     return this.http.post<any>(API + 'data_user_basic',false);
  }
  saveSettings( data ){
    return this.http.post(API + 'save_setting',data);
  }
  uploadImgProfile(file:File){
    const formData = new FormData();
    formData.append('imageFile',file);

    return this.http.post(API + 'upload_img_profile', formData,
      {
        observe:"events",
        reportProgress:true
      }
    )
  }
  uploadImgCover(file:File){
    const formData = new FormData();
    formData.append('imageFile',file);

    return this.http.post(API + 'upload_img_cover', formData,
      {
        observe:"events",
        reportProgress:true
      }
    )
  }

}
