import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Card} from '../../inteface/card-interface';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  form: FormGroup;
  @Input() data: Card;
  result: number;

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
    if (this.data.title === 'Decimales correctos'){
      this.result = this.decimalesCorrectos(values.input1, values.input2, values.input3);
      console.log(this.result);
    }
  }

  errorAbsoluto(valorVerdadero: number, valorAproximado: number): number {
    const result = valorVerdadero - valorAproximado;
    return result;
  }

  errorRelativo(Error: number, valor: number): number {
    const result = Error / valor;
    return result;
  }

  decimalesCorrectos(x: number, xAproximado: number, decimal: number): number{
    const resultMenor = xAproximado - 0.5 * Math.pow(10, -(decimal));
    const resultadoMayor = xAproximado + 0.5 * Math.pow(10, -(decimal));
    if (resultMenor <= x && x < resultadoMayor) { return 1; }
    else { return 2; }
  }

  getErrorMessage(): string {
    return 'Los valores son obligatorios y no pueden ser mayores a 8 cifras';
  }

  createFormValidation(length: number): void {
    const arrayFormGroup: any = {};
    for (let i = 1; i <= length; i++) {
      arrayFormGroup['input' + i] = ['', [Validators.required, Validators.maxLength(8)]];
    }
    this.form = this.formBuilder.group(arrayFormGroup);
  }
}
