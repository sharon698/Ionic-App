import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service'

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  constructor(private dataService: DataService) { }

  ngOnInit() {
  }

  currentUser = this.dataService.getCurrentUser()
  first_name = this.currentUser.first_name
  last_name = this.currentUser.last_name
  email = this.currentUser.email

}
