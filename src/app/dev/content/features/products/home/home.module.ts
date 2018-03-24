import { NgModule } from '@angular/core';
import { ProductHomeComponent } from './home.component';
import { ProductHomeRoutingModule } from './home-routing.module';
import { ProductHomeResultComponent } from './result/result.component';
import { ProductSearchCriteriaModule } from '../shared/search-criteria/search-criteria.module';
import { SharedModule } from '../../../../shared/modules/shared.module';

@NgModule({
  imports: [
    SharedModule,
    ProductSearchCriteriaModule ],
  declarations: [ProductHomeComponent, ProductHomeResultComponent]
})
export class ProductHomeModule { }

@NgModule({
  exports: [
    ProductHomeRoutingModule,
    ProductHomeModule
  ]
})
export class ProductHomeExModule { }
