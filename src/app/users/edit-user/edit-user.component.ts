import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { IUser } from 'src/app/user';
import { UserService } from '../user.service.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit, OnDestroy {

  userId;
  userName;

  userSubscription: Subscription;
  user: IUser;
  allowEdit;

  constructor(private router: Router,
    private route: ActivatedRoute,
    private userService: UserService) { }

  ngOnInit() {
    console.log("enter");
    this.userSubscription  = this.route.params.subscribe(
      (params: Params) => {
        this.user = this.userService.getUser(+params['id']);
      });
      this.route.queryParams.subscribe(
        (queryParams: Params) => {
          this.allowEdit = queryParams['allowEdit'] === '1' ? true : false;
        }
      );
      this.userId = this.user.id ;
      this.userName = this.user.name;
      console.log(this.user.name); 
  }

  onSave(){

  }
  ngOnDestroy(): void{
    this.userSubscription.unsubscribe();
  }

}
