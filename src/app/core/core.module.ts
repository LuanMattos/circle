import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {HTTP_INTERCEPTORS} from '@angular/common/http';

import {HeaderComponent} from './header/header.component';
import {RequestInterceptor} from './auth/request.interceptor';
import {AlertModule} from '../shared/alert/alert.module';
import {PhotoListModule} from '../photos/photo-list/photo-list.module';
import {UxModule} from './ux/ux-module';
import {ShowIsLoggedModule} from '../shared/directives/show-is-logged/show-is-logged.module';
import {AboutComponent} from '../home/footer/about/about.component';
import {PrivacyComponent} from '../home/footer/privacy/privacy.component';
import {TermsComponent} from '../home/footer/terms/terms.component';
import {SearchComponent} from './search/search.component';
import {FooterComponent} from './footer/footer.component';
import {InfiniteScrollModule} from 'ngx-infinite-scroll';
import {MonetizationComponent} from '../home/footer/monetization/monetization.component';
import {DialogModule} from '../photos/photo-detail/dialog/dialog.module';


@NgModule({
  declarations: [
    HeaderComponent,
    AboutComponent,
    PrivacyComponent,
    TermsComponent,
    MonetizationComponent,
    SearchComponent,
    FooterComponent
  ],
    imports: [
        CommonModule,
        RouterModule,
        AlertModule,
        PhotoListModule,
        UxModule,
        ShowIsLoggedModule,
        InfiniteScrollModule,
        DialogModule
    ],
  exports: [
    HeaderComponent,
    FooterComponent,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: RequestInterceptor,
      multi: true
    }
  ]
})
export class CoreModule{}
