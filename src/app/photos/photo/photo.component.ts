import {AfterViewInit, Component, Input, OnDestroy, OnInit} from '@angular/core';
import {environment} from '../../../environments/environment';
import {PhotoService} from './photo.service';
import { DatePipe } from '@angular/common';



const CLOUD = environment.ApiUrl + '/storage/img/';

@Component({
  selector: 'app-photo',
  templateUrl: 'photo.component.html',
  styleUrls: ['./photo.scss'],
  providers: [DatePipe]
})
export class PhotoComponent implements AfterViewInit{
  constructor(
    private photoService: PhotoService,
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
  timeLeft = 0;
  interval;

  items = [];
  startTimer(): void {
    this.interval = setInterval(() => {
        this.timeLeft++;
    }, 1000);
  }

  pauseTimer(): void {
    this.timeLeft = 0;
    // clearInterval(this.interval);
  }
  ngAfterViewInit(): void{
      const id = this.photo_id;
      const observador = new IntersectionObserver((entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          this.startTimer();
        }else{
          if (this.timeLeft){
            this.sendStatistic(id, this.timeLeft);
          }
          this.pauseTimer();
        }

      }, {
        threshold: [0, 1],
        rootMargin: '0px'
      });
      observador.observe(  document.querySelector('.image-' + id));
  }
  sendStatistic(photoId, time): any{
    this.photoService.registerViewPhoto(photoId, time).subscribe();
  }
  errorHandler(event): any {
    event.target.src = 'https://be.mycircle.click/storage/default/error-photo.png';
    this.photoService.registerErrorPhoto(this.photo_id).subscribe();
  }
}
