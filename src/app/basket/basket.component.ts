import { Component, OnInit } from '@angular/core';
import { ServiceDishes } from '../serviceDishes.class';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.scss']
})
export class BasketComponent implements OnInit {

  constructor(public service: ServiceDishes) {
    this.sum();
  }
  prices = 0;
  ngOnInit(): void {
  }
  addAmount(i: number) {
    this.service.dishesInBasket[i]['amount']++;
    this.sum();
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
  }

  sum() {

    if (this.service.dishesInBasket) {
      setInterval(() => {
        this.prices = 0;
        this.service.dishesInBasket.forEach((price) => {

          this.prices += price.price * price.amount;
          console.log(this.prices)
          
        }, 10)
      })
      
    }

  }
}
