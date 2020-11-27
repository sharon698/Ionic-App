import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  loginId: string = "";
  psw = ""
  isValid = false;

  sampleLoginId = "niteshbisht26@gmail.com"
  samplepsw = "12345678"

  constructor(private router: Router) { }

  ngOnInit() {

  }

  onSubmit(){
    if(this.loginId.length == 0 || this.loginId != this.sampleLoginId || this.psw.length == 0 || this.psw != this.samplepsw){
      this.isValid = true
    }
    else{
      this.isValid = false
      this.router.navigate(['/options'])
    }
  }

}
