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
      // urlImage: 'https://www.calculadoraconversor.com/wp-content/uploads/2017/10/calculadora-error-absoluto.jpg',
      description: 'Es la diferencia que existe entre el valor verdadero y el valor aproximado',
      input: ['Valor real', 'Valor aproximado']
    },
    {
      title: 'Error Relativo',
      subtitle: 'Calculo error relativo',
      // urlImage: 'https://pbs.twimg.com/profile_images/2388108473/180px-DaConch_400x400.jpg',
      description: 'Expresa el error como proporción del valor verdadero, el error relativo es adimencional' +
        ', por ende suele precentarse en forma de porcentaje',
      input: ['Error', 'valor verdadero o aproximado']
    },
    {
      title: 'Decimales correctos',
      subtitle: 'Calculo los decimales correctos de un número',
      // urlImage: 'https://pbs.twimg.com/profile_images/2388108473/180px-DaConch_400x400.jpg',
      description: 'Se refiere a la cantidad de decimales correctos que contiene un número, (1 es verdadero, 2 es falso)',
      input: ['X', 'X aproximado', 'Decimales correctos']
    }
    ];

    console.log(this.data);
  }

}
