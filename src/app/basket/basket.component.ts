import { Component, OnInit } from '@angular/core';
import { ServiceDishes } from '../serviceDishes.class';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.scss']
})
export class BasketComponent implements OnInit {

  constructor(public service: ServiceDishes) { }

  ngOnInit(): void {
  }

}
