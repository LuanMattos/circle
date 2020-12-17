import {Component, Input} from '@angular/core';
import {environment} from '../../../environments/environment';

const CLOUD = environment.ApiUrl + '/storage/img/';

@Component({
  selector: 'app-photo',
  templateUrl: 'photo.component.html',
  styleUrls: ['./photo.css'],
})
export class PhotoComponent{

  @Input() description = '';
  @Input() _url = '';

  @Input() set url( url: string ){
    if (!url.startsWith('data')){
      this._url = url;
    }else{
      this._url = url;
    }
  }

  get url(): string{
    return this._url;
  }

}
