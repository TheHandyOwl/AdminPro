import { Injectable } from '@angular/core';
import { URL_SERVICES } from '../../config/config';

@Injectable()
export class UploadFileService {

  constructor() { }

  uploadFiles( file: File, type: string, id: string ) {

    return new Promise( (resolve, reject) => {
      const formData = new FormData();
      const ajaxResponse = new XMLHttpRequest();

      formData.append('image', file, file.name);

      ajaxResponse.onreadystatechange = () => {
        if ( ajaxResponse.readyState === 4 ) {
          if ( ajaxResponse.status === 200 ) {
            console.log('Image subida');
            resolve( JSON.parse( ajaxResponse.response ));
          } else {
            console.log('Fallo la subida');
            reject( ajaxResponse.response );
          }
        }
      };

      const url = URL_SERVICES + '/upload/' + type + '/' + id;

      ajaxResponse.open('PUT', url, true);
      ajaxResponse.send( formData );
    });

  }



}
