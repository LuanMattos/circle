import {Component, EventEmitter, Input, Output} from '@angular/core';


import {UserService} from '../../core/user/user.service';
import {PhotoService} from '../../photos/photo/photo.service';
import {Photo} from '../../photos/photo/photo';

@Component({
  selector:'app-like',
  templateUrl:'./like.component.html'
})
export class LikeComponent{

  @Input() photo:Photo;
  @Input() _viewFormComment:boolean = false;
  @Output() viewFormComment:EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() photoId:EventEmitter<number> = new EventEmitter<number>();

  constructor(
    private userService:UserService,
    private photoService:PhotoService
  ) {
  }

  like( photoId:number ){
    const userName = this.userService.getUserName()
    this.photoService
      .like( photoId,userName )
      .subscribe(likes => {
        this.photo.photo_likes = parseInt(likes);
          // const elementsIndex = this.photo.findIndex (element => element.photo_id == photoId)
          // this.photo[elementsIndex].photo_likes = parseInt(likes)
        }
      )
  }
  emitChanges(photo:Photo){
    this.viewFormComment.emit(!this._viewFormComment);
    this.photoId.emit(photo.photo_id);
  }

}
