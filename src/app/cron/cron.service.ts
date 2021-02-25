import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';

const API  = environment.ApiUrl;

@Injectable({providedIn: 'root'})
export class CronService{
  constructor(
    private http: HttpClient,
  ) {
  }
  sendEmailLembreteZero(): Observable<any>{
    return this.http.post(API + 'send_email_lembrete', {});
  }

}
