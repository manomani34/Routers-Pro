import { Injectable } from '@angular/core';
import { IUser } from '../user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  users: IUser [] = [
    
    {id: 1, name: 'mahi'},
    {id: 2, name: 'reza'},
    {id: 3, name: 'mahdi'}      
    
  ]
  
  constructor() { }

  getUsers(){
  return this.users;
  }

  getUser(id: number){
    const user = this.users.find(
      // (u) => is like function(u) in javascript
      (u) => {
        return u.id === id;
      }
    );
    return user;
  }
}
