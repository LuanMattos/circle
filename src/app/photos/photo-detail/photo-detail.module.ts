import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {ReactiveFormsModule} from '@angular/forms';

import {PhotoDetailComponent} from './photo-detail.component';
import {PhotoModule} from '../photo/photo.module';
import {PhotoCommentsComponent} from './photo-comments/photo-comments.component';
import {VmessageModule} from '../../shared/vmessage/vmessage.module';
import {UxModule} from '../../core/ux/ux-module';
import {PhotoOwnerOnlyModule} from '../../shared/directives/owner-only/photo-owner-only.module';
import {ShowIsLoggedModule} from '../../shared/directives/show-is-logged/show-is-logged.module';
import {CommentsFormComponent} from '../comments/comments-form.component';
import {LikeModule} from '../../shared/like/like.module';


@NgModule({
  declarations: [
    PhotoDetailComponent,
    PhotoCommentsComponent,
    CommentsFormComponent
  ],
  exports: [
    PhotoDetailComponent,
    PhotoCommentsComponent,
    CommentsFormComponent
  ],
  imports: [
    CommonModule,
    PhotoModule,
    RouterModule,
    ReactiveFormsModule,
    VmessageModule,
    UxModule,
    PhotoOwnerOnlyModule,
    ShowIsLoggedModule,
    LikeModule
  ]
})
export class PhotoDetailModule{}
