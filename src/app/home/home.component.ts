import { Component, OnInit } from '@angular/core';
import { LoginServiceService } from '../login-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private loginnservice: LoginServiceService) { }

  ngOnInit(): void {
  }

  onLogin(){
    this.loginnservice.login();
  }
  
  onLogout(){
this.loginnservice.logout();
  }
}
