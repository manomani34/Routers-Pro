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
import { FormsModule } from '@angular/forms';


const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'users', component: UsersComponent , children: [
  {path:':id', component: UserComponent},  
  {path:':id/edit', component: EditUserComponent}
  ]},    
  // {path:'users/:id/:name', component: UserComponent},
  {path:'accounts', component: AccuntsComponent},
  {path:'accounts/:id/edit', component: EditAccountComponent}
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
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes)
  ],
  // provide services 
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
