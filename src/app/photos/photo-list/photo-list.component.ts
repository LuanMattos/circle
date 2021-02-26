import {AfterViewInit, Component, ElementRef, OnChanges, OnInit, Renderer2, SimpleChanges, ViewChild} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {DomSanitizer} from '@angular/platform-browser';

import {PhotoService} from '../photo/photo.service';
import {UserService} from '../../core/user/user.service';
import {environment} from '../../../environments/environment';
import {User} from '../../core/user/user';
import {SecurityCommonsService} from '../../shared/services/security-commons.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

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
  user_cover_url;
  stoppedRequest: boolean;
  isExplorer: boolean;
  isTimeline: boolean;
  avatarDefault = environment.ApiUrl + 'storage/profile_default/default.png';
  html: string;
  private prevScrollpos;
  // Video
  // controls     = document.querySelector('.controls');
  @ViewChild('controls') controls: any;
  controlsDivWidth;
  controlsClassList;
  controlsRemoveClassListActive;
  // fileChooser  = document.querySelector('.file-chooser');
  @ViewChild('fileChooser') fileChooser: any;
  // fullscreen   = document.querySelector('.fullscreen-button');
  @ViewChild('fullscreen') fullscreen: any;
  // playButton   = document.querySelector('.play');
  @ViewChild('playButton') playButton: any;
  // player       = document.querySelector('.player');
  @ViewChild('player') player: any;
  divPlayerOffsetWidth;
  divPlayerOffsetHeight;
  // speedSelect  = document.querySelector('select');
  @ViewChild('speedSelect') speedSelect: any;
  timeCounter  = document.querySelector('time');
  // timeBar      = document.querySelector('.time-bar');
  @ViewChild('timeBar') timeBar: any;
  // video        = document.querySelector('video');
  @ViewChild('divVideo') divVideo: any;
  divVideoOffsetHeight;
  divVideoOffsetWidth;
  divVideoWidth;
  divVideoHeight;
  divVideoMarginTop;
  divVideoStyle;
  divVideoPaused;
  divVideoReadyState;
  // volumeSlider = document.querySelector('.volume-bar');
  @ViewChild('volumeSlider') volumeSlider: any;
  isMouseDown     = false;
  timeTotal       = 0;
  uiTimeout;
  videoStatus     = 'paused';

  ngAfterViewInit(): void {
    // this.divVideoReadyState = this.divVideo.nativeElement.readyState;
    // this.divVideoPaused = this.divVideo.nativeElement.paused;
    // this.divVideoStyle = this.divVideo.nativeElement.style;
    // this.controlsClassList = this.controls.nativeElement.classList;
    // this.controlsRemoveClassListActive = this.controls.nativeElement.classList.remove('active');
    // this.divVideoOffsetHeight = this.divVideo.nativeElement.offsetHeight;
    // this.divVideoOffsetWidth = this.divVideo.nativeElement.divVideoOffsetWidth;
    // this.controlsDivWidth = this.controls.nativeElement.style.width;
    // this.divPlayerOffsetWidth = this.player.nativeElement.offsetWidth;
    // this.divPlayerOffsetHeight = this.player.nativeElement.offsetHeight;
    // this.divVideoWidth = this.divVideo.nativeElement.style.width;
    // this.divVideoHeight = this.divVideo.nativeElement.style.height;
    // this.divVideoMarginTop = this.divVideo.nativeElement.style.marginTop;
    // this.controls.nativeElement.addEventListener('mousemove', () => { this.showUI(); this.hideUI(); });
    // this.controls.nativeElement.addEventListener('mouseout', this.hideUI);
    // this.fileChooser.nativeElement.addEventListener('change', this.selectVideoFile);
    // this.fullscreen.nativeElement.addEventListener('click', this.toggleFullScreen);
    // this.playButton.nativeElement.addEventListener('click', this.playVideo);
    // this.player.nativeElement.addEventListener('fullscreenchange', this.setVideoSize);
    // this.player.nativeElement.addEventListener('msfullscreenchange', this.setVideoSize);
    // this.speedSelect.nativeElement.addEventListener('click', () => {
    //   this.divVideo.playbackRate = this.speedSelect.value;
    // });
    // this.timeBar.nativeElement.addEventListener('change', this.updatetimeBar);
    // this.timeBar.nativeElement.addEventListener('mousemove', this.updatetimeBar);
    // this.divVideo.nativeElement.addEventListener('mouseup', this.playVideo);
    // this.divVideo.nativeElement.addEventListener('touchend', this.playVideo);
    // this.divVideo.nativeElement.addEventListener('loadedmetadata', this.setVideoData);
    // this.divVideo.nativeElement.addEventListener('play', this.updatePlayState);
    // this.divVideo.nativeElement.addEventListener('pause', this.updatePlayState);
    // this.divVideo.nativeElement.addEventListener('timeupdate', this.updateCurrentTime);
    // this.divVideo.nativeElement.addEventListener('mouseout', this.hideUI);
    // this.divVideo.nativeElement.addEventListener('dblclick', this.toggleFullScreen);
    // this.divVideo.nativeElement.addEventListener('mousemove', () => { this.showUI(); this.hideUI(); });
    // this.volumeSlider.nativeElement.addEventListener('change', this.adjustVolume);
    // this.volumeSlider.nativeElement.addEventListener('mousemove', this.adjustVolume);
    // this.volumeSlider.nativeElement.addEventListener('wheel', this.adjustVolume);
    // this.controls.nativeElement.childNodes.forEach(control => control.addEventListener('mousedown', this.onMouseDown));
    // this.controls.nativeElement.childNodes.forEach(control => control.addEventListener('mouseup', this.onMouseUp));
    // this.controls.nativeElement.childNodes.forEach(control => control.addEventListener('touchstart', this.onMouseDown));
    // this.controls.nativeElement.childNodes.forEach(control => control.addEventListener('touchend', this.onMouseUp));
  }

  // updatetimeBar = (e) => {
  //   if (!this.isMouseDown && e.type === 'mousemove') {
  //     return;
  //   }
  //   const timebara = this.timeBar.value;
  //
  //   this.divVideo.currentTime = { '':this.timebara };
  //   if (!this.isMouseDown) {
  //     return;
  //   }
  //
  //   this.divVideo.pause();
  //   this.showUI();
  //   this.hideUI();
  // }

  constructor(
    private securityCommons: SecurityCommonsService,
    private sanitizer: DomSanitizer,
    private userService: UserService,
    private activatedRoute: ActivatedRoute,
    private photoService: PhotoService,
    private router: Router,
    // Video
    private el: ElementRef,
    private render: Renderer2
  ) {}

  ngOnInit(): void{
    this.photos = this.activatedRoute.snapshot.data.photos;
    this.isModuleExplorer();
    if (!this.isExplorer && !this.isTimeline){
      this.user = this.activatedRoute.snapshot.data.user;
      this.following = this.activatedRoute.snapshot.data.user?.following;
      this.user_cover_url = this.securityCommons.passSecurityUrl(this.user.user_cover_url);
      this.user.user_avatar_url = this.securityCommons.passSecurityUrl(this.user.user_avatar_url, environment.ApiUrl + 'storage/profile_default/default.png');


      // Video
      // this.setVideoData();
      // window.addEventListener('keydown', this.onKeyDown);
      // window.addEventListener('keyup', this.hideUI);
      // window.addEventListener('resize', this.setVideoSize);
      // window.addEventListener('mouseup', this.onMouseUp);

    }
  }
  // updateCurrentTime(): void {
  //   let seconds = Math.floor(this.divVideo.currentTime % 60);
  //   let minutes = Math.floor(this.divVideo.currentTime / 60);
  //   seconds = seconds >= 10 ? seconds : '0' + seconds;
  //   this.timeCounter.innerText = `${minutes}:${seconds} / ${this.timeTotal}`;
  //   if (this.isMouseDown) {
  //     return;
  //   }
  //
  //   this.timeBar.value = this.divVideo.currentTime;
  // }
  // playVideo(e): void {
  //   e.preventDefault();
  //   if ( !(this.divVideoReadyState >= 2) ) {
  //     return;
  //   }
  //
  //   if (this.divVideoPaused) {
  //     this.divVideo.play();
  //     this.videoStatus = 'playing';
  //   } else {
  //     this.divVideo.pause();
  //     this.videoStatus = 'paused';
  //   }
  // }
  // onKeyDown(e): void {
  //   switch (e.key) {
  //     case 'ArrowLeft':
  //     case 'ArrowRight':
  //       this.skip(e);
  //       break;
  //     case 'ArrowUp':
  //     case 'ArrowDown':
  //       this.adjustVolume(e);
  //       break;
  //     case ' ':
  //       this.playVideo(e);
  //       break;
  //   }
  //   this.showUI();
  // }
  // showUI(): any {
  //   if (this.uiTimeout) {
  //     clearTimeout( this.uiTimeout );
  //   }
  //   this.controlsClassList.add('active');
  //   this.divVideoStyle.cursor = 'default';
  // }
  // hideUI(): any {
  //   if (this.uiTimeout) {
  //     clearTimeout( this.uiTimeout );
  //   }
  //   // aqui
  //   if (this.divVideoPaused) { return; }
  //
  //   this.uiTimeout = setTimeout(() => {
  //     this.controlsRemoveClassListActive;
  //     setTimeout(() => this.divVideo.style.cursor = 'none', 1000);
  //   }, 2000);
  // }
  // onMouseDown(): void {
  //   this.isMouseDown = true;
  //   this.showUI();
  // }
  // onMouseUp(): any {
  //   this.isMouseDown = false;
  //   if (this.videoStatus === 'paused') {
  //     return;
  //   }
  //   this.hideUI();
  //   this.divVideo.play();
  // }
  // updatePlayState(): void {
  //   this.divVideoPaused ?
  //     (this.playButton.classList.add('start'), this.playButton.classList.remove('pause')) :
  //     (this.playButton.classList.add('pause'), this.playButton.classList.remove('start'));
  //
  //   this.divVideoPaused ? this.showUI() : this.hideUI();
  // }
  // adjustVolume(e): any {
  //   if (e.type === 'mousemove' && !this.isMouseDown) return;
  //   if (e.which === 1 ) return this.divVideo.volume = this.volumeSlider.value / 100;
  //
  //   e.preventDefault();
  //   if (e.key === 'ArrowUp' || e.wheelDelta > 0) {
  //     this.divVideo.volume = this.divVideo.volume + .1 >= 1 ? 1 : this.divVideo.volume + .1;
  //     this.volumeSlider.value = this.divVideo.volume * 100;
  //     return;
  //   }
  //   if (e.key === 'ArrowDown' || e.wheelDelta < 0) {
  //     this.divVideo.volume = video.volume - .1 <= 0 ? 0 : this.divVideo.volume - .1;
  //     this.volumeSlider.value = this.divVideo.volume * 100;
  //     return;
  //   }
  //
  //   this.divVideo.volume = this.volumeSlider.value / 100;
  // }
  // skip(e): any {
  //   e.preventDefault();
  //   switch (e.key) {
  //     case 'ArrowLeft':
  //       this.divVideo.currentTime -= 10;
  //       break;
  //     case 'ArrowRight':
  //       this.divVideo.currentTime += 10;
  //       break;
  //   }
  //   this.timeBar.value = this.divVideo.currentTime;
  // }
  // toggleFullScreen(): any {
  //   this.player.requestFullscreen ? this.player.requestFullscreen() :
  //     this.player.mozRequestFullscreen ? this.player.mozRequestFullscreen() :
  //       this.player.webkitRequestFullscreen ? this.player.webkitRequestFullscreen() :
  //         this.player.msRequestFullscreen ? this.player.msRequestFullscreen() :
  //           console.error('fullscreen is not available');
  //
  //   document.exitFullscreen ? document.exitFullscreen() :
  //     document.mozExitFullscreen ? document.mozExitFullscreen() :
  //       document.webkitExitFullscreen ? document.webkitExitFullscreen() :
  //         document.msExitFullscreen ? document.msExitFullscreen() :
  //           console.error('cannot exit fullscreen mode');
  //
  //   this.setVideoSize();
  // }
  // selectVideoFile(): any {
  //   const file = this.files[0];
  //   const fileUrl = URL.createObjectURL(file);
  //   this.divVideo.type = file.type;
  //   this.divVideo.src = fileUrl + '#t=.5';
  //   this.divVideo.poster = '';
  //   this.divVideo.play();
  //   this.videoStatus = 'playing';
  //   setTimeout(() => this.setVideoData(), 50);
  // }
  // setVideoSize(): void {
  //   const aspectRatio = this.divVideoOffsetWidth / this.divVideoOffsetHeight;
  //   const d = document;
  //   this.controlsDivWidth = this.divPlayerOffsetWidth + 'px';
  //   if (this.divVideoOffsetHeight >= this.divPlayerOffsetHeight) {
  //     this.divVideo.style.width = window.innerHeight * aspectRatio + 'px';
  //   } else {
  //     this.divVideoWidth = this.divPlayerOffsetWidth + 'px';
  //   }
  //   const margin = (this.divPlayerOffsetHeight - this.divVideoOffsetHeight) / 2 + 'px';
  //   this.divVideoMarginTop = margin;
  // }
  // setVideoData(): void {
  //   if (this.video?.readyState) {
  //     let seconds = Math.floor(this.divVideo.duration % 60);
  //     let minutes = Math.floor(this.divVideo.duration / 60);
  //     seconds = seconds >= 10 ? seconds : '0' + seconds;
  //     this.timeTotal = `${minutes}:${seconds}`;
  //     this.timeBar.max = this.divVideo.duration;
  //     this.timeCounter.innerText = `0:00 / ${timeTotal}`;
  //     this.updateCurrentTime();
  //   }
  //   if (this.volumeSlider){
  //     this.divVideo.volume = document.querySelector('.volume-bar').value / 100;
  //   }
  //   this.isMouseDown;
  //   this.setVideoSize();
  // }
  // --------------
  isModuleExplorer(): void{
    this.isExplorer = false;
    this.isTimeline = false;
    if (this.activatedRoute.snapshot.data.isToExplorer){
      this.isExplorer = true;
    }else if (this.activatedRoute.snapshot.data.isTimeline){
      this.isTimeline = true;
    }
  }
  load(): void{
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
          if (res && !res.length) {
            this.stoppedRequest = true;
          }
          this.pushPhotos( res );
        });
    }else{
      this.photoService
        .listFromToExplorerPaginated(this.photos.length)
        .subscribe(res => {
          this.stoppedRequest = false;
          if (res && !res.length) {
            this.stoppedRequest = true;
          }
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

