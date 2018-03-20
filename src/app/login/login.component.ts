import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { UserService } from '../services/service.index';
import { User } from '../models/user.model';

declare function init_plugins();
declare const gapi: any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  rememberme: boolean = false;
  email: string;
  auth2: any;

  constructor(public router: Router, public _userServices: UserService) {}

  ngOnInit() {
    init_plugins();
    this.googleInit();
    this.email = localStorage.getItem('email') || '';
    if (this.email.length > 1) {
      this.rememberme = true;
    }
  }

  googleInit() {
    gapi.load('auth2', () => {
      this.auth2 = gapi.auth2.init({
        client_id: '676307275703-l5vrbq1govljd304kkndd7j7i9b5vq0h.apps.googleusercontent.com',
        cookiepolicy: 'single_host_origin',
        scope: 'profile email'
      });
      this.attachSignin(document.getElementById('btnGoogle'));
    });
  }

  attachSignin( element ) {
    this.auth2.attachClickHandler( element, {}, (googleUser) => {
      // const profile = googleUser.getBasicProfile();
      const token = googleUser.getAuthResponse().id_token;

      this._userServices.loginGoogle( token )
                        .subscribe( response => window.location.href = '#/dashboard');

      console.log( token );
    });
  }

  login(form: NgForm) {

    if ( form.invalid ) {
      return;
    }

    const user = new User(null, form.value.email, form.value.password);

    this._userServices.login( user, form.value.rememberme )
      .subscribe( validationCorrect => this.router.navigate(['/dashboard']) );
  }
}
