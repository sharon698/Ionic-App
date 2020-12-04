import { Injectable } from '@angular/core';
import { Users } from '../models/Profiles'

@Injectable({
  providedIn: 'root'
})
export class DataService {

  users: Users[] = []
  private currentUser: Users;

  constructor() { }

  addUser(f_name, l_name, email, psw) {
    this.users.push({
      first_name: f_name,
      last_name: l_name,
      email: email,
      password: psw
    })
  }

  getUsers() {
    return this.users;
  }

  setCurrentUser(user){
    this.currentUser = user
  }

  getCurrentUser(){
    return this.currentUser
  }
}
