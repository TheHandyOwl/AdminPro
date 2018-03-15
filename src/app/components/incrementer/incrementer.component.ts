import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-incrementer',
  templateUrl: './incrementer.component.html',
  styles: []
})
export class IncrementerComponent implements OnInit {

  @ViewChild('txtProgress') txtProgress: ElementRef;

  @Input('name') legend: string = 'Legend';
  @Input() porcentage: number = 50;

  @Output() changeValueOfProgressBars: EventEmitter<number> = new EventEmitter();
  constructor() {
    // console.log('Legend', this.legend);
    // console.log('Progress', this.porcentage);
  }

  ngOnInit() {
    // console.log('Leyenda', this.legend);
    // console.log('Progress', this.porcentage);
  }

  onChanges ( newValue: number ) {

    // const elementHTML: any = document.getElementsByName('porcentage')[0];

    // console.log( this.txtProgress );

    if (newValue >= 100) {
      this.porcentage = 100;
    } else if ( newValue <= 0 ) {
      this.porcentage = 0;
    } else {
      this.porcentage = newValue;
    }

    // elementHTML.value = this.porcentage;

    this.txtProgress.nativeElement.value = this.porcentage;
    console.log( newValue );
    this.changeValueOfProgressBars.emit(this.porcentage);

    this.txtProgress.nativeElement.focus();
  }

  changeValue( value ) {

  if (this.porcentage >= 100 && value > 100) {
    this.porcentage = 100;
    value = 100;
  }

  if (this.porcentage <= 0 && value < 0) {
    this.porcentage = 0;
    value = 0;
  }
    this.porcentage = this.porcentage + value;
    this.changeValueOfProgressBars.emit(this.porcentage);
  }
}
