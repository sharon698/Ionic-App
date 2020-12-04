import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { DataService } from '../services/data.service'
import { Users } from '../models/Profiles'

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  email: string = "";
  psw = ""
  isValid = true;

  constructor(private router: Router, private dataService: DataService) { }

  ngOnInit() {
  }

  ngDoCheck() {
    this.isValid = true
  }

  onSubmit(){
    let users: Users[] = this.dataService.getUsers()
    for (let i = 0; i < users.length; i++) {
      if (this.email == users[i].email) {
        if (this.psw == users[i].password) {
          this.dataService.setCurrentUser(users[i])
          this.router.navigate(['/options']);
          break;
        }
      }
    }
    this.isValid = false
  }

}
