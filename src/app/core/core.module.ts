import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {HTTP_INTERCEPTORS} from "@angular/common/http";

import {HeaderComponent} from "./header/header.component";
import {RequestInterceptor} from "./auth/request.interceptor";
import {FooterComponent} from "./footer/footer.component";
import {AlertModule} from "../shared/alert/alert.module";
import {PhotoListModule} from '../photos/photo-list/photo-list.module';

@NgModule({
  declarations:[
    HeaderComponent,
    FooterComponent
  ],
    imports: [
        CommonModule,
        RouterModule,
        AlertModule,
        PhotoListModule
    ],
  exports:[
    HeaderComponent,
    FooterComponent
  ],
  /** Apartir de agora, o Angular 'não manda mais nas rotas' e sim nosso request.interceptor **/
  providers:[
    {
      provide:HTTP_INTERCEPTORS,
      useClass:RequestInterceptor,
      multi:true
    }
  ]
})
export class CoreModule{}
