import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promise',
  templateUrl: './promise.component.html',
  styles: []
})
export class PromiseComponent implements OnInit {

  constructor() {

    this.counter().then(
      () => console.log(' OK')
    ).catch(
      error => console.log('Error', error)
    );

  }

  ngOnInit() {
  }

  counter (): Promise<Boolean> {
    return new Promise((resolve, reject) => {

      let counter = 0;

      const interval = setInterval( () => {
        counter += 1;
        console.log(counter);

        if (counter === 3) {
          resolve( true );
          // reject('Error');
          clearInterval(interval);
        }
      }, 1000);
    });

  }

}
