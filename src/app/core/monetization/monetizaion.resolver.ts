import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {MonetizationDashService} from '../../photos/monetization-dash/monetization-dash.service';

@Injectable({providedIn: 'root'})

export class MonetizaionResolver implements Resolve<Observable<any>>{

  constructor(private router: Router, private monetizationServiceDash: MonetizationDashService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any>{
      return this.monetizationServiceDash.getDataDashboard();
  }
}
