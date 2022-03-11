import { Component, OnInit } from '@angular/core';
import { ServiceDishes } from '../serviceDishes.class';

@Component({
  selector: 'app-dishlist',
  templateUrl: './dishlist.component.html',
  styleUrls: ['./dishlist.component.scss']
})
export class DishlistComponent implements OnInit {

  constructor(public service: ServiceDishes) {
  }

  ngOnInit(): void {

  }

  addToBasket(i: number) {
    console.log(i);
    if (this.service.dishesInBasket.includes(this.service.dishes[i])) {
      let indexOfThisDish = this.service.dishesInBasket.indexOf(this.service.dishes[i])
      this.service.dishesInBasket[indexOfThisDish]['amount']++;

      console.log(this.service.dishesInBasket.indexOf(this.service.dishes[i]));
      console.log('dishes in basket', this.service.dishesInBasket)
      console.log('dishes', this.service.dishes);
      console.log('The dish is already in basket, please check amount')

    } else {
      this.service.dishesInBasket.push(this.service.dishes[i]);

    }

  }
}
