import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {PhotoService} from "../photo/photo.service";
import {Router} from "@angular/router";
import {HttpEvent, HttpEventType} from "@angular/common/http";
import {AlertService} from "../../shared/alert/alert.service";
import {finalize} from "rxjs/operators";

@Component({
  selector: 'app-photo-form',
  templateUrl: './photo-form.component.html',
  styleUrls: ['./photo-form.component.scss']
})
export class PhotoFormComponent implements OnInit {

  photoForm:FormGroup;
  file:File;
  preview:string;
  progress = 0;
  public:boolean = true;
  allowComments:boolean = true;

  constructor(
    private alertService:AlertService,
    private photoService:PhotoService,
    private formBuilder:FormBuilder,
    private router:Router
    ) { }

  ngOnInit(): void {
    this.photoForm = this.formBuilder.group({
      file:['',Validators.required],
      description:['',Validators.maxLength(300)]
    })
  }

  upload(){
    const description = this.photoForm.get('description').value;
    const allowComments = this.allowComments;
    const _public = this.public;

    this.photoService
      .upload( description,allowComments,_public,this.file )
      .pipe(
            finalize(() => {
            this.router.navigate([''])
          }
        )
      )
      .subscribe(
        ( event:HttpEvent<any> ) => {

            if( event.type == HttpEventType.UploadProgress ){

              this.progress = Math.round(100 * event.loaded / event.total);

            }else if( event.type == HttpEventType.Response ){
              this.alertService.success('Upload completo');
            }
      },
      err => {
          console.log(err)
          this.alertService.danger('Falha ao carregar o arquivo, tente mais tarde')
        }
      )
  }
  handleFile(file:File){
    /** Convertemos nossa imagem para base64 data:.... **/
      this.file = file;
      const reader = new FileReader();
      reader.onload = (event:any) => this.preview = event.target.result;
      reader.readAsDataURL(file);
  }
  removeFile(){
    this.photoForm.get('file').reset()
    this.preview = null
  }

}
