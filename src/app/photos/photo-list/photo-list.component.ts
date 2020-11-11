import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";

import {Photo} from '../photo/photo';
import {PhotoService} from '../photo/photo.service';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-photo-list',
  templateUrl: './photo-list.component.html',
  styleUrls: ['./photo-list.component.scss']
})
export class PhotoListComponent implements OnInit {

  title = 'App';
  photos:Photo[] = [];
  userName:string = '';
  canLoad = false;
  pendingLoad = false;
  stopRequest = false;

  constructor(
    private activatedRoute:ActivatedRoute,
    private photoService : PhotoService,
  ) {}

  ngOnInit():void{
    this.userName = this.activatedRoute.snapshot.params.userName;
    this.photos = this.activatedRoute.snapshot.data['photos'];

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
    if(!this.stopRequest)
      this.photoService
        .listFromUserPaginated(this.userName,this.photos.length)
        .subscribe(photos=>{
          if(!photos.length){
            this.stopRequest = true;
          }else{
            this.photos = this.photos.concat(photos)
          }
        })
  }
}
