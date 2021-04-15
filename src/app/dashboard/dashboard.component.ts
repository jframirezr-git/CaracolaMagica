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
      subtitle: 'Cálculo del error absoluto',
      // urlImage: 'https://www.calculadoraconversor.com/wp-content/uploads/2017/10/calculadora-error-absoluto.jpg',
      description: 'Es la diferencia que existe entre el valor verdadero y el valor aproximado',
      input: ['Valor real', 'Valor aproximado']
    },
    {
      title: 'Error Relativo',
      subtitle: 'Cálculo del error relativo',
      // urlImage: 'https://pbs.twimg.com/profile_images/2388108473/180px-DaConch_400x400.jpg',
      description: 'Expresa el error como proporción del valor verdadero, el error relativo es adimencional' +
        ', por ende suele precentarse en forma de porcentaje',
      input: ['Error', 'Valor verdadero o aproximado']
    },
    {
      title: 'Decimales Correctos',
      subtitle: 'Cálculo de los decimales correctos de un número',
      // urlImage: 'https://pbs.twimg.com/profile_images/2388108473/180px-DaConch_400x400.jpg',
      description: 'Se refiere a la cantidad de decimales correctos que contiene un número, (1 es verdadero, 2 es falso)',
      input: ['X', 'X aproximado', 'Decimales correctos']
    },
    {
      title: 'Búsquedas',
      subtitle: 'Método de búsquedas incrementales',
      // urlImage: 'https://pbs.twimg.com/profile_images/2388108473/180px-DaConch_400x400.jpg',
      description: 'Se refiere a la búsqueda de aquellos subíntervalos en los que se garantiza la existencia de una raíz',
      input: ['Ecuación f(x)=0 ', 'Intervalo [a,b]', 'Incremento delta ∆x']
    },
    {
      title: 'Bisección',
      subtitle: 'Método de la bisección',
      // urlImage: 'https://pbs.twimg.com/profile_images/2388108473/180px-DaConch_400x400.jpg',
      description: 'Es un método cerrado que divide el intervalo en la mitad y revisa a que lado quedó la raíz para obtener un nuevo intervalo',
      input: ['Ecuación f(x)=0 ', 'Intervalo [a,b]', 'Incremento delta ∆x']
    },
    {
      title: 'Regla Falsa',
      subtitle: 'Método de la regla falsa',
      // urlImage: 'https://pbs.twimg.com/profile_images/2388108473/180px-DaConch_400x400.jpg',
      description: 'Es un método cerrado que busca el punto medio del intervalo trazando una línea recta desde f(a) hasta f(b) y se toma como nuevo intervalo el lado donde está la raíz',
      input: ['Ecuación f(x)=0 ', 'Intervalo [a,b]', 'Incremento delta ∆x']
    },
      {
        title: 'Punto fijo',
        subtitle: 'Método de punto fijo',
        // urlImage: 'https://pbs.twimg.com/profile_images/2388108473/180px-DaConch_400x400.jpg',
        description: 'Es una cosa',
        input: ['Ecuación f(x)=0 ', 'Intervalo [a,b]', 'Incremento delta ∆x']
      },
      {
        title: 'Newton',
        subtitle: 'Método de Newton',
        // urlImage: 'https://pbs.twimg.com/profile_images/2388108473/180px-DaConch_400x400.jpg',
        description: 'Es otra cosa',
        input: ['Ecuación f(x)=0 ', 'Intervalo [a,b]', 'Incremento delta ∆x']
      },
      {
        title: 'Secante',
        subtitle: 'Método de la secante',
        // urlImage: 'https://pbs.twimg.com/profile_images/2388108473/180px-DaConch_400x400.jpg',
        description: 'Es algo',
        input: ['Ecuación f(x)=0 ', 'Intervalo [a,b]', 'Incremento delta ∆x']
      },
      {
        title: 'Raices multiples',
        subtitle: 'Método de las raices multiples',
        // urlImage: 'https://pbs.twimg.com/profile_images/2388108473/180px-DaConch_400x400.jpg',
        description: 'Es eso',
        input: ['Ecuación f(x)=0 ', 'Intervalo [a,b]', 'Incremento delta ∆x']
      }
    ];

    console.log(this.data);
  }

}
