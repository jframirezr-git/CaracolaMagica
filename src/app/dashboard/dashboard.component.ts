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
    this.data[0] = {
      title: 'Teoria de Errores',
      subtitle: 'Muestra las formulas para la teoria de errores',
      // urlImage: 'https://pbs.twimg.com/profile_images/2388108473/180px-DaConch_400x400.jpg',
      description: 'Muestra las formulas para la teoria de errores,Muestra las formulas para la teoria de errores,Muestra las formulas para la teoria de errores',
      scrBtn: '/dashboard',
      input: ['exponente', 'x']
    };
    console.log(this.data);
  }

}
