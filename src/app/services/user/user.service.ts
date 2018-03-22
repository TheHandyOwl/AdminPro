import { Injectable } from '@angular/core';
import { User } from '../../models/user.model';
import { HeaderComponent } from '../../shared/header/header.component';
import { HttpClient } from '@angular/common/http';
import { URL_SERVICES } from '../../config/config';

import 'rxjs/add/operator/map';
import { Router } from '@angular/router';
import { UploadFileService } from '../uploadFiles/upload-file.service';

@Injectable()
export class UserService {
  user: User;
  token: string;

  constructor(public http: HttpClient, public router: Router, public _uploadFileService: UploadFileService) {
    this.loadFromLocalStorage();
  }

  authenticated() {
    return this.token.length > 5 ? true : false;
  }

  loadFromLocalStorage() {
    if (localStorage.getItem('token')) {
      this.token = localStorage.getItem('token');
      this.user = JSON.parse(localStorage.getItem('user'));
    } else {
      this.token = '';
      this.user = null;
    }
  }

  logOut() {
    this.user = null;
    this.token = '';

    localStorage.removeItem('token');
    localStorage.removeItem('user');
    this.router.navigate(['/login']);
  }

  loginGoogle(token: string) {
    const url = URL_SERVICES + '/login/google';
    return this.http.post(url, { token }).map((response: any) => {
      this.saveIntoStorage(response.id, response.token, response.user);
      return true;
    });
  }

  saveIntoStorage(id: string, token: string, user: User) {
    localStorage.setItem('id', id);
    localStorage.setItem('token', token);
    localStorage.setItem('user', JSON.stringify(user));

    this.user = user;
    this.token = token;
  }

  login(user: User, rememberme: boolean = false) {
    if (rememberme) {
      localStorage.setItem('email', user.email);
    } else {
      localStorage.removeItem('email');
    }

    const url = URL_SERVICES + '/login';
    return this.http.post(url, user).map((response: any) => {
      this.saveIntoStorage(response.id, response.token, response.user);

      return true;
    });
  }

  createNewUser(user: User) {
    const url: string = URL_SERVICES + '/user';
    return this.http.post(url, user).map((response: any) => {
      swal('Usuario creado', user.email, 'success');
      return response.user;
    });
  }

  updateUser(user: User) {
    let url = URL_SERVICES + '/user/' + user._id;
    url += '?token=' + this.token;

    return this.http.put(url, user).map((response: any) => {
      const userDB: User = response.user;
      this.saveIntoStorage( userDB._id, this.token, userDB );
      swal('Usuario actualizado correctamente', user.name, 'success');
      return true;
    });
  }

  uploadUserImage ( file: File, id: string ) {
    this._uploadFileService.uploadFiles( file, 'users', id)
      .then( (response: any) => {

        console.log(`La respuesta al subir imagen es:`, response.User.img);
        this.user.img = response.User.img;
        swal ( 'Imagen de usuario actualizada', this.user.name, 'success');
        this.saveIntoStorage( id, this.token, this.user );
      })
      .catch( response => {
        console.log( response );
      });
  }

}
