import { NgModule } from '@angular/core';
import { ProductItemsComponent } from './items.component';
import { ProductItemsRoutingModule } from './items-routing.module';
import { ProductItemsResultComponent } from './result/result.component';
import { ProductSearchCriteriaModule } from '../shared/search-criteria/search-criteria.module';
import { SharedModule } from '../../../../shared/modules/shared.module';

@NgModule({
  imports: [
    SharedModule,
    ProductSearchCriteriaModule
  ],
  declarations: [ProductItemsComponent, ProductItemsResultComponent]
})
export class ProductItemsModule { }

@NgModule({
  exports: [
    ProductItemsRoutingModule,
    ProductItemsModule
  ]
})
export class ProductItemsExModule { }
