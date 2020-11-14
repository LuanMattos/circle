import {Component} from "@angular/core";
import {Observable} from "rxjs";

import {UserService} from "../user/user.service";
import {User} from "../user/user";
import {Router} from "@angular/router";

@Component({
  selector:'app-header',
  templateUrl:'./header.component.html',
  styleUrls:['./header.component.css']
})
export class HeaderComponent{
  user$:Observable<User>;
  user:User;
  openSearch:boolean;

  constructor(
    private userService:UserService,
    private router:Router
    ) {
    this.user$ = userService.getUser();

  }
  logout(){
    this.router.navigate([''])
    this.userService.logout();
  }
}
