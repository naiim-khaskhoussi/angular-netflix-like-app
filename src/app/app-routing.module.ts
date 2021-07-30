import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExploreComponent } from './explore/explore.component';
import { ProfileSettingsComponent } from './profile-settings/profile-settings.component';
import { SigninFormComponent } from './signin-form/signin-form.component';
import { SignupFormComponent } from './signup-form/signup-form.component';
import { UserProfileComponent } from './user-profile/user-profile.component';

const routes: Routes = [
  { path: 'login', component: SigninFormComponent },
  { path: 'signup', component: SignupFormComponent },
  { path: 'explore', component: ExploreComponent },
  { path: 'settings', component: ProfileSettingsComponent },
  //{ path: 'profile', component: UserProfileComponent },
  { path: ':username', component: UserProfileComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
