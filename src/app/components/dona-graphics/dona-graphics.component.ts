import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-dona-graphics',
  templateUrl: './dona-graphics.component.html',
  styles: []
})
export class DonaGraphicsComponent implements OnInit {

  @Input('chartLabels') doughnutChartLabels: string[] = [];
  @Input('chartData') doughnutChartData: number[] = [];
  @Input('chartType') doughnutChartType: string = '';


  constructor() { }

  ngOnInit() {
  }

}
