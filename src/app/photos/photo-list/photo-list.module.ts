import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";

import {PhotoListComponent} from "./photo-list.component";
import {FilterByDescription} from "./filter-by-description.pipe";
import {PhotosComponent} from "./photos/photos.component";
import {LoadButtonComponent} from "./load-button/load-button.component";
import {PhotoModule} from "../photo/photo.module";
import {CardModule} from "../../shared/card/card.module";
import {SearchComponent} from "./search/search.component";
import {DarkenOnHoverModule} from "../../shared/directives/dark-on-hover/darken-on-hover.module";
import {UxModule} from "../../core/ux/ux-module";
import {ShowIsLoggedModule} from "../../shared/directives/show-is-logged/show-is-logged.module";
import {PhotoDetailModule} from '../photo-detail/photo-detail.module';
import {LikeModule} from '../../shared/like/like.module';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import {SettingProfileComponent} from './setting-profile/setting-profile.component';
import {ReactiveFormsModule} from '@angular/forms';
import {VmessageModule} from '../../shared/vmessage/vmessage.module';
import {PhotoOwnerOnlyModule} from '../../shared/directives/owner-only/photo-owner-only.module';


@NgModule({
  declarations: [
    PhotoListComponent,
    FilterByDescription,
    PhotosComponent,
    LoadButtonComponent,
    SearchComponent,
    SettingProfileComponent
  ],
  exports: [
    PhotosComponent,
    SearchComponent
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
        InfiniteScrollModule,
        ReactiveFormsModule,
        VmessageModule,
        PhotoOwnerOnlyModule
    ]
})
export class PhotoListModule{}

