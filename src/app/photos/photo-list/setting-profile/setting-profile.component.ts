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
          Validators.required,
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

  save(): void{
    const data = this.settingForm.getRawValue();
    this.userService.saveSettings(data).subscribe(success => {

        this.userService.logout();
        this.route.navigate(['']);
        this.alertService.success('Por segurança, faça login novamente!');
      },
      (response: HttpErrorResponse) => {
        this.settingForm.controls.userPassword.setErrors({message : response.error.text});
      }
    );
  }
  uploadProfile( file: File ): void{
    this.file = file;
    const reader = new FileReader();
    reader.onload = (event: any) => this.file = event.target.result;
    reader.readAsDataURL(file);

    this.userService
      .uploadImgProfile( this.file )
      .subscribe(
        ( event: HttpEvent<any> ) => {

          if ( event.type === HttpEventType.UploadProgress ){

            this.progress = Math.round(100 * event.loaded / event.total);

          }else if ( event.type === HttpEventType.Response ){
            this.user.user_avatar_url = event.body;
            this.alertService.success('Upload completo');
          }
        },
        err => {
          this.alertService.danger('Falha ao carregar o arquivo, tente mais tarde');
        }
      );

  }
  uploadCover( file:File ){
    this.file = file;
    const reader = new FileReader();
    reader.onload = (event:any) => this.file = event.target.result;
    reader.readAsDataURL(file);

    this.userService
      .uploadImgCover( this.file )
      .subscribe(
        ( event:HttpEvent<any> ) => {

          if( event.type == HttpEventType.UploadProgress ){

            this.progress = Math.round(100 * event.loaded / event.total);

          }else if( event.type == HttpEventType.Response ){
            this.user.user_cover_url = event.body
            this.alertService.success('Upload completo');
          }
        },
        err => {
          this.alertService.danger('Falha ao carregar o arquivo, tente mais tarde')
        }
      )

  }

}
