import {Component, Input} from '@angular/core';
import {environment} from '../../../environments/environment';
import {PhotoService} from './photo.service';

const CLOUD = environment.ApiUrl + '/storage/img/';

@Component({
  selector: 'app-photo',
  templateUrl: 'photo.component.html',
  styleUrls: ['./photo.scss'],
})
export class PhotoComponent{
  constructor(
    private photoService: PhotoService
  ) { }
  @Input() description = '';
  @Input() _url = '';
  @Input() photo_id;

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
  errorHandler(event): any {
    event.target.src = 'https://be.mycircle.click/storage/default/error-photo.png';
    this.photoService.registerErrorPhoto(this.photo_id).subscribe();
  }

}
