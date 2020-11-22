import {Component, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {DomSanitizer} from '@angular/platform-browser';

import {PhotoService} from '../photo/photo.service';
import {UserService} from '../../core/user/user.service';
import {environment} from '../../../environments/environment';
import {User} from '../../core/user/user';
import {SecurityCommonsService} from '../../shared/services/security-commons.service';


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
  setLength = 0;
  following;

  constructor(
    private securityCommons: SecurityCommonsService,
    private sanitizer: DomSanitizer,
    private userService: UserService,
    private activatedRoute: ActivatedRoute,
    private photoService: PhotoService
  ) {}

  ngOnInit(): void{
    this.user = this.activatedRoute.snapshot.data.user;
    this.following = this.activatedRoute.snapshot.data.user?.following;
    this.photos = this.activatedRoute.snapshot.data.photos;

    this.user.user_cover_url = this.securityCommons.passSecurityUrl(this.user.user_cover_url);
    this.user.user_avatar_url = this.securityCommons.passSecurityUrl(this.user.user_avatar_url, environment.ApiUrl + 'storage/profile_default/default.png');

  }
  load(): void{

   if ( this.photos.length > this.setLength ) {

     this.photoService
       .listFromUserPaginated(this.user.user_name, this.photos.length)
       .toPromise()
       .then(res => {
         this.setLength = this.photos.length;
         this.photos = this.photos.concat(res);
       });
   }
  }
  follow(): void{
    this.photoService.follow( this.user.user_id ).subscribe(follow => {
      this.following = follow;
      // follow ? this.following = 'Seguindo' : this.following = 'Seguir';
    });
  }
}
