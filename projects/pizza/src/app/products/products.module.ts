import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsRoutingModule } from './products-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';


// components
import * as fromComponents from '../products/components';

// containers
import * as fromContainers from '../products/containers';

// services
import * as fromServices from '../products/services';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    ProductsRoutingModule
  ],

  //providers: [PizzasService]
  providers: [...fromServices.services],
  declarations: [...fromContainers.containers, ...fromComponents.components],
  exports: [...fromContainers.containers, ...fromComponents.components],
})
export class ProductsModule {}
