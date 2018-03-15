import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-graphics1',
  templateUrl: './graphics1.component.html',
  styles: []
})
export class Graphics1Component implements OnInit {

  graphics: any = {
    'graphic1': {
      'labels': ['Contractura', 'Suelo pelvico', 'Esguince'],
      'data':  [34, 3, 5],
      'type': 'polarArea',
      'legend': 'Veces tratadas'
    },
    'graphic2': {
      'labels': ['Hombres', 'Mujeres'],
      'data':  [40, 60],
      'type': 'polarArea',
      'legend': 'Tratados'
    },
    'graphic3': {
      'labels': ['Si', 'No'],
      'data':  [95, 5],
      'type': 'polarArea',
      'legend': '¿Le gusto la sesion?'
    },
    'graphic4': {
      'labels': ['No', 'Si'],
      'data':  [2, 98],
      'type': 'polarArea',
      'legend': '¿Volveria a tratarse?'
    },
  };

  constructor() { }

  ngOnInit() {
  }

}
