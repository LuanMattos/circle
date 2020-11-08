import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {FormBuilder} from "@angular/forms";

import {PhotoService} from "../../photo/photo.service";
import {Comments} from '../../comments/comments';

@Component({
  selector: 'app-photo-comments',
  templateUrl: 'photo-comments.component.html',
  styleUrls: ['photo-comments.scss']
})
export class PhotoCommentsComponent implements OnInit {
  @Input() comments:Comments[];
  @Input() photoId:number;
  @Input() viewComponent:boolean = true;
  userName:string;
  filter:string;
  hasMore:boolean = true;
  currentPage:number = 1;

  constructor(
    private router:Router,
    private formBuilder:FormBuilder,
    private activatedRoute:ActivatedRoute,
    private photoService: PhotoService) {
  }

  ngOnInit():void {
    const photoId  = this.activatedRoute.snapshot.params.photoId;
    this.photoService.getComments(photoId)
      .subscribe(response=>this.comments = response)

  }
  load(){
    this.photoService
      .listFromCommentsPaginated(this.photoId,this.comments.length)
      .subscribe(
        comments=>{
          this.filter = '';
          this.comments = this.comments.concat(comments);
          if(!comments.length) this.hasMore = false;
        }
      )
  }
}
