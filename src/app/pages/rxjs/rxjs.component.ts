import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Rx';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styles: []
})
export class RxjsComponent implements OnInit {

  constructor() {

    this
    .returnObservable()
    .subscribe(
      number =>  console.log('Subscribe', number ),
      error => console.log('Error', error),
      () => console.log('The observer finished')
    );

  }

  ngOnInit() {
  }

  returnObservable (): Observable<any> {
    return new Observable( observer => {

      let counter = 0;

      const interval = setInterval( () => {

        counter += 1;

        const exit = {
          value : counter
        };

        observer.next( exit );

        if ( counter === 3 ) {
          clearInterval( interval );
          observer.complete();
        }

      }, 1000);
    }).retry( 2 )
    .map( (response: any) => {
      return response.value;
    })
    .filter( (value, index) => {

      if ((value % 2) === 1 ) {
        // impar
        console.log(`Filter value: ${ value } with index: ${index} `);
        return true;
      } else {
        // par
        console.log(`Filter value: ${ value } with index: ${index} `);
        return false;
      }

    } );
  }



}
