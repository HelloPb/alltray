import { NgModule } from '@angular/core';
import { ProductItemsComponent } from './items.component';
import { ProductItemsRoutingModule } from './items-routing.module';
import { ProductItemsResultComponent } from './result/result.component';
import { SharedModule } from '../../../../shared/modules/shared.module';
import { ProductSearchItemsComponent } from './search/search.component';

@NgModule({
  imports: [
    SharedModule
  ],
  declarations: [ProductItemsComponent, ProductItemsResultComponent, ProductSearchItemsComponent]
})
export class ProductItemsModule { }

@NgModule({
  exports: [
    ProductItemsRoutingModule,
    ProductItemsModule
  ]
})
export class ProductItemsExModule { }
