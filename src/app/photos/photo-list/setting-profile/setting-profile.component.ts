import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';



import {User} from '../../../core/user/user';
import {UserService} from '../../../core/user/user.service';
import {environment} from '../../../../environments/environment';
import {Router} from '@angular/router';
import {HttpErrorResponse} from '@angular/common/http';
import {AlertService} from '../../../shared/alert/alert.service';

@Component({
  selector: 'app-setting-profile',
  templateUrl: './setting-profile.component.html',
  styleUrls: ['./setting-profile.component.css']
})
export class SettingProfileComponent implements OnInit {
  user:User;
  imgProfileDefault:string = environment.ApiUrl + '/storage/profile_default/default.png'
  settingForm:FormGroup
  hidePass = true

  constructor(
    private alertService:AlertService,
    private route:Router,
    private userService:UserService,
    private formBuilder:FormBuilder
  ) {}

  ngOnInit():void{
    this.userService.getUser().subscribe(user => this.user = user);

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

}
