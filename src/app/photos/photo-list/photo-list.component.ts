import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";


import {PhotoService} from '../photo/photo.service';
import {UserService} from '../../core/user/user.service';
import {environment} from '../../../environments/environment';
import {DomSanitizer} from '@angular/platform-browser';



@Component({
  selector: 'app-photo-list',
  templateUrl: './photo-list.component.html',
  styleUrls: ['./photo-list.component.scss']
})
export class PhotoListComponent implements OnInit {

  title = 'App';
  photos = [];
  userName:string = '';
  canLoad = false;
  pendingLoad = false;
  user;
  imgProfileDefault:string = environment.ApiUrl + '/storage/profile_default/default.png'
  userAvatarUrl
  setLength = 0

  constructor(
    private sanitizer:DomSanitizer,
    private userService:UserService,
    private activatedRoute:ActivatedRoute,
    private photoService : PhotoService,
  ) {}

  ngOnInit():void{
    this.userName = this.activatedRoute.snapshot.params.userName;
    this.photos = this.activatedRoute.snapshot.data['photos'];
    this.userService.getUser().subscribe(user=>this.user = user)

    this.userService.getImgProfile().subscribe(profile=>this.userAvatarUrl = profile );

    if(this.userAvatarUrl){
      this.userAvatarUrl = this.sanitizer.bypassSecurityTrustUrl(this.userAvatarUrl)
    }else{
      this.userAvatarUrl = this.sanitizer.bypassSecurityTrustUrl(environment.ApiUrl + '/storage/profile_default/default.png')
    }

    setInterval( () => {
      this.canLoad = true;
      if ( this.pendingLoad ) {
        this.load();
      }
    }, 2000);

  }

  load(){
    if ( this.canLoad ) {
      this.canLoad = false;
      this.pendingLoad = false;
      this.requestItem();
    } else {
      this.pendingLoad = true;
    }

  }
  requestItem(){

   if( this.photos.length > this.setLength )

    this.photoService
          .listFromUserPaginated( this.userName,this.photos.length )
          .toPromise()
          .then(res => {
            this.setLength = this.photos.length
            this.photos = this.photos.concat(res);
          });

  }
}
