import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {Photo} from "../../photo/photo";
import {Comments} from '../../comments/comments';
import {PhotoService} from '../../photo/photo.service';
import {UserService} from '../../../core/user/user.service';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.scss']
})
export class PhotosComponent implements OnChanges {

  @Input() photos:Photo[] = [];
  comments:Comments[] = [];
  viewFormComment:boolean = false;
  rows:any[] = [];
  photoId

  constructor(
    private photoService:PhotoService,
    private userService:UserService
  ) { }

  ngOnChanges(changes: SimpleChanges) {
    if(changes.photos)
      this.rows = this.photos;
  }
  like( photoId:number ){
    const userName = this.userService.getUserName()
      this.photoService
        .like( photoId,userName )
        .subscribe(likes => {
          const elementsIndex = this.photos.findIndex (element => element.photo_id == photoId)
          this.photos[elementsIndex].photo_likes = parseInt(likes)
      }
    )
  }
}
