import {AfterViewInit, Component, ElementRef, OnChanges, OnInit, Renderer2, SimpleChanges, ViewChild} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
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
  following;
  user_cover_url;
  stoppedRequest: boolean;
  isExplorer: boolean;
  isTimeline: boolean;
  avatarDefault = environment.ApiUrl + 'storage/profile_default/default.png';
  html: string;
  private prevScrollpos;

  constructor(
    private securityCommons: SecurityCommonsService,
    private sanitizer: DomSanitizer,
    private userService: UserService,
    private activatedRoute: ActivatedRoute,
    private photoService: PhotoService,
    private router: Router
  ) {}

  ngOnInit(): void{
    this.photos = this.activatedRoute.snapshot.data.photos;
    this.isModuleExplorer();
    if (!this.isExplorer && !this.isTimeline){
      this.user = this.activatedRoute.snapshot.data.user;
      this.following = this.activatedRoute.snapshot.data.user?.following;
      this.user_cover_url = this.securityCommons.passSecurityUrl(this.user.user_cover_url);
      this.user.user_avatar_url = this.securityCommons.passSecurityUrl(this.user.user_avatar_url, environment.ApiUrl + 'storage/profile_default/default.png');
    }
  }
  isModuleExplorer(): void{
    this.isExplorer = false;
    this.isTimeline = false;
    if (this.activatedRoute.snapshot.data.isToExplorer){
      this.isExplorer = true;
    }else if (this.activatedRoute.snapshot.data.isTimeline){
      this.isTimeline = true;
    }
  }
  load(): any{
    if (!this.isExplorer && !this.isTimeline) {
      if (!this.stoppedRequest) {
        this.photoService
          .listFromUserPaginated(this.user.user_name, this.photos.length)
          .subscribe(res => {
            this.stoppedRequest = false;
            if (res && !res.length) {
              this.stoppedRequest = true;
            }
            this.pushPhotos( res );
          });
      }
    }else if (this.isTimeline){
      this.photoService
        .listFromTimelinePaginated(this.photos.length)
        .subscribe(res => {
          this.stoppedRequest = false;
          if ( res && !res.length) {
            this.stoppedRequest = true;
          }
          this.pushPhotos( res );
        });
    }else{
      this.photoService
        .listFromToExplorerPaginated(this.photos[this.photos.length - 1].photo_id)
        .subscribe(res => {
          this.stoppedRequest = false;
          // if (res && !res.length) {
          //   this.stoppedRequest = true;
          // }
          this.pushPhotos( res );
        });
    }
  }
  pushPhotos( res ): any{
    function arrayUnique(array): any {
      var a = array;
      for (var i = 0; i < a.length; i++) {
        for (var j = i + 1; j < a.length; j++) {
          if (a[i].photo_id === a[j].photo_id) {
            a.splice(j--, 1);
          }
        }
      }

      return a;
    }
    this.photos = arrayUnique(this.photos.concat(res));
  }
  follow(): void{
    this.photoService.follow( this.user.user_id ).subscribe(follow => {
      this.following = follow;
    });
  }
  openFollowers(): void{
    this.router.navigate(['followers/' + this.user.user_name]);
  }
  openFollowings(): void{
    this.router.navigate(['followings/' + this.user.user_name]);
  }
}

