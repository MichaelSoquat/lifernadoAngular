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
  addAmount(i: number) {
    this.service.dishesInBasket[i]['amount']++;
    console.log( this.service.dishesInBasket[i])
  }

  removeAmount(i: number) {

    if (this.service.dishesInBasket[i]['amount'] > 1) {
      this.service.dishesInBasket[i]['amount']--;
    } else {
      this.deleteAmount(i)
    }
  }

  deleteAmount(i: number) {
    this.service.dishesInBasket[i]['amount'] = 1;
    this.service.dishesInBasket.splice(i, 1);
    console.log(this.service.dishesInBasket)
  }
}
