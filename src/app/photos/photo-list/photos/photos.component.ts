import {Component, Input, OnChanges,SimpleChanges} from '@angular/core';
import {Photo} from "../../photo/photo";
import {Comments} from '../../comments/comments';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.scss']
})
export class PhotosComponent implements OnChanges {

  @Input() photos:Photo[] = [];
  @Input() comments:Comments[] = [];
  viewFormComment:boolean = false;
  rows:any[] = [];
  photoId

  constructor() { }
  ngOnChanges(changes: SimpleChanges) {
    if(changes.photos)
      this.rows = this.photos;
  }
}
