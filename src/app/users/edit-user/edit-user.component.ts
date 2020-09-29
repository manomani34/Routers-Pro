import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { canComponentDeactivate } from 'src/app/can-deactivate-guard.service';
import { IUser } from 'src/app/user';
import { UserService } from '../user.service.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit, OnDestroy, canComponentDeactivate {

  userId;
  userName;

  userSubscription: Subscription;
  user: IUser;
  allowEdit;
  saveChanges = false;

  constructor(private router: Router,
    private route: ActivatedRoute,
    private userService: UserService) { }

  ngOnInit() {
    console.log("enter");
    this.userSubscription = this.route.params.subscribe(
      (params: Params) => {
        this.user = this.userService.getUser(+params['id']);
      });
    this.route.queryParams.subscribe(
      (queryParams: Params) => {
        this.allowEdit = queryParams['allowEdit'] === '1' ? true : false;
      }
    );
    this.userId = this.user.id;
    this.userName = this.user.name;
    console.log(this.user.name);
  }

  onSave() {
    this.user.id = this.user.id;
    this.user.name = this.userName;
    this.userService.updateUser(this.userId, this.user);
    this.saveChanges = true;
    this.router.navigate(['../'] , {relativeTo: this.route});
  }

  canDeactivate(): boolean | Observable<boolean> | Promise<boolean>{
    if(!this.allowEdit){
      return true;
    }
    if((this.userId !== this.user.id || this.userName !== this.user.name ) && !this.saveChanges){
      return confirm('Do you want to navigate without saving?');
    }
    else{
      return true;
    }
  }

  ngOnDestroy(): void {
    this.userSubscription.unsubscribe();
  }

}
