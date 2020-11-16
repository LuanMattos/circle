import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";

import {PhotoListTimelineComponent} from "./photo-list-timeline.component";
import {FilterByDescription} from "./filter-by-description.pipe";
import {PhotosComponent} from "./photos/photos.component";
import {PhotoModule} from "../photo/photo.module";
import {CardModule} from "../../shared/card/card.module";
import {DarkenOnHoverModule} from "../../shared/directives/dark-on-hover/darken-on-hover.module";
import {UxModule} from "../../core/ux/ux-module";
import {ShowIsLoggedModule} from "../../shared/directives/show-is-logged/show-is-logged.module";
import {PhotoDetailModule} from '../photo-detail/photo-detail.module';
import {LikeModule} from '../../shared/like/like.module';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';


@NgModule({
  declarations: [
    PhotoListTimelineComponent,
    FilterByDescription,
    PhotosComponent
  ],
  exports: [
    PhotosComponent
  ],
  imports: [
    CommonModule,
    PhotoModule,
    CardModule,
    DarkenOnHoverModule,
    UxModule,
    RouterModule,
    ShowIsLoggedModule,
    PhotoDetailModule,
    LikeModule,
    InfiniteScrollModule
  ]
})
export class PhotoListTimelineModule{}

