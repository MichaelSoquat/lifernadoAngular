import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BasketComponent } from './basket/basket.component';
import { DishlistComponent } from './dishlist/dishlist.component';

const routes: Routes = [
  { path: '', component: DishlistComponent },
  { path: 'dishlist', component: DishlistComponent },
  { path: 'basket', component: BasketComponent },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
