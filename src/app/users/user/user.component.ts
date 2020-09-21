import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { IUser } from '../../user'
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']  
})
export class UserComponent implements OnInit, OnDestroy {

  user: IUser = {id:0 , name:''};
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.user.id = this.route.snapshot.params['id'];
    this.user.name = this.route.snapshot.params['name'];
    this.route.params.subscribe(
      (params: Params) => {
        this.user.id = params['id'];
        this.user.name = params['name'];
      }
    );
  }

  ngOnDestroy(){
    
  }

}
