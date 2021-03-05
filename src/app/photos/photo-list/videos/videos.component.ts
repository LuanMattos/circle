import {Component, ElementRef, Input, OnChanges, SimpleChanges, ViewChild} from '@angular/core';
import {Photo} from '../../photo/photo';

@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.scss']
})
export class VideosComponent implements OnChanges {
  @ViewChild('video', {static: true}) video: ElementRef;
  @Input() url;
  muted;
  constructor() { }
  ngOnChanges(changes: SimpleChanges): void {}
  playPause(): void {
    if (this.video.nativeElement.paused){
      this.video.nativeElement.play();
    }else{
      this.video.nativeElement.pause();
    }
  }
  startStopSound(): void{
    if (this.video.nativeElement.volume){
      this.video.nativeElement.volume = 0;
      this.muted = 'muted';
    }else{
      this.video.nativeElement.volume = 1;
      this.muted = '';
    }
  }
}
