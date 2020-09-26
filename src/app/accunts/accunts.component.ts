import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IUser } from '../user';

@Component({
  selector: 'app-accunts',
  templateUrl: './accunts.component.html',
  styleUrls: ['./accunts.component.css']
})
export class AccuntsComponent implements OnInit {

  users: IUser [] = [
    
    {id: 1, name: 'ali'},
    {id: 2, name: 'reza'},
    {id: 3, name: 'mahdi'}      
    
  ];
  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  onclick(id: number){
    this.router.navigate(['/accounts' , id , 'edit'] , {queryParams: {allowEdit:1} , fragment:'paragraph1'})
  }

}
