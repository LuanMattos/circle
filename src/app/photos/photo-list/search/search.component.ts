import {Component} from '@angular/core';

import {PhotoService} from '../../photo/photo.service';
import {debounceTime} from 'rxjs/operators';
import {Router} from '@angular/router';

@Component({
  selector:'app-search',
  templateUrl:'./search.component.html',
  styleUrls:['./search.component.css']
})
export class SearchComponent {
  filter:string = '';
  users;
  hasMore:boolean = true;

  constructor(
    private route:Router,
    private photoService:PhotoService ) {}

  _filter( value:string ){
    this.filter = value
    this.hasMore = true

    if( !value ){
      this.users = [];
      return false
    }
    this.photoService.getUserByName( this.filter )
      .pipe(debounceTime(300))
      .subscribe(response=> {
        this.users = response;
      })
  }
  moreUsers(){
    this.photoService.getUserByNamePaginated( this.filter,this.users.length )
      .subscribe(users=> {
        this.users = this.users.concat(users);
        if(!users.length) this.hasMore = false;

      })
  }
}
