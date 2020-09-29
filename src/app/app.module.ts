import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AccuntsComponent } from './accunts/accunts.component';
import { UsersComponent } from './users/users.component';
import { EditUserComponent } from './users/edit-user/edit-user.component';
import { UserComponent } from './users/user/user.component';
import { UserService } from './users/user.service.service';
import { FormsModule } from '@angular/forms';
import { LoginServiceService } from './login-service.service';
import { AuthGuardService } from './auth-guard.service';




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
    AppRoutingModule
  ],
  // provide services 
  providers: [UserService, AuthGuardService, LoginServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
