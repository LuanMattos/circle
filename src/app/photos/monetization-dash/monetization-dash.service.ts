import {HttpClient, HttpEvent, HttpParams} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';

@Injectable({providedIn: 'root'})
export class MonetizationDashService {

  constructor(private http: HttpClient) {}

}

