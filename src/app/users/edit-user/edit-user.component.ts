import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { IUser } from 'src/app/user';
import { UserService } from '../user.service.service';
import { UsersComponent } from '../users.component';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {

  @ViewChild('userId') userId: ElementRef;
  @ViewChild('userName') userName :ElementRef;

  userSubscription: Subscription;
  user: IUser;
  constructor(private router: Router,
    private route: ActivatedRoute,
    private userService: UserService) { }

  ngOnInit(): void {
    this.userSubscription  = this.route.params.subscribe(
      (params: Params) => {
        this.user = this.userService.getUser(+params['id']);
      });
      this.userId.nativeElement.value = this.user.id ;
      this.userName.nativeElement.value = this.user.name;
  }

  onSave(){

  }

}
