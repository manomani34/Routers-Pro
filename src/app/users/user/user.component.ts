import { Route } from '@angular/compiler/src/core';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router, RouterLink, RouterPreloader } from '@angular/router';
import { Subscription } from 'rxjs';
import { IUser } from '../../user'
import { UserService } from '../user.service.service';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']  
})



export class UserComponent implements OnInit, OnDestroy {
  usersubscription: Subscription;
  users: IUser [] = [{id: 0 , name:''}];
  user: IUser;

  constructor(private route: ActivatedRoute,
    private router: Router,
    private userService: UserService) { }

  ngOnInit(): void {
    //  this.user.id = this.route.snapshot.params['id'];
    //  this.user.name = this.route.snapshot.params['name'];
    //  this.usersubscription= this.route.params.subscribe(
    //    (params: Params) => {
    //     this.user.id = params['id'];
    //     this.user.name = params['name'];
    //    }
    //  );    
    //'+' convert string to number!
    this.usersubscription = this.route.params.subscribe(
      (params: Params) => {
        this.user = this.userService.getUser(+params['id'])
      });
    //  this.user = this.userService.getUser(+this.route.snapshot.params['id']);
    
  }


  editUser(){
    this.router.navigate(['edit'] , {relativeTo: this.route});
  }

  ngOnDestroy(){
    this.usersubscription.unsubscribe();
  }

 

}
