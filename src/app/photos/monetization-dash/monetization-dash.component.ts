import {Component, Input, OnInit} from '@angular/core';
import {User} from '../../core/user/user';
import {environment} from '../../../environments/environment';
import {UserService} from '../../core/user/user.service';
import {Observable} from 'rxjs';

@Component({
  templateUrl: 'monetization-dash.component.html',
  styleUrls: ['./monetization-dash.component.scss'],
})
export class MonetizationDashComponent implements OnInit {
  user$: Observable<User>;
  avatarDefault: string = environment.ApiUrl + 'https://be.mycircle.click/storage/profile_default/default.png';
  constructor(
    private userService: UserService,
  ) {
  }
  ngOnInit(): void {
    this.user$ = this.userService.getUserByToken();
  }
}
