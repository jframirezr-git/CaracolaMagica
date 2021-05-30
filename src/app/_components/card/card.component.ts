import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Card} from '../../inteface/card-interface';
import {wrapFunctionExpressionsInParens} from '@angular/compiler-cli/src/ngtsc/annotations/src/util';
import * as math from 'mathjs';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  form: FormGroup;
  @Input() data: Card;
  result: string;

  constructor(
    private formBuilder: FormBuilder
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
    if (this.data.title === 'Error Absoluto') {
      this.result = this.errorAbsoluto(values.input1, values.input2);
    }
    if (this.data.title === 'Error Relativo'){
      this.result = this.errorRelativo(values.input1, values.input2);
    }
    if (this.data.title === 'Decimales Correctos'){
      this.result = this.decimalesCorrectos(values.input1, values.input2, values.input3);
    }
    if (this.data.title === 'Búsquedas'){
      this.result = this.busquedas(values.input1, values.input2, values.input3, values.input4);
    }
    if (this.data.title === 'Bisección'){
      this.result = this.biseccion(values.input1, values.input2, values.input3, values.input4, values.input5);
    }
    if (this.data.title === 'Regla Falsa'){
      this.result = this.reglaFalsa(values.input1, values.input2, values.input3, values.input4, values.input5);
    }
    if (this.data.title === 'Punto fijo'){
      this.result = this.puntofijo(values.input1, values.input2, values.input3, values.input4);
    }
    if (this.data.title === 'Newton'){
      this.result = this.newton(values.input1, values.input2, values.input3, values.input4);
    }
    if (this.data.title === 'Secante'){
      this.result = this.secante(values.input1, values.input2, values.input3, values.input4, values.input5);
    }
    if (this.data.title === 'Raices multiples'){
      this.result = this.raicesmlt(values.input1, values.input2, values.input3, values.input4);
    }
    if (this.data.title === 'Gaussiana simple'){
      this.result = this.gausspl(values.input1, values.input2);
    }
    if (this.data.title === 'Gaussiana con pivoteo parcial'){
      this.result = this.gausspar(values.input1, values.input2);
    }
    if (this.data.title === 'Gaussiana con pivoteo total'){
      this.result = this.gausstot(values.input1, values.input2);
    }
    if (this.data.title === 'LU con eliminación gaussiana simple'){
      this.result = this.lusimpl(values.input1, values.input2);
    }
    if (this.data.title === 'Jacobi'){
      this.result = this.jacobi(values.input1, values.input2, values.input3, values.input4, values.ipnut5);
    }
    if (this.data.title === 'Gauss-Seidel'){
      this.result = this.gseidel(values.input1, values.input2, values.input3, values.input4, values.ipnut5);
    }
    if (this.data.title === 'Vandermonde'){
      this.result = this.vandermonde(values.input1, values.input2);
    }
    if (this.data.title === 'Diferencias divididas'){
      this.result = this.difdivididas(values.input1, values.input2);
    }
    if (this.data.title === 'Splines'){
      this.result = this.splines(values.input1, values.input2);
    }
  }

  errorAbsoluto(valorVerdadero: number, valorAproximado: number): string {
    const result = valorVerdadero - valorAproximado;
    return String(result);
  }

  errorRelativo(Error: number, valor: number): string {
    const result = Error / valor;
    return String(result);
  }

  decimalesCorrectos(x: number, xAproximado: number, decimal: number): string{
    const resultMenor = xAproximado - 0.5 * Math.pow(10, -(decimal));
    const resultadoMayor = xAproximado + 0.5 * Math.pow(10, -(decimal));
    if (resultMenor <= x && x < resultadoMayor) { return String(1); }
    else { return String(2); }
  }

  busquedas(f: string, x0: number, h: number, nMax: number): string{
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

  biseccion(f: string, a: number, b: number, tol: number, nMax: number): string{
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

  reglaFalsa(f: string, a: number, b: number, tol: number, nMAX: number): string{
    const fa = math.evaluate(f.replace(/[xX]/g, '(' + String(a) + ')'));
    const fb = math.evaluate(f.replace(/[xX]/g, '(' + String(b) + ')'));
    let pm = (fb * a - fa * b) / (fb - fa);
    const fpm = math.evaluate(f.replace(/[xX]/g, '(' + String(pm) + ')'));
    let e = 1000;
    let cont = 1;
    while (e > tol && cont < nMAX){
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

  puntofijo(f: string, x0: number, tol: number, nMax: number): string{
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

  newton(f: string, x0: number, tol: number, nMax: number): string{
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

    return ('Solucion = ' + xAct + '\n' + 'Iteraciones = ' + cont + + '\n' + 'Error = ' + e);
  }

  secante(f: string, x0: number, x1: number, tol: number, nMax: number): string{
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

  raicesmlt(f: string, x0: number, tol: number, nMax: number): string{
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
    const sep = matrixI.split(';');
    const sep2 = [];
    const c = vectorC.split(';');
    for (let i = 0; i < sep.length; i++) {
      sep2.push(sep[i].split(','));
      sep2[i].push(c[i]);
    }

    for (let i = 0; i < sep2.length - 1; i++) {
      for (let j = 0; j < sep[i].length - 1; j++) {
        sep2[i][j] = parseInt(sep2[i][j], 10);
      }
    }

    for (let i = 0; i < (sep2.length - 1); i++) {
      for (let j = i + 1; j < sep2.length; j++) {
        if (sep2[j][i] !== 0) {
          const cons = sep2[j][i] / sep2[i][i];
          for (let k = 0; k < sep2[i].length; k++) {
            sep2[j][k] -= (sep2[i][k] * cons);
          }
        }
      }
    }

    console.log(sep2);

    return '[ ' + sep2 + ' ]';
  }

  gausspar(matrixI: string, vectorC: string): string {
    return 'Pendiente';
  }

  gausstot(matrixI: string, vectorC: string): string {
    return 'Pendiente';
  }

  lusimpl(matrixI: string, vectorC: string): string {
    return 'Pendiente';
  }

  jacobi(matrixI: string, vectorC: string, x0: number, tol: number, nMax: number): string {
    return 'Pendiente';
  }

  gseidel(matrixI: string, vectorC: string, x0: number, tol: number, nMax: number): string {
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

  getErrorMessage(): string {
    return 'Los valores son obligatorios y no pueden ser mayores a 8 cifras';
  }

  createFormValidation(length: number): void {
    const arrayFormGroup: any = {};
    for (let i = 1; i <= length; i++) {
      arrayFormGroup['input' + i] = ['', [Validators.required, Validators.maxLength(50)]];
    }
    this.form = this.formBuilder.group(arrayFormGroup);
  }
}
