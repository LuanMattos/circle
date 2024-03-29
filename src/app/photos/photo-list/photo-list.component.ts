import {AfterViewInit, Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

import {PhotoService} from '../photo/photo.service';
import {environment} from '../../../environments/environment';
import {User} from '../../core/user/user';

@Component({
  selector: 'app-photo-list',
  templateUrl: './photo-list.component.html',
  styleUrls: ['./photo-list.component.scss']
})
export class PhotoListComponent implements OnInit, AfterViewInit {

  title = 'App';
  photos = [];
  canLoad = false;
  pendingLoad = false;
  user: User;
  following;
  stoppedRequest: boolean;
  isExplorer: boolean;
  isTimeline: boolean;
  avatarDefault = environment.ApiUrl + 'storage/profile_default/default.png';
  html: string;
  repeat = [];

  constructor(
    private activatedRoute: ActivatedRoute,
    private photoService: PhotoService
  ) {}

  ngOnInit(): void{
    this.isModuleExplorer();
    this.photos = this.activatedRoute.snapshot.data.photos;
    this.user = this.activatedRoute.snapshot.data.user;
    this.following = this.activatedRoute.snapshot.data.user?.following;
  }
  ngAfterViewInit(): void{
    // Trocar toda funcao de scroll por carregamento lento
    // const observerPhotoList = new IntersectionObserver((entries) => {
    //   entries.forEach(entry => {
    //     const {isIntersecting, intersectionRatio} = entry;
    //     if (isIntersecting || intersectionRatio > 0 ) {
    //     }else{
    //       // observador.unobserve(entry.target);
    //     }
    //   });
    // }, {
    //   threshold: [0, 1],
    //   rootMargin: '0px'
    // });
    // observerPhotoList.observe(  document.querySelector('.photos'));
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
      this.repeat = [...new Set(this.repeat)]
      this.photoService
        .listFromToExplorerPaginated(this.photos[this.photos.length - 1].photo_id, this.repeat)
        .subscribe(res => {
          this.stoppedRequest = false;
          this.pushPhotos( res );
        });
    }
  }
  pushPhotos( res ): any{
    var self = this;
    function arrayUnique(array): any {
      var a = array;
      for (var i = 0; i < a.length; i++) {
        for (var j = i + 1; j < a.length; j++) {
          if (a[i].photo_id === a[j].photo_id) {
              self.repeat.push(a[i].photo_id.toString());
            a.splice(j--, 1);
          }
        }
      }

      return a;
    }
    this.photos = arrayUnique(this.photos.concat(res));
  }
}

