import { AuthService } from './../shared/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  password;
  username;

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  signup() {
    this.authService.signUp(this.username, this.password).then(r => {
      console.log(r);
    });
  }

  signupGoogle(){
    this.authService.loginGoogle().then(r => {
      console.log(r);
    });
  }

  signupFacebook(){
    this.authService.loginFacebook().then(r => {
      console.log(r);
    });
  }

  logout(){
    this.authService.logout().then(r => {
      console.log(r);
    });
  }

}
