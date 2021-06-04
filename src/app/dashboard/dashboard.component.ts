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
      title: 'Absolute error',
      subtitle: 'Calculation of the absolute error',
      description: 'It is the difference that exists between the real value and the approximate value',
      input: ['Real Value', 'Approximate value']
    },
    {
      title: 'Relative error',
      subtitle: 'Calculation of the relative error',
      description: 'It is the error as a proportion of the real value, the relative error is dimensionless, so it is usually presented as a percentage',
      input: ['Real Value', 'Approximate value']
    },
    {
      title: 'Correct decimals',
      subtitle: 'Calculation of the correct decimals of a number.',
      description: 'It is the number of correct decimal positions that a number contains (1 is true, 2 is false))',
      input: ['X', 'X approximate', 'Correct decimals']
    },
    {
      title: 'Incremental searches',
      subtitle: 'Incremental search method',
      description: 'This program finds an interval where f(x) has a change of sign using the incremental searches method',
      input: ['Continuous function f(x)', 'Starting point', 'Delta increment ∆x', 'Maximum interactions']
    },
    {
      title: 'Bisection',
      subtitle: 'Bisection method',
      description: 'This program finds the solution to the equation f(x) = 0 on the interval [a, b] using the bisection method',
      input: ['Continuous function f(x)', 'Interval start', 'Interval end', 'Tolerance', 'Maximum interactions']
    },
    {
      title: 'False rule',
      subtitle: 'False rule method',
      description: 'This program finds the solution to the equation f(x) = 0 on the interval [a, b] using the false rule method',
      input: ['Continuous function f(x)', 'Interval start', 'Interval end', 'Tolerance', 'Maximum interactions']
    },
      {
        title: 'Fixed point',
        subtitle: 'Fixed point method',
        description: 'This program finds the solution to the equation f(x) = 0 by solving the analogous problem x = g(x) using the fixed point method',
        input: ['Continuous function f(x)', 'Initial approximation', 'Tolerance', 'Maximum interactions']
      },
      {
        title: 'Newton',
        subtitle: 'Newton\'s method',
        description: 'This program finds the solution to the equation f(x) = 0 using Newton\'s method',
        input: ['Continuous function f(x)', 'Initial approximation', 'Tolerance', 'Maximum interactions']
      },
      {
        title: 'Secant',
        subtitle: 'Secant method',
        description: 'This program finds the solution to the equation f(x) = 0 using the secant method',
        input: ['Continuous function f(x)', 'Initial approximation', 'Final approximation', 'Tolerance', 'Maximum interactions']
      },
      {
        title: 'Multiple roots',
        subtitle: 'Multiple roots method',
        description: 'This program finds the solution to the equation f(x) = 0 using the multiple roots method',
        input: ['Continuous function f(x)', 'Initial approximation', 'Tolerance', 'Maximum interactions']
      },
      {
        title: 'Simple Gaussian elimination',
        subtitle: 'Simple Gaussian elimination method',
        description: 'This program finds the solution to the system Ax = b using the simple Gaussian elimination method',
        input: ['Invertible matrix A', 'Constant vector b']
      },
      {
        title: 'Gaussian elimination with partial pivot',
        subtitle: 'Gaussian elimination method with partial pivot',
        description: 'This program finds the solution to the system Ax = b using the Gaussian elimination method with partial pivot',
        input: ['Invertible matrix A', 'Constant vector b']
      },
      {
        title: 'Gaussian elimination with complete pivot',
        subtitle: 'Gaussian elimination method with complete pivot',
        description: 'This program finds the solution to the system Ax = b using the Gaussian elimination method with complete pivot',
        input: ['Invertible matrix A', 'Constant vector b']
      },
      {
        title: 'LU factorization with simple Gaussian elimination',
        subtitle: 'LU factorization method with simple Gaussian elimination',
        description: 'This program finds the solution to the system Ax = b and the LU factorization of A using the LU factorization method with simple Gaussian elimination',
        input: ['Invertible matrix A', 'Constant vector b']
      },
      {
        title: 'Jacobi',
        subtitle: 'Jacobi method',
        description: 'This program finds the solution to the system Ax = b using the Jacobi method',
        input: ['Invertible matrix A', 'Constant vector b', 'Initial approximation', 'Tolerance', 'Maximum interactions']
      },
      {
        title: 'Gauss-Seidel',
        subtitle: 'Gauss-Seidel method',
        description: 'This program finds the solution to the system Ax = b using the Gauss-Seidel method',
        input: ['Invertible matrix A', 'Constant vector b', 'Initial approximation', 'Tolerance', 'Maximum interactions']
      },
      {
        title: 'Vandermonde',
        subtitle: 'Vandermonde method',
        description: 'This program finds the interpolating polynomial of the given data using the Vandermonde method',
        input: ['Abscissas X', 'Ordinates Y']
      },
      {
        title: 'Divided differences',
        subtitle: 'Divided differences method',
        description: 'This program finds the interpolating polynomial of the given data using the divided differences method',
        input: ['Abscissas X', 'Ordinates Y']
      },
      {
        title: 'Splines',
        subtitle: 'Quadratic splines method',
        description: 'This program finds the quadratic spline that interpolates the given data using the quadratic splines method',
        input: ['Abscissas X', 'Ordinates Y']
      }
    ];
  }

}
