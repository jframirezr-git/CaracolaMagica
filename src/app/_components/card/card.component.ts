import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Card} from '../../inteface/card-interface';
import { MetodosNumericosService } from '../../_services/metodos-numericos.service';
import * as math from 'mathjs';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  form: FormGroup;
  @Input() data: Card;
  resultJS: string;
  resultPython: string;

  constructor(
    private formBuilder: FormBuilder,
    private metodosNum: MetodosNumericosService
  ) {
  }

  ngOnInit(): void {
    if (this.data.input) {
      this.createFormValidation(this.data.input.length);
    }
  }

  Submit(): void {
    const values = this.form.value;
    // Formulas y procedimientos
    console.log(values);
    if (this.data.title === 'Absolute error') {
      this.resultJS = this.errorAbsoluto(values.input1, values.input2);
    }
    if (this.data.title === 'Relative error') {
      this.resultJS = this.errorRelativo(values.input1, values.input2);
    }
    if (this.data.title === 'Correct decimals') {
      this.resultJS = this.decimalesCorrectos(values.input1, values.input2, values.input3);
    }
    if (this.data.title === 'Incremental searches') {
      this.resultJS = this.busquedas(values.input1, values.input2, values.input3, values.input4);
    }
    if (this.data.title === 'Bisección') {
      this.resultJS = this.biseccion(values.input1, values.input2, values.input3, values.input4, values.input5);
    }
    if (this.data.title === 'False rule') {
      this.resultJS = this.reglaFalsa(values.input1, values.input2, values.input3, values.input4, values.input5);
    }
    if (this.data.title === 'Fixed point') {
      this.resultJS = this.puntofijo(values.input1, values.input2, values.input3, values.input4);
    }
    if (this.data.title === 'Newton') {
      this.resultJS = this.newton(values.input1, values.input2, values.input3, values.input4);
    }
    if (this.data.title === 'Secant') {
      this.resultJS = this.secante(values.input1, values.input2, values.input3, values.input4, values.input5);
    }
    if (this.data.title === 'Multiple roots') {
      this.resultJS = this.raicesmlt(values.input1, values.input2, values.input3, values.input4);
    }
    if (this.data.title === 'Simple Gaussian elimination') {
      this.resultJS = this.gausspl(values.input1, values.input2);
    }
    if (this.data.title === 'Gaussian elimination with partial pivot') {
      this.resultJS = this.gausspar(values.input1, values.input2);
    }
    if (this.data.title === 'Gaussian elimination with complete pivot') {
      this.resultJS = this.gausstot(values.input1, values.input2);
    }
    if (this.data.title === 'LU factorization with simple Gaussian elimination') {
      this.resultJS = this.lusimpl(values.input1, values.input2);
    }
    if (this.data.title === 'Jacobi') {
      this.resultJS = this.jacobi(values.input1, values.input2, values.input3, values.input4, values.ipnut5);
    }
    if (this.data.title === 'Gauss-Seidel') {
      this.resultJS = this.gseidel(values.input1, values.input2, values.input3, values.input4, values.ipnut5);
    }
    if (this.data.title === 'Vandermonde') {
      this.resultJS = this.vandermonde(values.input1, values.input2);
    }
    if (this.data.title === 'Divided differences') {
      this.resultJS = this.difdivididas(values.input1, values.input2);
    }
    if (this.data.title === 'Splines') {
      this.resultJS = this.splines(values.input1, values.input2);
    }
  }


  errorAbsoluto(valorVerdaderoP: string, valorAproximadoP: string): string {
    const valorVerdadero = parseFloat(valorVerdaderoP);
    const valorAproximado = parseFloat(valorAproximadoP);

    const param = {
      x1: valorVerdadero,
      x2: valorAproximado
    };
    this.metodosNum.absolute(param).subscribe(
      res => {
        this.resultPython = String(res.error);
      },
      err => {
        console.log(err);
      }
    );

    const result = valorVerdadero - valorAproximado;

    return String(result);
  }

  errorRelativo(errorP: string, valorP: string): string {
    const error = parseFloat(errorP);
    const valor = parseFloat(valorP);

    const param = {
      error: error,
      x: valor
    };
    this.metodosNum.relative(param).subscribe(
      res => {
        this.resultPython = String(res.error);
      },
      err => {
        console.log(err);
      }
    );

    const result = error / valor;

    return String(result);
  }

  decimalesCorrectos(xP: string, xAproximadoP: string, decimalP: string): string {
    const x = parseFloat(xP);
    const xAproximado = parseFloat(xAproximadoP);
    const  decimal = parseFloat(decimalP);

    const param = {
      x1: x,
      x2: xAproximado,
      decimal: decimal
    };
    this.metodosNum.decimals(param).subscribe(
      res => {
        this.resultPython = String(res.correct);
      },
      err => {
        console.log(err);
      }
    );

    const resultMenor = xAproximado - 0.5 * Math.pow(10, -(decimal));
    const resultadoMayor = xAproximado + 0.5 * Math.pow(10, -(decimal));

    if (resultMenor <= x && x < resultadoMayor) {
      return String(1);
    }
    else {
      return String(2);
    }
  }

  busquedas(f: string, x0P: string, hP: string, nMaxP: string): string {
    const x0 = parseFloat(x0P);
    const h = parseFloat(hP);
    const nMax = parseFloat(nMaxP);

    let i;
    let xAnt = x0;
    let xAct = xAnt + h;
    let fAnt = math.evaluate(f.replace(/[xX]/g, '*' + String(xAnt)));
    let fAct = math.evaluate(f.replace(/[xX]/g, '*' + String(xAct)));
    for (i = 1; i === nMax; i++){
      if ( fAnt * fAct < 0){
        break;
      }
      xAnt = xAct;
      fAnt = fAct;
      xAct = xAnt + h;
      fAct = math.evaluate(f.replace(/[xX]/g, '*' + String(xAct)));
    }

    return ('extremo izquierdo del intervalo = ' + xAnt + '\n' + ' Extremo derecho del intervalo = ' + xAct + '\n' + 'Iteraciones = ' + i);
  }

  biseccion(f: string, aP: string, bP: string, tolP: string, nMaxP: string): string {
    let a = parseFloat(aP);
    let b = parseFloat(bP);
    const tol = parseFloat(tolP);
    const nMax = parseFloat(nMaxP);

    const param = {
      f: f,
      a: a,
      b: b,
      N: nMax
    };
    this.metodosNum.bisections(param).subscribe(
      res => {
        if (res.correct) {
          this.resultPython = String(res.result);
        } else {
          this.resultPython = 'No';
        }
      },
      error => {
        console.log(error);
      }
    );

    const fa = math.evaluate(f.replace(/[xX]/g, '(' + String(a) + ')'));
    let pm = (a + b) / 2;
    let fpm = math.evaluate(f.replace(/[xX]/g, '(' + String(pm) + ')'));
    let e = 1000;
    let cont = 1;
    while (e > tol && cont < nMax){
      if (fa * fpm < 0){
        b = pm;
      }else{
        a = pm;
      }
      const p0 = pm;
      pm = (a + b) / 2;
      fpm = math.evaluate(f.replace(/[xX]/g, '(' + String(pm) + ')'));
      e = Math.abs( pm - p0);
      cont++;
    }

    return ('Solucion = ' + pm + '\n' + 'Iteraciones = ' + cont + '\n' + 'Error = ' + e);

  }

  reglaFalsa(f: string, aP: string, bP: string, tolP: string, nMaxP: string): string {
    let a = parseFloat(aP);
    let b = parseFloat(bP);
    const tol = parseFloat(tolP);
    const nMax = parseFloat(nMaxP);

    const fa = math.evaluate(f.replace(/[xX]/g, '(' + String(a) + ')'));
    const fb = math.evaluate(f.replace(/[xX]/g, '(' + String(b) + ')'));
    let pm = (fb * a - fa * b) / (fb - fa);
    const fpm = math.evaluate(f.replace(/[xX]/g, '(' + String(pm) + ')'));
    let e = 1000;
    let cont = 1;
    while (e > tol && cont < nMax){
      if (fa * fpm < 0){
        b = pm;
      }else{
        a = pm;
      }
      const p0 = pm;
      pm = math.evaluate(f.replace(/[xX]/g, '(' + String(b) + ')')) * a -
           math.evaluate(f.replace(/[xX]/g, '(' + String(a) + ')')) * b /
           math.evaluate(f.replace(/[xX]/g, '(' + String(b) + ')')) -
           math.evaluate(f.replace(/[xX]/g, '(' + String(a) + ')'));
      e = Math.abs(pm - p0);
      cont++;
    }

    return ('Solucion = ' + pm + '\n' + 'Iteraciones = ' + cont + '\n' + 'Error = ' + e);
  }

  puntofijo(f: string, x0P: string, tolP: string, nMaxP: string): string {
    const x0 = parseFloat(x0P);
    const tol = parseFloat(tolP);
    const nMax = parseFloat(nMaxP);

    let xAnt = x0;
    let e = 1000;
    let cont = 0;
    let  xAct;
    while ( e > tol && cont < nMax){
      xAct = math.evaluate(f.replace(/[xX]/g, '(' + String(xAnt) + ')'));
      e = Math.abs(xAnt - xAnt);
      cont++;
      xAnt = xAct;
    }

    return ('Solucion = ' + xAct + '\n' + ' Iteraciones = ' + cont + '\n' + 'Error = ' + e);
  }

  newton(f: string, x0P: string, tolP: string, nMaxP: string): string {
    const x0 = parseFloat(x0P);
    const tol = parseFloat(tolP);
    const nMax = parseFloat(nMaxP);

    let xAnt = x0;
    let fAnt = math.evaluate(f.replace(/[xX]/g, '(' + String(xAnt) + ')'));
    const df = math.derivative(f, 'x');
    let e = 1000;
    let cont = 0;
    let xAct;
    let fAct;
    while (e > tol && cont < nMax) {
      xAct = xAnt - fAnt / math.evaluate(String(df).replace(/[xX]/g, '(' + String(xAnt) + ')'));
      fAct = math.evaluate(f.replace(/[xX]/g, '(' + String(xAct) + ')'));
      e = Math.abs(xAct - xAnt);
      cont++;
      xAnt = xAct;
      fAnt = fAct;
    }

    const param = {
      f: f,
      df: df,
      x0: x0,
      epsilon: tol,
      max_iter: nMax
    };
    this.metodosNum.newtons(param).subscribe(
      res => {
        if (res.correct) {
          this.resultPython = String(res.result);
        } else {
          this.resultPython = 'No';
        }
      },
      err => {
        console.log(err);
      }
    );

    return ('Solucion = ' + xAct + '\n' + 'Iteraciones = ' + cont + + '\n' + 'Error = ' + e);
  }

  secante(f: string, x0P: string, x1P: string, tolP: string, nMaxP: string): string {
    let x0 = parseFloat(x0P);
    let x1 = parseFloat(x1P);
    const tol = parseFloat(tolP);
    const nMax = parseFloat(nMaxP);

    let f0 = math.evaluate(f.replace(/[xX]/g, '(' + String(x0) + ')'));
    let f1 = math.evaluate(f.replace(/[xX]/g, '(' + String(x1) + ')'));
    let e = 1000;
    let cont = 1;
    let xAct;
    let fAct;
    while (e > tol && cont < nMax){
      xAct = x1 - f1 * (x1 - x0) / (f1 - f0);
      fAct = math.evaluate(f.replace(/[xX]/g, '(' + String(xAct) + ')'));
      e = Math.abs(xAct - x1);
      cont++;
      x0 = x1;
      f0 = f1;
      x1 = xAct;
      f1 = fAct;
    }

    return ('Solucion = ' + xAct + + '\n' + 'Iteraciones = ' + cont + + '\n' + 'Error = ' + e);
  }

  raicesmlt(f: string, x0P: string, tolP: string, nMaxP: string): string {
    const x0 = parseFloat(x0P);
    const tol = parseFloat(tolP);
    const nMax = parseFloat(nMaxP);

    let xAnt = x0;
    let fAnt = math.evaluate(f.replace(/[xX]/g, '(' + String(xAnt) + ')'));
    let e = 1000;
    let cont = 0;
    let xAct;
    const df = math.derivative(f, 'x');
    const d2f = math.derivative(String(df), 'x');
    let fAct;
    while (e > tol && cont < nMax) {
      // tslint:disable-next-line:no-bitwise
      xAct = xAnt - fAnt * math.evaluate(String(df).replace(/[xX]/g, '(' + String(xAnt) + ')')) /
        (math.evaluate(String(df).replace(/[xX]/g, '(' + String(xAnt) + ')'))) ^ 2 -
        fAnt * math.evaluate(String(d2f).replace(/[xX]/g, '(' + String(xAnt) + ')'));
      fAct = math.evaluate(f.replace(/[xX]/g, '(' + String(xAct) + ')'));
      e = Math.abs(xAct - xAnt);
      cont++;
      xAnt = xAct;
      fAnt = fAct;
    }

    return ('Solucion = ' + xAct + '\n' + 'Iteraciones = ' + cont + '\n' + 'Error = ' + e);
  }

  gausspl(matrixI: string, vectorC: string): string {
    let m = this.parseoMatriz(matrixI, vectorC);

    for (let i = 0; i < (m.length - 1); i++) {
      m = this.reduccion(m, i);
    }

    console.log(m);

    return '[ ' + m + ' ]';
  }

  gausspar(matrixI: string, vectorC: string): string {
    let m = this.parseoMatriz(matrixI, vectorC);

    for (let i = 0; i < (m.length - 1); i++) {
      let aux0 = m[i][i];
      let aux = 0;

      for (let j = i; j < m.length - 1; j++) {
        if (m[j][i] < m[j + 1][i]) {
          aux0 = m[j + 1][i];
          aux = j + 1;
        }
      }

      if (aux0 > Math.abs(m[i][i])) {
        const aux2 = m[aux];
        m[aux] = m[i];
        m[i] = aux2;
      }

      for (let q = 0; q < m.length - 1; q++) {
        m = this.reduccion(m, i);
      }
    }
    console.log(m);

    return '[ ' + m + ' ]';
  }

  reduccion(m: any[], i: number): any[] {
    for (let l = i + 1; l < m.length; l++) {
      if (m[l][i] !== 0) {
        const cons = m[l][i] / m[i][i];
        for (let k = 0; k < m[i].length; k++) {
          m[l][k] -= (m[i][k] * cons);
        }
      }
    }
    return m;
  }

  gausstot(matrixI: string, vectorC: string): string {
    const m = this.parseoMatriz(matrixI, vectorC);

    // let cambi = [];

    for (let i = 0; i < (m.length); i++) {

      // let a;let b;

      for (let j = i; j < m.length; j++) {
        for (let k = i; k < m[j].length - 1; k++) {
          console.log(m[j][k]);
        }
        if ((m[i][m[i].length - 1] + i - 1) !== i) {
          console.log(i, (m[i][m[i].length - 1]) + i - 1);
        }
      }
    }

    // m = this.reduccion(m, i);

    console.log(m);

    return '[ ' + m + ' ]';
  }

  lusimpl(matrixI: string, vectorC: string): string {
    return 'Pendiente';
  }

  jacobi(matrixI: string, vectorC: string, x0P: string, tolP: string, nMaxP: string): string {
    const x0 = parseFloat(x0P);
    const tol = parseFloat(tolP);
    const nMax = parseFloat(nMaxP);

    const param = {
      A: matrixI,
      b: vectorC,
      N: nMaxP,
      x: x0
    };
    this.metodosNum.jacobis(param).subscribe(
      res => {
        this.resultPython = String(res.result);
      },
      err => {
        console.log(err);
      }
    );

    return 'Pendiente';
  }

  gseidel(matrixI: string, vectorC: string, x0: string, tol: string, nMax: string): string {
    return 'Pendiente';
  }

  vandermonde(x: string, y: string): string {
    return 'Pendiente';
  }

  difdivididas(x: string, y: string): string {
    return 'Pendiente';
  }

  splines(x: string, y: string): string {
    return 'Pendiente';
  }

  parseoMatriz(matrixI: string, vectorC: string): any[] {
    const sep = matrixI.split(';');
    const sep2 = [];
    const c = vectorC.split(';');

    for (let h = 0; h < sep.length; h++) {
      sep2.push(sep[h].split(','));
      sep2[h].push(c[h]);
    }

    // tslint:disable-next-line:prefer-for-of
    for (let i = 0; i < sep2.length; i++) {
      for (let j = 0; j < sep2[i].length; j++) {
        console.log(sep2[i][j]);
        sep2[i][j] = parseFloat(sep2[i][j]);
      }
    }

    return sep2;
  }

  getErrorMessage(): string {
    return ' ';
  }

  createFormValidation(length: number): void {
    const arrayFormGroup: any = {};
    for (let i = 1; i <= length; i++) {
      arrayFormGroup['input' + i] = ['', [Validators.required, Validators.maxLength(50)]];
    }
    this.form = this.formBuilder.group(arrayFormGroup);
  }
}
