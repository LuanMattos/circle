import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {ReactiveFormsModule} from "@angular/forms";
import {FormsModule} from "@angular/forms";


import {SignInComponent} from "./signin/signin.component";
import {VmessageModule} from "../shared/vmessage/vmessage.module";
import {SignUpComponent} from "./signup/signup.component";
import {HomeComponent} from "./home.component";
import {HomeRoutingModule} from "./home.routing.module";
import {SignupService} from "./signup/signup.service";
import {UxModule} from "../core/ux/ux-module";

@NgModule({
  declarations:[
    SignInComponent,
    SignUpComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    VmessageModule,
    UxModule,
    RouterModule,
    HomeRoutingModule
  ],
  providers:[SignupService]
})
export class HomeModule{}
