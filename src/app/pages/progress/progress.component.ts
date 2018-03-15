import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styles: []
})
export class ProgressComponent implements OnInit {

  bluePorcentage: number = 60;
  greenPorcentage: number = 20;

  constructor() { }

  ngOnInit() {
  }

  updateProgressBar( event: number  ) {
    console.log(`El evento que recibo ${event}`);
  }
}
