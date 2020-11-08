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
}
