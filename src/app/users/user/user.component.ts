import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
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
  user: IUser;

  constructor(private route: ActivatedRoute,
    private userService: UserService) { }

  ngOnInit(): void {
    // this.user.id = this.route.snapshot.params['id'];
    // this.user.name = this.route.snapshot.params['name'];
    // this.usersubscription= this.route.params.subscribe(
    //   (params: Params) => {
    //     this.user.id = params['id'];
    //     this.user.name = params['name'];
    //   }
    // );    
    //'+' convert string to number!
    this.user = this.userService.getUser(+this.route.snapshot.params['id']);
  }

  ngOnDestroy(){
    this.usersubscription.unsubscribe();
  }

}
