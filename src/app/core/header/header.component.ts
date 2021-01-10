import {Component, Inject, OnChanges, OnInit, PLATFORM_ID, SimpleChanges} from '@angular/core';
import {Observable} from 'rxjs';
import {ActivatedRoute, Router} from '@angular/router';


import {UserService} from '../user/user.service';
import {User} from '../user/user';
import {WindowRefService} from '../nativejs/windowRef.service';
import {isPlatformBrowser} from '@angular/common';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{
  user$: Observable<User>;
  user;
  openSearch: boolean;
  private prevScrollpos;

  constructor(
    @Inject(PLATFORM_ID) private platformId: any,
    private activatedRoute: ActivatedRoute,
    private userService: UserService,
    private router: Router,
    private windowRef: WindowRefService
    ) {
    this.user$ = userService.getUserByToken();
  }
  ngOnInit(): void{
    this.scrollHideHeader();
    this.user$.subscribe(user => this.user = user);
  }
  scrollHideHeader(): void{
    // if (isPlatformBrowser(this.platformId)) {
    //   this.prevScrollpos = this.windowRef.nativeWindow.pageYOffset;
    //   this.windowRef.nativeWindow.onscroll = () => {
    //     const currentScrollPos = this.windowRef.nativeWindow.pageYOffset;
    //     if (this.prevScrollpos > currentScrollPos) {
    //       document.getElementById('navbar-scrool').style.top = '0';
    //     } else {
    //       document.getElementById('navbar-scrool').style.top = '-50px';
    //     }
    //     this.prevScrollpos = currentScrollPos;
    //   };
    // }
  }
  logout(): void{
    this.router.navigate(['']);
    this.userService.logout();
  }
  redirect(): void{
    this.router.navigate(['timeline', this.user.user_name]);
  }
  redirectToProfile(): void{
    this.router.navigate(['user', this.user.user_name]);
  }
  verifiedAccount(): boolean{
    if (this.userService.isLogged() && !this.user.verified){
     return false;
    }
    return true;
  }
  isLogged(): any{
    return this.userService.isLogged();
  }
}
