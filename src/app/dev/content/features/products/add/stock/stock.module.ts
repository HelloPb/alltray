import { NgModule } from '@angular/core';
import { ProductAddStockComponent } from './stock.component';
import { ProductAddStockRoutingModule } from './stock-routing.module';
import { SharedModule } from '../../../../../shared/modules/shared.module';

@NgModule({
  imports: [
    SharedModule
  ],
  declarations: [ProductAddStockComponent]
})
export class ProductAddStockModule { }

@NgModule({
  exports: [
    ProductAddStockRoutingModule,
    ProductAddStockModule
  ]
})
export class ProductAddStockExModule { }
