import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccuntsComponent } from './accunts/accunts.component';
import { EditAccountComponent } from './accunts/edit-account/edit-account.component';
import { AuthGuardService } from './auth-guard.service';
import { CanDeactivateGuardService } from './can-deactivate-guard.service';
import { ErrorPageComponent } from './error-page/error-page.component';
import { HomeComponent } from './home/home.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { EditUserComponent } from './users/edit-user/edit-user.component';
import { UserComponent } from './users/user/user.component';
import { UsersComponent } from './users/users.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  // canActivate check that user have access to component or not
  {
    path: 'users',
    //  canActivate: [AuthGuardService],
    canActivateChild: [AuthGuardService],
    component: UsersComponent,
    children: [
      { path: ':id', component: UserComponent },
      { path: ':id/edit', canDeactivate: [CanDeactivateGuardService], component: EditUserComponent }]
  },
  // {path:'users/:id/:name', component: UserComponent},
  { path: 'accounts', component: AccuntsComponent },
  { path: 'accounts/:id/edit', component: EditAccountComponent },
  //manage not font pages
  // { path: 'not-found', component: NotfoundComponent },
  { path: 'not-found', component: ErrorPageComponent, data:{message: 'page not found!'} },
  { path: '**', redirectTo: '/not-found' }
];

@NgModule({
  // imports: [RouterModule.forRoot(routes, {useHash: true})],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
