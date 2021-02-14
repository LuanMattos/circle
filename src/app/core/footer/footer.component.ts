import {Component, OnInit} from '@angular/core';
import {UserService} from '../user/user.service';
import {Observable} from 'rxjs';
import {User} from '../user/user';
import {HeaderService} from '../header/header.service';
import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
})
export class FooterComponent implements OnInit{

  user$: Observable<User>;
  showFillerLogged;
  constructor(
    private userService: UserService,
    public headerService: HeaderService,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.user$ = this.userService.getUserByToken();
  }
  closeDialog(): void {
    this.showFillerLogged = false;
    this.headerService.setCurrentSession('');
    this.dialog.closeAll();
  }
}
