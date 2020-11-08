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
  viewFormComment:boolean;
  rows:any[] = [];
  photoId:number;

  constructor(
    private photoService:PhotoService,
    private userService:UserService
  ) { }

  ngOnChanges(changes: SimpleChanges) {
    if(changes.photos)
      this.rows = this.photos;
  }

}
