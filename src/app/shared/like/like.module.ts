import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {LikeComponent} from './like.component';

@NgModule({
  declarations:[
    LikeComponent
  ],
  exports:[
    LikeComponent
  ],
  imports:[
    CommonModule
  ],
})
export class LikeModule{}
