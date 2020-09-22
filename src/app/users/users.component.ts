import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IUser } from '../user';
import { UserService } from './user.service.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users: IUser[] =[{id: 0 , name: ''}];
  constructor(private router: Router ,
     private route:ActivatedRoute,
     private userService:UserService) { }

  ngOnInit(): void {
    this.users = this. userService.getUsers();
  }
  onClick(){
    this.router.navigate(['/accounts'] , {relativeTo: this.route})
  }

}
