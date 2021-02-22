import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import {MonetizationDashComponent} from './monetization-dash.component';

@NgModule({
  declarations: [
    MonetizationDashComponent
  ],
  exports: [
    MonetizationDashComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule
  ]
})
export class MonetizationDashModule {

}
