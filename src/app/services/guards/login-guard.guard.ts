import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { UserService } from '../user/user.service';

@Injectable()
export class LoginGuardGuard implements CanActivate {

  constructor( public _userServices: UserService,
               public _router: Router
  ) {}

  canActivate() {
    console.log('Pasamos por el Login Guard');

    if (this._userServices.authenticated() ) {
      console.log('Paso el guard');
      return true;
    } else {
      console.log('Bloqueado por guard');
      this._router.navigate( ['/login'] );
      return false;
    }
  }
}
