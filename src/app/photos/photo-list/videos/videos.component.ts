import { AfterViewInit, Component, ElementRef, Input, OnChanges, SimpleChanges, ViewChild } from '@angular/core';
import { PhotoService } from "../../photo/photo.service";

@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.scss']
})
export class VideosComponent implements OnChanges, AfterViewInit {
  @ViewChild('video', { static: true }) video: ElementRef;
  @Input() url;
  @Input() video_id;
  muted;
  startTimer(): void {
    this.interval = setInterval(() => {
      this.timeLeft++;
    }, 1000);
  }
  timeLeft = 0;
  interval;
  buttonClass: string;
  pauseTimer(): void {
    this.timeLeft = 0;
  }
  constructor(private photoService: PhotoService) { }
  ngAfterViewInit(): void {
    const id = this.video_id;
    const observador = new IntersectionObserver((entries) => {
      const entry = entries[0];
      if (entry.isIntersecting) {
        this.startTimer();
        this.video.nativeElement.mute = true;

        if (window.innerWidth < 754) {
          this.buttonClass = 'play';
          // Show loading animation.
          var playPromise = this.video.nativeElement.play();

          if (playPromise !== undefined) {
            playPromise.then(_ => {
              // Automatic playback started!
              // Show playing UI.
            })
              .catch(error => {
                // Auto-play was prevented
                // Show paused UI.
              });
          }
        }
      } else {
        if (this.timeLeft > 2) {
          this.sendStatisticVideo(id, this.timeLeft);
        }
        if (window.innerWidth < 754) {
          this.buttonClass = '';
          this.video.nativeElement.pause();
        }
        this.pauseTimer();
      }

    }, {
      threshold: [0.6, 1],
      rootMargin: '0px'
    });
    observador.observe(document.querySelector('.video-' + id));
  }
  sendStatisticVideo(videoId, time): any {
    this.photoService.registerViewPhoto(videoId, time).subscribe();
  }
  ngOnChanges(changes: SimpleChanges): void { }
  playPause(): void {
    if (this.video.nativeElement.paused) {
      this.buttonClass = 'play';
      this.video.nativeElement.play();
    } else {
      this.buttonClass = '';
      this.video.nativeElement.pause();
    }
  }
  startStopSound(): void {
    if (this.video.nativeElement.volume) {
      this.video.nativeElement.volume = 0;
      this.muted = 'muted';
    } else {
      this.video.nativeElement.volume = 1;
      this.muted = '';
    }
  }
}
