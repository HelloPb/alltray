import { NgModule } from '@angular/core';
import { SharedModule } from '../../../../../shared/modules/shared/shared.module';
import { ProductAddStockComponent } from './stock.component';
import { ProductAddStockRoutingModule } from './stock-routing.module';

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
