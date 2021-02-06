import {NgModule} from '@angular/core';
import {DialogComponent} from './dialog.component';
import {CommonModule} from '@angular/common';
import {FormsModule} from "@angular/forms";
import {MatDialogModule} from "@angular/material/dialog";
import {PhotoModule} from "../../photos/photo/photo.module";
import {LikeModule} from "../like/like.module";
import {CardModule} from "../card/card.module";
import {DarkenOnHoverModule} from "../directives/dark-on-hover/darken-on-hover.module";
import {RouterModule} from "@angular/router";
import {ShowIsLoggedModule} from "../directives/show-is-logged/show-is-logged.module";
import {PhotoDetailModule} from "../../photos/photo-detail/photo-detail.module";
import {UxModule} from "../../core/ux/ux-module";
import {PhotoOwnerOnlyModule} from "../directives/owner-only/photo-owner-only.module";
@NgModule({
  declarations: [
    DialogComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    MatDialogModule,
    PhotoModule,
    LikeModule,
    CardModule,
    DarkenOnHoverModule,
    RouterModule,
    ShowIsLoggedModule,
    PhotoDetailModule,
    UxModule,
    PhotoOwnerOnlyModule
  ],
  exports: [
    DialogComponent
  ]
})
export class DialogModule{

}
