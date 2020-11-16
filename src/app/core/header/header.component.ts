import {Component, OnInit} from '@angular/core';
import {Observable} from "rxjs";

import {UserService} from "../user/user.service";
import {User} from "../user/user";
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector:'app-header',
  templateUrl:'./header.component.html',
  styleUrls:['./header.component.css']
})
export class HeaderComponent implements OnInit{
  user$:Observable<User>;
  user;
  openSearch:boolean;

  constructor(
    private activatedRoute:ActivatedRoute,
    private userService:UserService,
    private router:Router
    ) {
    this.user$ = userService.getUser();
  }
  ngOnInit():void{
    this.user$.subscribe(user=>this.user = user);
  }
  logout(){
    this.router.navigate([''])
    this.userService.logout();
  }
  redirect(){
    this.router.navigate(['timeline', this.user.user_name])
  }
  redirectToProfile(){
    this.router.navigate(['user', this.user.user_name])
  }
}
