/** System */
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

/** Class */
import {PhotoListComponent} from './photos/photo-list/photo-list.component';
import {PhotoFormComponent} from './photos/photo-form/photo-form.component';
import {NotFoundComponent} from './errors/not-found/not-found.component';
import {AuthRequiredGuard} from './core/auth/auth-required.guard';


/** Resolvers */
import {PhotoListResolver} from './photos/photo-list/photo-list.resolver';
import {PhotoDetailComponent} from './photos/photo-detail/photo-detail.component';
import {PhotoListTimelineResolver} from './photos/photo-list-timeline/photo-list-timeline.resolver';
import {SettingProfileComponent} from './photos/photo-list/setting-profile/setting-profile.component';
import {UserResolver} from './core/user/user.resolver';
import {ConfirmationComponent} from './confirmation/confirmation.component';
import {ChangePasswordComponent} from './change-password/change-password.component';
import {PhotoListToExplorerResolver} from './photos/photo-list/photo-list-to-explorer.resolver';
import {FollowersComponent} from './photos/photo-list/followers/followers.component';
import {FollowerResolver} from './core/follower/follower.resolver';
import {FollowingComponent} from './photos/photo-list/following/following.component';
import {FollowingResolver} from './core/following/following.resolver';
import {AboutComponent} from './home/footer/about/about.component';
import {PrivacyComponent} from './home/footer/privacy/privacy.component';
import {TermsComponent} from './home/footer/terms/terms.component';
import {SearchComponent} from './core/search/search.component';
import {MonetizationComponent} from './home/footer/monetization/monetization.component';
import {MonetizationDashComponent} from './photos/monetization-dash/monetization-dash.component';
import {MonetizaionResolver} from './core/monetization/monetizaion.resolver';
import { PhotoCommentsComponent } from './photos/photo-detail/photo-comments/photo-comments.component';


const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home',
    data: {
      title: ''
    }
  },
  {
    path: 'home',
    loadChildren: () => import('src/app/home/home.module').then(m => m.HomeModule),
    data: {
      animation: 'HomePage',
      title: 'Home'
    }
  },
  {
    path: 'timeline/:userName',
    component: PhotoListComponent,
    canActivate: [AuthRequiredGuard],
    resolve: {
      photos: PhotoListTimelineResolver,
      user: UserResolver
    },
    data: {
      animation: 'AboutPage',
      title: 'Timeline',
      isTimeline: true
    }
  },
  {
    path: 'i/:userName',
    component: PhotoListComponent,
    pathMatch: 'full',
    resolve: {
      photos: PhotoListResolver,
      user: UserResolver
    },
    data: {
      animation: 'AboutPage',
      title: 'Timeline',
      isProfile:true
    }
  },
  {
    path: 'add/:userName',
    component: PhotoFormComponent,
    canActivate: [AuthRequiredGuard],
    resolve: {
      user: UserResolver
    },
    data: {
      animation: 'HomePage',
      title: 'Add Photo'
    }
  },
  {
    path: 'p/:photoId',
    component: PhotoDetailComponent,
    data: {
      animation: 'HomePage',
      title: 'Detail Photo',
      isDetail: true
    },
  },
  {
    path: 'photo-comments/:photoId',
    component: PhotoCommentsComponent,
    data: {
      animation: 'HomePage',
      title: 'Comments Photo',
      isPhotoComments: true
    },
  },
   {
    path: 'search',
    component: SearchComponent,
    data: {
      animation: 'HomePage',
      title: 'Search user'
    },
  },
  {
    path: 'setting/:userName',
    component: SettingProfileComponent,
    canActivate: [AuthRequiredGuard],
    resolve: {
      user: UserResolver
    },
    data: {
      animation: 'HomePage',
      title: 'Setting Profile'
    },
  },
  {
    path: 'confirmation/:userName',
    component: ConfirmationComponent,
    data: {
      title: 'Confirmation account'
    }
  }, {
    path: 'change-password/:code',
    component: ChangePasswordComponent,
    data: {
      title: 'Change'
    }
  },
  {
    path: 'to-explore',
    component: PhotoListComponent,
    canActivate: [AuthRequiredGuard],
    resolve: {
      photos: PhotoListToExplorerResolver
    },
    data: {
      title: 'Explorer Photos Circle',
      isToExplorer: true
    }
  }, {
    path: 'followers/:userName',
    component: FollowersComponent,
    resolve: {
      user: UserResolver,
      follower: FollowerResolver
    },
    data: {
      title: 'Followers'
    }
  }, {
    path: 'followings/:userName',
    component: FollowingComponent,
    resolve: {
      user: UserResolver,
      following: FollowingResolver
    },
    data: {
      title: 'Followers'
    }
  }, {
    path: 'about',
    component: AboutComponent,
    data: {
      title: 'About'
    }
  },
  {
    path: 'monetization-dash',
    component: MonetizationDashComponent,
    canActivate: [AuthRequiredGuard],
    resolve: {
      monetization: MonetizaionResolver
    },
    data: {
      title: 'Monetization Dashboard'
    }
  },
  {
    path: 'privacy',
    component: PrivacyComponent,
    data: {
      title: 'Privacy'
    }
  }, {
    path: 'terms',
    component: TermsComponent,
    data: {
      title: 'Terms and Condition'
    }
  },
  {
    path: 'monetization',
    component: MonetizationComponent,
    data: {
      title: 'Monetization'
    }
  },
  {
    path: 'not-found',
    component: NotFoundComponent,
    data: {
      title: 'Page not-found'
    }
  },
  {
    path: '**',
    redirectTo: 'not-found'
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabled'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
