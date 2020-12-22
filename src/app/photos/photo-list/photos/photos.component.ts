import {Component, ElementRef, Input, OnChanges, OnInit, SimpleChanges, ViewChild} from '@angular/core';

import {Photo} from '../../photo/photo';
import {Comments} from '../../comments/comments';
import {PhotoService} from '../../photo/photo.service';
import Swal from 'sweetalert2';
import {AlertService} from '../../../shared/alert/alert.service';
import {environment} from '../../../../environments/environment';
import {SecurityCommonsService} from '../../../shared/services/security-commons.service';

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
    private alertService: AlertService
  ) { }
  ngOnChanges(changes: SimpleChanges): void {
    if (changes.photos){
      this.rows = this.photos;
    }
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
      confirmButtonText: 'Publicar',
      showCancelButton: true,
      cancelButtonText: 'Cancelar',
      customClass: {
        input: 'textarea-alert',
        confirmButton: 'button-alert',
        cancelButton: 'button-alert'
      },
      html: `<div class='m-auto'><div class='form-group m-auto  pt-4'><img class='m-auto thumb-edit-description' src='` + photo.photo_url + `'></div>` + `</div>`,
    }).then((result) => {
      if (result.isConfirmed) {
        if (result.value.length >= 900){
          this.alertService.warning('Limite de 900 caractéres ultrapassado!');
        }else{
          this.save( result.value, this.photoId, i );
        }
      }
    });
  }

}
