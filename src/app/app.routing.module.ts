/** System */
import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";

/** Class */
import {PhotoListComponent} from "./photos/photo-list/photo-list.component";
import {PhotoFormComponent} from "./photos/photo-form/photo-form.component";
import {NotFoundComponent} from "./errors/not-found/not-found.component";
import {AuthRequiredGuard} from "./core/auth/auth-required.guard";


/** Resolvers */
import {PhotoListResolver} from "./photos/photo-list/photo-list.resolver";
import {PhotoDetailComponent} from "./photos/photo-detail/photo-detail.component";
import {PhotoListTimelineComponent} from './photos/photo-list-timeline/photo-list-timeline.component';
import {PhotoListTimelineResolver} from './photos/photo-list-timeline/photo-list-timeline.resolver';


const routes:Routes = [
  {
    path:'',
    pathMatch:'full',
    redirectTo:'home',
    data: {
      title:''
    }
  },
  {
    path:'home',
    loadChildren:() => import('src/app/home/home.module').then(m => m.HomeModule),
    data: {
      animation: 'HomePage',
      title:'Home'
    }
  },
  {
    path:'timeline/:userName',
    component:PhotoListTimelineComponent,
    resolve:{
      photos:PhotoListTimelineResolver
    },
    data: {
      animation: 'AboutPage',
      title:'Timeline'
    }
  },
  {
    path:'user/:userName',
    component:PhotoListComponent,
    resolve:{
      photos:PhotoListResolver
    },
    data: {
      animation: 'AboutPage',
      title:'Timeline'
    }
  },
  {
    path:'p/add',
    component:PhotoFormComponent,
    canActivate:[AuthRequiredGuard],
    data: {
      animation: 'HomePage',
      title:'Add Photo'
    }
  },
  {
    path:'p/:photoId',
    component:PhotoDetailComponent,
    data: {
      animation: 'HomePage',
      title:'Detail Photo'
    },
  },
  {
    path:'not-found',
    component:NotFoundComponent,
    data:{
      title:'Page not-found'
    }
  },
  {
    path:'**',
    redirectTo:'not-found',

  },

];
@NgModule({
  imports:[ RouterModule.forRoot(routes) ],
  exports:[RouterModule]
})
export class AppRoutingModule{

}
