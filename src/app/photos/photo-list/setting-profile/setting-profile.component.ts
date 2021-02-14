import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';



import {User} from '../../../core/user/user';
import {UserService} from '../../../core/user/user.service';
import {environment} from '../../../../environments/environment';
import {ActivatedRoute, Router} from '@angular/router';
import {HttpErrorResponse, HttpEvent, HttpEventType} from '@angular/common/http';
import {AlertService} from '../../../shared/alert/alert.service';
import {DomSanitizer} from '@angular/platform-browser';
import {SecurityCommonsService} from '../../../shared/services/security-commons.service';
import { ImageCroppedEvent } from 'ngx-image-cropper';


@Component({
  selector: 'app-setting-profile',
  templateUrl: './setting-profile.component.html',
  styleUrls: ['./setting-profile.component.css']
})
export class SettingProfileComponent implements OnInit {
  user: User;
  imgProfileDefaultSanitizer;
  settingForm: FormGroup;
  hidePass = true;
  file: File;
  progress;
  userCoverUrl: any;
  imageChangedEvent: any = '';
  croppedImage: any = '';
  fileToReturn: any = '';
  stopClick;

  constructor(
    private securityCommons: SecurityCommonsService,
    private sanitizer: DomSanitizer,
    private alertService: AlertService,
    private route: Router,
    private userService: UserService,
    private formBuilder: FormBuilder,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void{
    this.user = this.activatedRoute.snapshot.data.user;
    this.user.user_cover_url = this.securityCommons.passSecurityUrl(this.user.user_cover_url, environment.ApiUrl + 'storage/cover_default/default.png');
    this.user.user_avatar_url = this.securityCommons.passSecurityUrl(this.user.user_avatar_url, environment.ApiUrl + 'storage/profile_default/default.png');

    this.settingForm = this.formBuilder.group({
        userEmail: [
          '',
          [
            Validators.required,
            Validators.email
          ]
        ],
      userPassword: [
        '',
        [
          Validators.minLength(8),
          Validators.maxLength(50),
        ],
      ],
      userPasswordChange: [
        '',
        [
          Validators.minLength(8),
          Validators.maxLength(50),
        ]
      ],
      file: [],
      userAddress: [''],
      userDescription: [''],
    });
    this.settingForm.patchValue({
      userEmail: this.user.user_email,
      userAddress: this.user.address,
      userDescription: this.user.description
    });


  }
  fileChangeEvent(event: any): void {
    this.croppedImage = 'l';
    this.imageChangedEvent = event;
  }
  imageCropped(event: ImageCroppedEvent): void {
    this.croppedImage = event.base64;
  }
  base64ToFile(data, filename): any {

    const arr = data.split(',');
    const mime = arr[0].match(/:(.*?);/)[1];
    const bstr = atob(arr[1]);
    let n = bstr.length;
    const u8arr = new Uint8Array(n);

    while (n--){
      u8arr[n] = bstr.charCodeAt(n);
    }

    return new File([u8arr], filename, { type: mime });
  }
  cropperReady(): void {
    // cropper ready
  }
  loadImageFailed(): void {
    // show message
  }
  getImageCropped(): void{
    const file = this.base64ToFile(
      this.croppedImage,
      this.imageChangedEvent.target.files[0].name,
    );
    this.file = this.imageChangedEvent.target.files[0];

    this.uploadProfile(file);
  }
  save(): void{
    const data = this.settingForm.getRawValue();
    this.userService.saveSettings(data).subscribe(success => {
        if (!success){
          this.settingForm.controls.userPassword.setErrors({message : 'Incorrect password!'});
        } else if ( success === 'auth' ){
          this.userService.logout();
          this.route.navigate(['']);
          this.alertService.success('For security, log in again!');
        }else if ( success === 'common'){
          this.route.navigate(['']);
        }
      },
      (response: HttpErrorResponse) => {
        this.settingForm.controls.userPassword.setErrors({message : response.error.text});
      }
    );
  }
  uploadProfile( file: File ): void{
    const reader = new FileReader();
    reader.onload = (event: any) => this.file = event.target.result;
    reader.readAsDataURL(file);

    this.userService
      .uploadImgProfile( file )
      .subscribe(
        ( event: HttpEvent<any> ) => {

          if ( event.type === HttpEventType.UploadProgress ){

            this.progress = Math.round(100 * event.loaded / event.total);

          }else if ( event.type === HttpEventType.Response ){
            this.user.user_avatar_url = event.body;
            this.alertService.success('Upload complete');
          }
          this.stopClick = false;
          this.croppedImage = '';
        },
        err => {
          this.stopClick = false;
          this.croppedImage = '';
          this.alertService.danger('Failed to load the file, try later\n');
        }
      );

  }
  uploadCover( file: File ): any{
    this.file = file;
    const reader = new FileReader();
    reader.onload = (event: any) => this.file = event.target.result;

    reader.readAsDataURL(file);

    this.userService
      .uploadImgCover( this.file )
      .subscribe(
        ( event: HttpEvent<any> ) => {

          if( event.type == HttpEventType.UploadProgress ){

            this.progress = Math.round(100 * event.loaded / event.total);

          }else if( event.type == HttpEventType.Response ){
            this.user.user_cover_url = event.body
            this.alertService.success('Upload complete');
          }
        },
        err => {
          this.alertService.danger('Failed to load the file, try later\n');
        }
      );
  }

}
