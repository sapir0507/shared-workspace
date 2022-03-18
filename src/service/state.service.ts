import { Injectable } from '@angular/core';
import { User } from '../app.interface';

const USERS:User[] = [
  {
    id: 1,
    username: "xeno",
    password: "1234",
    fullName: "sapir shahar",
    email: "randomEmail@gmail.com",
    phone: 0o502224163
  }
];

@Injectable({
  providedIn: 'root'
})
export class SerivceService {
  allUsers: User[] = USERS;
  
  constructor() { }

  addNewUser(user: User){
    this.allUsers.push(user);
  }
}
