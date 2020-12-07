/** System */
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AuthGuard} from '../core/auth/auth.guard';

/** Components */
import {HomeComponent} from './home.component';
import {SignInComponent} from './signin/signin.component';
import {SignUpComponent} from './signup/signup.component';

/** Resolvers */

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: '',
        component: SignInComponent,
        canActivate: [AuthGuard],
        data: {
          title: 'Sign In'
        }
      },
      {
        path: 'signup',
        component: SignUpComponent,
        data: {
          title: 'Sign Up'
        }
      },
    ]
  },

];
@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [RouterModule]
})
export class HomeRoutingModule{

}
