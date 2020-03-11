import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsRoutingModule } from './products-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { ProductItemComponent } from './containers/product-item/product-item.component';
import { ProductsComponent } from './containers/products/products.component';
import { ReactiveFormsModule } from '@angular/forms';
import { PizzaItemComponent } from './components/pizza-item/pizza-item.component';
import { PizzaDisplayComponent } from './components/pizza-display/pizza-display.component';
import { PizzasService } from './services/pizzas.service';
/* // components
import * as fromComponents from '../products/components';

// containers
import * as fromContainers from '../products/containers';

// services
import * as fromServices from '../products/services'; */

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    ProductsRoutingModule
  ],

  declarations: [
    ProductItemComponent,
    ProductsComponent,
    PizzaItemComponent,
    PizzaDisplayComponent
  ],
  providers: [PizzasService]
  /* providers: [...fromServices.services],
  declarations: [...fromContainers.containers, ...fromComponents.components],
  exports: [...fromContainers.containers, ...fromComponents.components], */
})
export class ProductsModule {}
