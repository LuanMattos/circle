import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {PhotoService} from '../photo/photo.service';
import {ActivatedRoute, Router} from '@angular/router';
import {HttpEvent, HttpEventType} from '@angular/common/http';
import {AlertService} from '../../shared/alert/alert.service';
import {finalize} from 'rxjs/operators';
import {UserService} from '../../core/user/user.service';
import {Observable} from 'rxjs';
import {User} from '../../core/user/user';
import {environment} from '../../../environments/environment';
import {SecurityCommonsService} from '../../shared/services/security-commons.service';

@Component({
  selector:  'app-photo-form',
  templateUrl:  './photo-form.component.html',
  styleUrls:  ['./photo-form.component.scss']
})
export class PhotoFormComponent implements OnInit {

  photoForm: FormGroup;
  file: File;
  preview: string;
  progress = 0;
  public: boolean = true;
  allowComments: boolean = true;
  avatar: string;
  user: User;


  constructor(
    private alertService: AlertService,
    private photoService: PhotoService,
    private formBuilder: FormBuilder,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private securityCommons: SecurityCommonsService
    ) { }

  ngOnInit(): void {
    this.user = this.activatedRoute.snapshot.data.user;
    this.avatar = this.securityCommons.passSecurityUrl(this.user.user_avatar_url, environment.ApiUrl + 'storage/profile_default/default.png');
    this.photoForm = this.formBuilder.group({
      file: ['', Validators.required],
      description: ['', Validators.maxLength(300)]
    });
  }

  upload(): void{
    const description = this.photoForm.get('description').value;
    const allowComments = this.allowComments;
    const _public = this.public;

    this.photoService
      .upload( description, allowComments, _public, this.file )
      .pipe(
            finalize(() => {
            this.router.navigate(['']);
          }
        )
      )
      .subscribe(
        ( event: HttpEvent<any> ) => {

            if ( event.type === HttpEventType.UploadProgress ){

              this.progress = Math.round(100 * event.loaded / event.total);

            }else if ( event.type === HttpEventType.Response ){
              this.alertService.success('Upload completo');
            }
      },
      err => {
          this.alertService.danger('Falha ao carregar o arquivo, tente mais tarde')
        }
      );
  }
  handleFile(file: File): void{
      this.file = file;
      const reader = new FileReader();
      reader.onload = (event: any) => this.preview = event.target.result;
      reader.readAsDataURL(file);
  }
  removeFile(): void{
    this.photoForm.get('file').reset();
    this.preview = null;
  }

}
