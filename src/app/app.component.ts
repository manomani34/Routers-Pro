import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
// /Test
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor (private router: Router){}

  title = 'Routers-Pro';
  // sample of routing
  ngOnInit(){
    setTimeout(() => {
      this.router.navigate(["/users"]);
    }, 5000);
  }
  
}
