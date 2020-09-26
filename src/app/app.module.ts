import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AccuntsComponent } from './accunts/accunts.component';
import { UsersComponent } from './users/users.component';
import { RouterModule, Routes } from '@angular/router';
import { EditUserComponent } from './users/edit-user/edit-user.component';
import { UserComponent } from './users/user/user.component';
import { EditAccountComponent } from './accunts/edit-account/edit-account.component';
import { UserService } from './users/user.service.service';


const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'users', component: UsersComponent},  
  // {path:':id', component: UsersComponent},  
  // {path:':id/edit', component: EditUserComponent},
  // {path:':id/:name', component: UsersComponent},
  {path:'accounts', component: AccuntsComponent}
  // {path:'accounts/:id/edit', component: EditAccountComponent}
];
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AccuntsComponent,
    UsersComponent,
    EditUserComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes)
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
