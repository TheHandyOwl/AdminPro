import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs/Rx';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styles: []
})
export class RxjsComponent implements OnInit, OnDestroy {


  subscription: Subscription;

  constructor() {

    this.subscription = this.returnObservable()
                          .subscribe(
                            number =>  console.log('Subscribe', number ),
                            error => console.log('Error', error),
                            () => console.log('The observer finished')
                          );

  }

  ngOnInit() {
  }


  ngOnDestroy() {
    this.subscription.unsubscribe();
    console.log('The page go to close');
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

        // if ( counter === 3 ) {
        //   clearInterval( interval );
        //   observer.complete();
        // }

      }, 500);
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
