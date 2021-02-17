import {Component, ElementRef, OnInit, Renderer2} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {PhotoService} from '../photo/photo.service';
import {ActivatedRoute, Router} from '@angular/router';
import {HttpEvent, HttpEventType} from '@angular/common/http';
import {AlertService} from '../../shared/alert/alert.service';
import {finalize} from 'rxjs/operators';
import {User} from '../../core/user/user';
import {environment} from '../../../environments/environment';
import {SecurityCommonsService} from '../../shared/services/security-commons.service';
import {HeaderService} from '../../core/header/header.service';
import {ImageCroppedEvent} from 'ngx-image-cropper';
import SwiperCore, {Virtual} from 'swiper/core';

SwiperCore.use([Virtual]);


@Component({
  selector: 'app-photo-form',
  templateUrl: './photo-form.component.html',
  styleUrls: ['./photo-form.component.scss']
})
export class PhotoFormComponent implements OnInit {

  photoForm: FormGroup;
  file: File;
  progress = 0;
  public: boolean = true;
  allowComments: boolean = true;
  avatar: string;
  user: User;
  imageChangedEvent: any = '';
  croppedImage;
  blockSubmit = false;
  cols;
  classSelectedCarousel;
  constructor(
    private alertService: AlertService,
    private photoService: PhotoService,
    private formBuilder: FormBuilder,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private securityCommons: SecurityCommonsService,
    public headerService: HeaderService,
    private el: ElementRef,
    private render: Renderer2
  ) {
    this.headerService.setCurrentSession('photo-form');
  }

  ngOnInit(): void {
    this.user = this.activatedRoute.snapshot.data.user;
    this.avatar = this.securityCommons.passSecurityUrl(this.user.user_avatar_url, environment.ApiUrl + 'storage/profile_default/default.png');
    this.photoForm = this.formBuilder.group({
      file: ['', Validators.required],
      description: ['', Validators.maxLength(300)]
    });
    this.resize();
  }
  selectItemCarousel(item: string): void{
    this.classSelectedCarousel = item;
  }
  resize(): void {
    if (window.innerWidth < 900) {
      this.cols = '3';
    } else {
      this.cols = '5';
    }
    window.addEventListener('resize', () => {
        if (window.innerWidth < 900) {
          this.cols = '4';
        } else {
          this.cols = '5';
        }
      }
    );
  }
  items(): any[] {
    return [
      '',
      'grayscale-circle',
      'saturate-circle',
      'sepia-circle',
      'invert-circle',
      'opacity-circle',
      'brightness-circle',
      'contrast-circle',
      'hue-rotate-circle',
      'blur-circle',
      'all-the-things-circle',
      'contrast-2-circle',
      'brightness-contrast-1-circle',
      'filter-2-circle',
      'filter-3-circle',
      'filter-4-circle',
      'filter-5-circle',
      'filter-6-circle',
      'filter-7-circle'
    ];
  }
  fileChangeEvent(event: any): void {
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

    while (n--) {
      u8arr[n] = bstr.charCodeAt(n);
    }

    return new File([u8arr], filename, {type: mime});
  }
  cropperReady(): void {
    // cropper ready
  }
  loadImageFailed(): void {
    // show message
  }
  getImageCropped(): void {
    this.blockSubmit = true;
    const file = this.base64ToFile(
      this.croppedImage,
      this.imageChangedEvent.target.files[0].name,
    );
    this.file = this.imageChangedEvent.target.files[0];
    this.upload(file);
  }
  upload(file: File): void {
    const description = this.photoForm.get('description').value;
    const allowComments = this.allowComments;
    console.log('submit ->>>>>' + this.classSelectedCarousel);
    this.photoService
      .upload(description, allowComments, this.public, file, this.classSelectedCarousel)
      .pipe(
        finalize(() => {
            this.blockSubmit = false;
            this.router.navigate(['']);
          }
        )
      )
      .subscribe(
        (event: HttpEvent<any>) => {

          if (event.type === HttpEventType.UploadProgress) {

            this.progress = Math.round(100 * event.loaded / event.total);

          } else if (event.type === HttpEventType.Response) {
            this.blockSubmit = false;
            this.alertService.success('Upload complete');
          }
        },
        err => {
          this.blockSubmit = false;
          this.alertService.danger('Failed to load the file, try later');
        }
      );
  }
  removeFile(): void {
    this.photoForm.get('file').reset();
  }
}
