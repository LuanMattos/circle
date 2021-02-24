import {HttpClient, HttpEvent, HttpParams} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {environment} from '../../../environments/environment';

const API  = environment.ApiUrl;

@Injectable({providedIn: 'root'})
export class MonetizationDashService {

  constructor(private http: HttpClient) {}
  sendInvite(data): Observable<any>{
    return this.http.post(API + 'save_invite', {data});
  }
  confirmInvite(userName): Observable<any>{
    return this.http.post(API + 'confirm_money', {userName});
  }
  getDataDashboard(): Observable<any>{
    return this.http.post(API + 'get_data_dashboard', {});
  }
}

