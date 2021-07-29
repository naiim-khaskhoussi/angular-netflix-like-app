import { Injectable } from '@angular/core';
import { LoginInfo } from '../interfaces/login-info';
import { Role, User } from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  users: User[] = [
    {
      username: "hama",
      password: "test",
      role: Role.ADMIN,
      following: ["colombia"],
      followers: []
    },
    {
      username: "colombia",
      password: "test",
      role: Role.SUBSCRIBER,
      following: [],
      followers: ["hama", "naiim", "sbeaa"]
    }
  ]

  constructor() { }

  getLoggedUser() {
    return localStorage.getItem("user");
  }

  getUser(username: string) {
    let filteredUsers = this.users
      .filter(user => user.username==username);
    console.log(filteredUsers);
    if (filteredUsers.length == 0 || username==null)
      return {} as User; 
    return filteredUsers[0];
  }

  setLoggedUser(username: string) {
    localStorage.setItem("user", username);
  }

  authenticate(login: LoginInfo) {
    let user = this.getUser(login.username);
    if (user) {
      localStorage.setItem("user", user.username);
      return user.password == login.password;
    } return false;
    
  }

  follow(follower: string, following: string) {
    this.users.forEach(user => {
      if (user.username == following)
        user.followers.push(follower);
      if (user.username == follower) 
        user.following.push(following);
    })
  }

  logOutUser() {
    localStorage.removeItem("user");
  }

}
