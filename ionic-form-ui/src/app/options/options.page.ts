import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-options',
  templateUrl: './options.page.html',
  styleUrls: ['./options.page.scss'],
})
export class OptionsPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  openProfile(){
    this.router.navigate(['/profile'])
  }

}
