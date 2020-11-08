import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {switchMap, tap} from 'rxjs/operators';

import {PhotoService} from '../photo/photo.service';
import {Comments} from './comments';
import {UserService} from '../../core/user/user.service';

@Component({
  selector: 'app-comments-form',
  templateUrl: './comments-form.component.html',
  styleUrls: ['./comments-form.component.css'],
})
export class CommentsFormComponent implements OnInit{

  @Output() comments = new EventEmitter<Comments[]>();
  @Input() viewComponent:boolean;
  @Input() photoId:number;
  form:FormGroup;
  @Output() viewFormComment:EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor(
    private router:Router,
    private formBuilder:FormBuilder,
    private activatedRoute:ActivatedRoute,
    private photoService: PhotoService,
    private userService: UserService
  ) { }

  ngOnInit():void {
    this.form = this.formBuilder.group({
      comment:[
        '',
        [Validators.maxLength(2000),Validators.required]
      ]
    })
  }

  save(){
    const comment = this.form.get('comment').value as string;

    this.photoService
      .addComment(this.photoId,comment,this.userService.getUserName())
      .pipe(switchMap(()=>this.photoService.getComments(this.photoId)))
      .pipe(tap(()=>{
        this.form.reset();
        this.viewComponent = false;
      }))
      .subscribe(result => this.comments.emit(result))

  }
  emitEvent(){
      this.viewFormComment.emit(!this.viewComponent)
  }
}
