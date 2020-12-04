import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { DataService } from '../services/data.service'

@Component({
  selector: 'app-registration',
  templateUrl: './registration.page.html',
  styleUrls: ['./registration.page.scss'],
})
export class RegistrationPage implements OnInit {

  first_name: string;
  last_name: string;
  email: string;
  psw: string;

  constructor(private router: Router, private dataService: DataService) { }

  ngOnInit() {
  }

  register(){
    this.dataService.addUser(this.first_name, this.last_name, this.email, this.psw);
    this.router.navigate(['/login']);
  }

}
