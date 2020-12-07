import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {ActivatedRoute, Router} from '@angular/router';


import {UserService} from '../user/user.service';
import {User} from '../user/user';

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
    private activatedRoute: ActivatedRoute,
    private userService: UserService,
    private router: Router
    ) {
    this.user$ = userService.getUserByToken();
  }
  ngOnInit(): void{
    this.scrollHideHeader();
    this.user$.subscribe(user => this.user = user);
  }
  scrollHideHeader(): void{
    this.prevScrollpos = window.pageYOffset;
    window.onscroll = () => {
      const currentScrollPos = window.pageYOffset;
      if (this.prevScrollpos > currentScrollPos) {
        document.getElementById('navbar-scrool').style.top = '0';
      } else {
        document.getElementById('navbar-scrool').style.top = '-50px';
      }
      this.prevScrollpos = currentScrollPos;
    };
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
}
