import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import {CronComponent} from './cron.component';

@NgModule({
  declarations: [
    CronComponent
  ],
  exports: [
    CronComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule
  ]
})
export class CronModule{

}
