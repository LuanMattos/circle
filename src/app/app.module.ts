
import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';


import {AppRoutingModule} from './app.routing.module';
import {AppComponent} from './app.component';
import {PhotosModule} from './photos/photos.module';
import {CoreModule} from './core/core.module';
import {SpinnerService} from './shared/spinner/spinner.service';
import {NgxLoadingModule} from 'ngx-loading';
import {AngularFireModule} from '@angular/fire';
import {environment} from '../environments/environment';



@NgModule({

  declarations: [
    AppComponent
  ],

  imports: [
    AngularFireModule.initializeApp (environment.firabase),
    BrowserModule,
    AppRoutingModule,
    PhotosModule,
    CoreModule,
    BrowserAnimationsModule,
    NgxLoadingModule.forRoot({})

  ],
  providers: [
    SpinnerService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
