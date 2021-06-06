import {AfterViewInit, Component, Input, OnDestroy, OnInit} from '@angular/core';
import {environment} from '../../../environments/environment';
import {PhotoService} from './photo.service';


const CLOUD = environment.ApiUrl + '/storage/img/';

@Component({
  selector: 'app-photo',
  templateUrl: 'photo.component.html',
  styleUrls: ['./photo.scss'],
})
export class PhotoComponent implements AfterViewInit{
  constructor(
    private photoService: PhotoService
  ) {}
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

  itemsTime = [];

  ngAfterViewInit(): void{
      const id = this.photo_id;

      const millisToMinutesAndSeconds = (millis) => {
        return ((millis % 60000) / 1000).toFixed(0);
      };
      const observador = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          const {isIntersecting, intersectionRatio, time} = entry;
          if (isIntersecting === true || intersectionRatio > 0) {
            console.log( 'a photo ' + id + ' está visivel e ficou exposta por ' + millisToMinutesAndSeconds(time) + ' segundos');
            this.sendStatistic(id);

            observador.unobserve(entry.target);
            this.sendStatistic(id);
          }
        });
      }, {
        rootMargin: '0px'
      });
      observador.observe(  document.querySelector('.image-' + id));
  }
  sendStatistic(photoId): any{
    console.log('enviado o ' + photoId);
  }
  errorHandler(event): any {
    event.target.src = 'https://be.mycircle.click/storage/default/error-photo.png';
    this.photoService.registerErrorPhoto(this.photo_id).subscribe();
  }
}
