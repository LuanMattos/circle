import {Component, OnInit, Input} from '@angular/core';
import { Photo } from '../photo/photo';
import { PhotoService } from '../photo/photo.service';
import Swal from 'sweetalert2';
import { AlertService } from 'src/app/shared/alert/alert.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector:  'app-photo-card-header',
  templateUrl: 'photo-card-header.component.html',
  styleUrls:  ['./photo-card-header.component.scss']
})
export class PhotoCardHeaderComponent implements OnInit{
    photoId: number;
    description: string;
    photos: Photo[] = [];
    @Input() photo: Photo;
    @Input() i: Number;
    isTimeline: boolean;
    innerWidth;
    
    constructor(
        private photoService: PhotoService,
        private alertService: AlertService,
        private router: Router,
        private activatedRoute: ActivatedRoute,
    ) {}
    ngOnInit(): void {
        this.isModuleTimeline();
        this.widthScreen();
    }
    widthScreen(): void{
        this.innerWidth = window.innerWidth;
        window.addEventListener('resize',()=>{ this.innerWidth = window.innerWidth; });
    } 
    edit(photo, i): void{
        this.router.navigate(['p', photo.photo_id]);
    }
    isModuleTimeline(): void{
      this.isTimeline = this.activatedRoute.snapshot.data.isTimeline
    }
    //   save( photoDescription: string, photoId: number, i: number ): void{
    //     this.photoService
    //       .updatePhoto( photoDescription, photoId )
    //       .subscribe(
    //         success => {
    //         //   this.photos[i].photo_description = success.photoDescription;
    //         }
    //       );
    // }
    delete( photo, i ): void{
      this.photos.splice(i, 1);
      this.photoService
        .removePhoto( photo.photo_id )
        .subscribe();
    } 
}
