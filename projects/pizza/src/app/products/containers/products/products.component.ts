import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { Pizza } from '../../models/pizza.model';
import { Store } from '@ngrx/store';
import * as fromStore from '../../store';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  pizzas$: Observable<Pizza[]>;

  constructor(private store :Store<fromStore.ProductsState>) { }

  ngOnInit() {
   this.pizzas$=this.store.select(fromStore.getAllPizzas);
   this.store.dispatch(new fromStore.LoadPizzas());
  }
  

}
