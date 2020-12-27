import {Component, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {DomSanitizer} from '@angular/platform-browser';

import {PhotoService} from '../photo/photo.service';
import {UserService} from '../../core/user/user.service';
import {environment} from '../../../environments/environment';
import {User} from '../../core/user/user';
import {SecurityCommonsService} from '../../shared/services/security-commons.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-photo-list',
  templateUrl: './photo-list.component.html',
  styleUrls: ['./photo-list.component.scss']
})
export class PhotoListComponent implements OnInit {

  title = 'App';
  photos = [];
  canLoad = false;
  pendingLoad = false;
  user: User;
  following;
  user_cover_url;
  stoppedRequest: boolean;
  isExplorer: boolean;
  avatarDefault: string = environment.ApiUrl + 'storage/profile_default/default.png';
  html: string;

  constructor(
    private securityCommons: SecurityCommonsService,
    private sanitizer: DomSanitizer,
    private userService: UserService,
    private activatedRoute: ActivatedRoute,
    private photoService: PhotoService
  ) {}

  ngOnInit(): void{
    this.isModuleExplorer();
    this.photos = this.activatedRoute.snapshot.data.photos;
    if (!this.isExplorer){
      this.user = this.activatedRoute.snapshot.data.user;
      this.following = this.activatedRoute.snapshot.data.user?.following;
      this.user_cover_url = this.securityCommons.passSecurityUrl(this.user.user_cover_url);
      this.user.user_avatar_url = this.securityCommons.passSecurityUrl(this.user.user_avatar_url, environment.ApiUrl + 'storage/profile_default/default.png');
    }
  }
  isModuleExplorer(): void{
    if (this.activatedRoute.snapshot.data.isToExplorer){
      this.isExplorer = true;
    }else{
      this.isExplorer = false;
    }
  }
  load(): void{
    if (!this.isExplorer) {
      if (!this.stoppedRequest) {
        this.photoService
          .listFromUserPaginated(this.user.user_name, this.photos.length)
          .subscribe(res => {
            this.stoppedRequest = false;
            if (res && !res.length) {
              this.stoppedRequest = true;
            }
            res.reduce((acc, current) => {
              const x = this.photos.find(item => item.photo_id === current.photo_id);
              if (!x) {
                return this.photos = this.photos.concat(res);
              } else {
                return acc;
              }
            }, []);
          });
      }
    }else{
      this.photoService
        .listFromToExplorerPaginated(this.photos.length)
        .subscribe(res => {
          this.stoppedRequest = false;
          if (res && !res.length) {
            this.stoppedRequest = true;
          }
          res.reduce((acc, current) => {
            const x = this.photos.find(item => item.photo_id === current.photo_id);
            if (!x) {
              return this.photos = this.photos.concat(res);
            } else {
              return acc;
            }
          }, []);
        });
    }
  }
  follow(): void{
    this.photoService.follow( this.user.user_id ).subscribe(follow => {
      this.following = follow;
    });
  }
  redirect(): void{
    alert('pau no toba dos curioso')
  }
  openFollowers(): void{

    this.userService
      .getFollowersByUser()
      .subscribe(
        users => {
          this.html = '';
          users.forEach((user, i) => {
            const url = user.user_avatar_url && user.user_avatar_url.length ? user.user_avatar_url : this.avatarDefault;
            this.html +=  `<div class='row'><div class='col cursor-pointer' onClick="window.location.href = 'user/` + user.user_name + `' "><img class="avatar-alert rounded-circle" src="` + url + `">` + user.user_name.charAt(0).toUpperCase() + user.user_name.slice(1) + `</div></div>`;
          });
          Swal.fire({
            html: this.html,
            showConfirmButton: false,
            showCancelButton: true,
            cancelButtonText: 'Sair'
          });
        }
      );
  }
}
