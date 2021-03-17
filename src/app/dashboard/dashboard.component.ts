import {Component, OnInit} from '@angular/core';
import {Card} from '../inteface/card-interface';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  data: Card [] = [];

  constructor() {
  }

  ngOnInit(): void {
    this.data = [{
      title: 'Error Absoluto',
      subtitle: 'Calculo del error absoluto',
      urlImage: 'https://www.calculadoraconversor.com/wp-content/uploads/2017/10/calculadora-error-absoluto.jpg',
      description: 'Es la diferencia que existe entre el valor verdadero y el valor aproximado',
      input: ['Valor real', 'Valor aproximado']
    },
    {
      title: 'Teoria de Errores',
      subtitle: 'Muestra las formulas para la teoria de errores',
      // urlImage: 'https://pbs.twimg.com/profile_images/2388108473/180px-DaConch_400x400.jpg',
      description: 'Muestra las formulas para la teoria de errores,Muestra las formulas para la teoria de errores,Muestra las formulas para la teoria de errores',
      input: ['exponente', 'x']
    }
    ];

    console.log(this.data);
  }

}
