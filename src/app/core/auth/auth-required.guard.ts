import {Injectable} from '@angular/core';
import {ActivatedRoute, CanActivate, Router} from '@angular/router';

import {UserService} from '../user/user.service';

@Injectable({providedIn: 'root'})
export class AuthRequiredGuard implements CanActivate{
  constructor(
    private router: Router,
    private userService: UserService,
    private activatedRoute: ActivatedRoute
  ) {}

  canActivate(){
    if (!this.userService.isLogged()){
      this.router.navigate(['']);
      return false;
    }else if ( !this.userService.verifiedAccount() ){
      this.userService
        .getUserByToken()
        .subscribe(user => {
          const userName = user?.user_name;
          this.router.navigate(['confirmation', userName]);
      });
      return true;
    }
    return true;
  }
}
