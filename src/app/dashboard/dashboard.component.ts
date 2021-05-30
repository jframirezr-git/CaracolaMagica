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
      description: 'Expresa el error como proporción del valor verdadero, el error relativo es adimencional por ende suele precentarse en forma de porcentaje',
      input: ['Error', 'Valor aproximado']
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
      description: 'Este programa encuentra un intervalo donde f(x) tiene cambio de signo usando el método de búsquedas incrementales',
      input: ['Función continua f(x)', 'Punto inicial', 'Incremento delta ∆x', 'Máximo de interacciones']
    },
    {
      title: 'Bisección',
      subtitle: 'Método de la bisección',
      // urlImage: 'https://pbs.twimg.com/profile_images/2388108473/180px-DaConch_400x400.jpg',
      description: 'Este programa halla la solución a la ecuación f(x)=0 en el intervalo [a,b] usando el método de la bisección',
      input: ['Función continua f(x)', 'Inicio del intervalo', 'Final del intervalo', 'Tolerancia', 'Máximo de iteraciones']
    },
    {
      title: 'Regla Falsa',
      subtitle: 'Método de la regla falsa',
      // urlImage: 'https://pbs.twimg.com/profile_images/2388108473/180px-DaConch_400x400.jpg',
      description: 'Este programa halla la solución a la ecuación f(x)=0 en el intervalo [a,b] usando el método de la regla falsa',
      input: ['Función continua f(x)', 'Inicio del intervalo', 'Final del intervalo', 'Tolerancia', 'Máximo de iteraciones']
    },
      {
        title: 'Punto fijo',
        subtitle: 'Método de punto fijo',
        // urlImage: 'https://pbs.twimg.com/profile_images/2388108473/180px-DaConch_400x400.jpg',
        description: 'Este programa halla la solución a la ecuación f(x)=0 resolviendo el problema análogo x=g(x) usando el método de punto fijo',
        input: ['Función continua f(x)', 'Aproximación inicial', 'Tolerancia', 'Máximo de iteraciones']
      },
      {
        title: 'Newton',
        subtitle: 'Método de Newton',
        // urlImage: 'https://pbs.twimg.com/profile_images/2388108473/180px-DaConch_400x400.jpg',
        description: 'Este programa halla la solución a la ecuación f(x)=0 usando el método de Newton',
        input: ['Función continua f(x)', 'Aproximación inicial', 'Tolerancia', 'Máximo de iteraciones']
      },
      {
        title: 'Secante',
        subtitle: 'Método de la secante',
        // urlImage: 'https://pbs.twimg.com/profile_images/2388108473/180px-DaConch_400x400.jpg',
        description: 'Este programa halla la solución a la ecuación f(x)=0 usando el método de la secante',
        input: ['Función continua f(x)', 'Aproximación inicial', 'Aproximación final', 'Tolerancia', 'Máximo de iteraciones']
      },
      {
        title: 'Raices multiples',
        subtitle: 'Método de las raices multiples',
        // urlImage: 'https://pbs.twimg.com/profile_images/2388108473/180px-DaConch_400x400.jpg',
        description: 'Este programa halla la solución a la ecuación f(x)=0 usando el método de raíces múltiples',
        input: ['Función continua f(x)', 'Aproximación inicial', 'Tolerancia', 'Máximo de iteraciones']
      },
      {
        title: 'Gaussiana simple',
        subtitle: 'Método de eliminación gaussiana simple',
        // urlImage: 'https://pbs.twimg.com/profile_images/2388108473/180px-DaConch_400x400.jpg',
        description: 'Este programa halla la solución al sistema Ax=b usando el método de eliminación gaussiana simple',
        input: ['Matrix invertible A', 'Vector constante b']
      },
      {
        title: 'Gaussiana con pivoteo parcial',
        subtitle: 'Método de eliminación gaussiana con pivoteo parcial',
        // urlImage: 'https://pbs.twimg.com/profile_images/2388108473/180px-DaConch_400x400.jpg',
        description: 'Este programa halla la solución al sistema Ax=b usando el método de eliminación gaussiana con pivoteo parcial',
        input: ['Matrix invertible A', 'Vector constante b']
      },
      {
        title: 'Gaussiana con pivoteo total',
        subtitle: 'Método de eliminación gaussiana con pivoteo total',
        // urlImage: 'https://pbs.twimg.com/profile_images/2388108473/180px-DaConch_400x400.jpg',
        description: 'Este programa halla la solución al sistema Ax=b usando el método de eliminación gaussiana con pivoteo total',
        input: ['Matrix invertible A', 'Vector constante b']
      },
      {
        title: 'LU con eliminación gaussiana simple',
        subtitle: 'Método de factorización LU con eliminación gaussiana simple',
        // urlImage: 'https://pbs.twimg.com/profile_images/2388108473/180px-DaConch_400x400.jpg',
        description: 'Este programa halla la solución al sistema Ax=b y la factorización LU de A usando el método de factorización LU con eliminación gaussiana simple',
        input: ['Matrix invertible A', 'Vector constante b']
      },
      {
        title: 'Jacobi',
        subtitle: 'Método de Jacobi',
        // urlImage: 'https://pbs.twimg.com/profile_images/2388108473/180px-DaConch_400x400.jpg',
        description: 'Este programa halla la solución al sistema Ax=b usando el método de Jacobi',
        input: ['Matrix invertible A', 'Vector constante b', 'Aproximación inicial', 'Tolerancia', 'Máximo de iteraciones']
      },
      {
        title: 'Gauss-Seidel',
        subtitle: 'Método de Gauss-Seidel',
        // urlImage: 'https://pbs.twimg.com/profile_images/2388108473/180px-DaConch_400x400.jpg',
        description: 'Este programa halla la solución al sistema Ax=b usando el método de Gauss-Seidel',
        input: ['Matrix invertible A', 'Vector constante b', 'Aproximación inicial', 'Tolerancia', 'Máximo de iteraciones']
      },
      {
        title: 'Vandermonde',
        subtitle: 'Método de Vandermonde',
        // urlImage: 'https://pbs.twimg.com/profile_images/2388108473/180px-DaConch_400x400.jpg',
        description: 'Este programa halla el polinomio interpolante de los datos dados usando el método de Vandermonde',
        input: ['Abscisas X', 'Ordenadas Y']
      },
      {
        title: 'Diferencias divididas',
        subtitle: 'Método de diferencias divididas',
        // urlImage: 'https://pbs.twimg.com/profile_images/2388108473/180px-DaConch_400x400.jpg',
        description: 'Este programa halla el polinomio interpolante de los datos dados usando el método de diferencias divididas',
        input: ['Abscisas X', 'Ordenadas Y']
      },
      {
        title: 'Splines',
        subtitle: 'Método de trazadores cuadráticos',
        // urlImage: 'https://pbs.twimg.com/profile_images/2388108473/180px-DaConch_400x400.jpg',
        description: 'Este programa halla el spline cuadrático que interpola los datos dados usando el método de trazadores cuadráticos',
        input: ['Abscisas X', 'Ordenadas Y']
      }
    ];
  }

}
