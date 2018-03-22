import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user.model';
import { UserService } from '../../services/service.index';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styles: []
})
export class ProfileComponent implements OnInit {

  user: User;

  uploadImage: File;
  temporalImage: string;

  constructor(
    public _userService: UserService
  ) {
    this.user = this._userService.user;
  }

  ngOnInit() {
  }

  saveValuesToForm( user: User ) {

    this.user.name = user.name;

    if ( !this.user.google ) {
      this.user.email = user.email;
    }

    this._userService.updateUser(this.user)
    .subscribe( response => {
      console.log(response);
    });
  }

  imageSelected( file: File ) {

    if ( !file ) {
      this.uploadImage = null;
      return;
    }

    console.log(file);

    if ( file.type.indexOf('image') < 0 ) {
      swal('Solo imagenes', 'El archivo seleccionado no es una imagen', 'error');
      this.uploadImage = null;
      return;
    }


    this.uploadImage = file;

    const reader = new FileReader();
    const temporalUrlImage = reader.readAsDataURL( file );

    reader.onloadend = () => {
      console.log( reader.result );
      this.temporalImage = reader.result;
    };

  }

  changeImage() {
    this._userService.uploadUserImage ( this.uploadImage, this.user._id );
    console.log(this.uploadImage, this.user._id);
  }
}
