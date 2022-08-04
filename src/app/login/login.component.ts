import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../shared/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  userLogin = 'admin'
  userPassword = '123145151'
  message!: string

  constructor(public authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.setMessage()
  }

  login() {
    this.message = 'Trying to log in...'
    this.authService.login(this.userLogin, this.userPassword).subscribe(() => {
      this.setMessage()
      
      if(this.authService.isLoggedIn && this.authService.redirectUrl) {
        this.router.navigate([this.authService.redirectUrl])
        this.authService.redirectUrl = ''
      } 
    })
  }

  logout() {
    this.authService.logout()
    this.setMessage()
  }

  private setMessage():void {
    this.message = `Logged ${this.authService.isLoggedIn ? 'in' : 'out'}`
  }
}
