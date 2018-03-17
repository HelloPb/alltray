import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductSearchComponent } from './search.component';
import { SharedModule } from '../../../../shared/modules/shared/shared.module';
import { ProductSearchRoutingModule } from './search-routing.module';
import { ProductSearchResultComponent } from './result/result.component';
import { ProductSearchCriteriaModule } from '../shared/search-criteria/search-criteria.module';

@NgModule({
  imports: [
    SharedModule,
    ProductSearchCriteriaModule
  ],
  declarations: [
    ProductSearchComponent,
    ProductSearchResultComponent]
})
export class ProductSearchModule { }

@NgModule({
  exports: [
    ProductSearchRoutingModule,
    ProductSearchModule
  ]
})
export class ProductSearchExModule { }
