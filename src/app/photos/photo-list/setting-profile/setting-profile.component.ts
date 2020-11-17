import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';



import {User} from '../../../core/user/user';
import {UserService} from '../../../core/user/user.service';
import {environment} from '../../../../environments/environment';
import {Router} from '@angular/router';
import {HttpErrorResponse, HttpEvent, HttpEventType} from '@angular/common/http';
import {AlertService} from '../../../shared/alert/alert.service';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-setting-profile',
  templateUrl: './setting-profile.component.html',
  styleUrls: ['./setting-profile.component.css']
})
export class SettingProfileComponent implements OnInit {
  user:User;
  imgProfileDefaultSanitizer
  settingForm:FormGroup
  hidePass = true
  userAvatarUrl
  file:File
  progress

  constructor(
    private sanitizer:DomSanitizer,
    private alertService:AlertService,
    private route:Router,
    private userService:UserService,
    private formBuilder:FormBuilder
  ) {}

  ngOnInit():void{
    this.userService.getUser().subscribe(user => this.user = user);
    this.userService.getImgProfile().subscribe(profile=>this.userAvatarUrl = profile );

    if(this.userAvatarUrl){
      this.userAvatarUrl = this.sanitizer.bypassSecurityTrustUrl(this.userAvatarUrl)
    }else{
      this.userAvatarUrl = this.sanitizer.bypassSecurityTrustUrl(environment.ApiUrl + '/storage/profile_default/default.png')
    }

    this.settingForm = this.formBuilder.group({
        userEmail:[
          '',
          [
            Validators.required,
            Validators.email
          ]
        ],
      userPassword:[
        '',
        [
          Validators.required,
          Validators.minLength(8),
          Validators.maxLength(50),
        ],
      ],
      userPasswordChange:[
        '',
        [
          Validators.minLength(8),
          Validators.maxLength(50),
        ]
      ],
      file:[],
      userAddress:[''],
      userDescription:[''],
    })
    this.settingForm.patchValue({
      userEmail: this.user.user_email,
      userAddress:this.user.address,
      userDescription:this.user.description
    });


  }

  save(){
    const data = this.settingForm.getRawValue();
    this.userService.saveSettings(data).subscribe(success=> {

        this.route.navigate(['']);
        this.alertService.success('Salvo com sucesso');
      },
      (response: HttpErrorResponse)=>{
        this.settingForm.controls['userPassword'].setErrors({'message':response.error.text})
      }
    )
  }
  handleFile( file:File ){
    this.file = file;
    const reader = new FileReader();
    reader.onload = (event:any) => this.file = event.target.result;
    reader.readAsDataURL(file);

    this.userService
      .uploadImgProfile( this.file )
      .subscribe(
        ( event:HttpEvent<any> ) => {

          if( event.type == HttpEventType.UploadProgress ){

            this.progress = Math.round(100 * event.loaded / event.total);

          }else if( event.type == HttpEventType.Response ){
            this.userAvatarUrl = event.body
            this.alertService.success('Upload completo');
          }
        },
        err => {
          this.alertService.danger('Falha ao carregar o arquivo, tente mais tarde')
        }
      )

  }

}
