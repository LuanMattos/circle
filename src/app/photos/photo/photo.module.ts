import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import {PhotoComponent} from './photo.component';
import {InViewportModule} from "angular-inviewport";
import {InViewportModule} from "@thisissoon/angular-inviewport";

@NgModule({
  declarations:[
    PhotoComponent
  ],
  exports:[
    PhotoComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    InViewportModule,
    InViewportModule
  ]
})
export class PhotoModule{

}
