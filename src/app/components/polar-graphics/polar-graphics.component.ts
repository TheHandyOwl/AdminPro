import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-polar-graphics',
  templateUrl: './polar-graphics.component.html',
  styles: []
})
export class PolarGraphicsComponent implements OnInit {

  @Input('chartLabels') polarAreaChartLabels: string[] = [];
  @Input('chartData') polarAreaChartData: number[] = [];
  @Input('chartType') polarAreaChartType: string = 'polarArea';
  polarAreaLegend: boolean = true;


  constructor() { }

  ngOnInit() {
  }

}
