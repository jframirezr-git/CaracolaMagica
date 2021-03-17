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
