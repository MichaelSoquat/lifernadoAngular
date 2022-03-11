import { Component, OnInit } from '@angular/core';
import { ServiceDishes } from '../serviceDishes.class';

@Component({
  selector: 'app-dishlist',
  templateUrl: './dishlist.component.html',
  styleUrls: ['./dishlist.component.scss']
})
export class DishlistComponent implements OnInit {

  constructor(public service: ServiceDishes) { }

  ngOnInit(): void {
  }

}
