import {Component, ElementRef, Input, OnChanges, OnInit, SimpleChanges, ViewChild} from '@angular/core';

import {Photo} from '../../photo/photo';
import {Comments} from '../../comments/comments';
import {PhotoService} from '../../photo/photo.service';
import Swal from 'sweetalert2';
import {AlertService} from '../../../shared/alert/alert.service';
import {environment} from '../../../../environments/environment';
import {SecurityCommonsService} from '../../../shared/services/security-commons.service';
import {UserService} from '../../../core/user/user.service';
import {MatDialog} from '@angular/material/dialog';
import {DialogComponent} from '../../../shared/dialog/dialog.component';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.scss']
})
export class PhotosComponent implements OnChanges {

  @Input() photos: Photo[] = [];
  comments: Comments[] = [];
  rows: any[] = [];
  photoId: number;
  description: string;
  viewFormComment: boolean;
  avatarDefault: string = environment.ApiUrl + 'storage/profile_default/default.png';
  @ViewChild('descriptionEl') descriptionEl: ElementRef;
  constructor(
    private securityCommons: SecurityCommonsService,
    private photoService: PhotoService,
    private alertService: AlertService,
    private userService: UserService,
    public dialog: MatDialog
  ) { }
  ngOnChanges(changes: SimpleChanges): void {
    if (changes.photos){
      this.rows = this.photos;
    }
  }
  openPhoto(photo): void{
   this.dialog.open(DialogComponent, {
      width: '100%',
      height: '100%',
      data: photo,
     panelClass: 'full-width-dialog'
    });
  }
  delete( photo, i ): void{
    this.photos.splice(i, 1);
    this.photoService
      .removePhoto( photo.photo_id )
      .subscribe();
  }
  save( photoDescription: string, photoId: number, i: number ): void{
    this.photoService
      .updatePhoto( photoDescription, photoId )
      .subscribe(
        success => {
          this.photos[i].photo_description = success.photoDescription;
        }
      );
  }

  edit(photo, i): void{
    this.photoId = photo.photo_id;
    this.description = photo.photo_description;

    Swal.fire({
      input: 'textarea',
      inputValue: this.description,
      padding: '5px',
      confirmButtonText: 'Publish',
      showCancelButton: true,
      cancelButtonText: 'Cancel',
      customClass: {
        input: 'textarea-alert',
        confirmButton: 'button-alert',
        cancelButton: 'button-alert'
      },
      html: `<div class='m-auto'><div class='form-group m-auto  pt-4'><img class='m-auto thumb-edit-description' src='` + photo.photo_url + `'></div>` + `</div>`,
    }).then((result) => {
      if (result.isConfirmed) {
        if (result.value.length >= 900){
          this.alertService.warning('900 character limit exceeded!');
        }else{
          this.save( result.value, this.photoId, i );
        }
      }
    });
  }
  dbClickLike( photoId: number, index: number ): void{

    const userName = this.userService.getUserName();
    this.photoService
      .like( photoId, userName )
      .subscribe(response => {
          if (response) {
            this.rows[index].photo_likes = response.count;
            this.rows[index].liked = response.liked;
          }
        }
      );
  }

}
