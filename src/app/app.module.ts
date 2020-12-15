
import {BrowserModule} from '@angular/platform-browser';
import {APP_INITIALIZER, NgModule} from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';


import {AppRoutingModule} from './app.routing.module';
import {AppComponent} from './app.component';
import {PhotosModule} from './photos/photos.module';
import {CoreModule} from './core/core.module';
import {SpinnerService} from './shared/spinner/spinner.service';
import {NgxLoadingModule} from 'ngx-loading';
import {ShowIsLoggedModule} from './shared/directives/show-is-logged/show-is-logged.module';
import {ConfirmationModule} from './confirmation/confirmation.module';
import {AuthService} from './core/auth/auth.service';
import {appInitializer} from './shared/initializer/app.initializer';



@NgModule({

  declarations: [
    AppComponent
  ],

    imports: [
        BrowserModule,
        AppRoutingModule,
        PhotosModule,
        CoreModule,
        ConfirmationModule,
        BrowserAnimationsModule,
        NgxLoadingModule.forRoot({}),
        ShowIsLoggedModule
    ],
  providers: [
    { provide: APP_INITIALIZER, useFactory: appInitializer, multi: true, deps: [AuthService] },
    SpinnerService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
