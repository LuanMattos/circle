import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

import {Photo} from '../photo/photo';
import {PhotoService} from '../photo/photo.service';
import {User} from '../../core/user/user';

@Component({
  selector: 'app-photo-list-timeline',
  templateUrl: './photo-list-timeline.component.html',
  styleUrls: ['./photo-list-timeline.component.scss']
})
export class PhotoListTimelineComponent implements OnInit {

  title = 'App';
  photos: Photo[] = [];
  userName: string = '';
  canLoad = false;
  pendingLoad = false;
  stopRequest = false;
  user: User;
  setLength = 0;

  constructor(
    private activatedRoute: ActivatedRoute,
    private photoService: PhotoService,
  ) {}

  ngOnInit(): void{
    this.user = this.activatedRoute.snapshot.data.user;
    this.photos = this.activatedRoute.snapshot.data.photos;
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
}
