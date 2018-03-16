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
    .retry( 2 )
    .subscribe(
      number =>  console.log('Subscribe', number ),
      error => console.log('Error', error),
      () => console.log('The observer finished')
    );

  }

  ngOnInit() {
  }

  returnObservable (): Observable<number> {
    return new Observable( observer => {

      let counter = 0;

      const interval = setInterval( () => {

        counter += 1;

        observer.next( counter );

        if ( counter === 3 ) {
          clearInterval( interval );
          observer.complete();
        }

        if ( counter === 2 ) {
          // clearInterval( interval );
          observer.error('Heeeeellllllllppppp');
        }

      }, 1000);
    });
  }



}
