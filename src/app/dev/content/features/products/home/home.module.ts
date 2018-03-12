import { NgModule } from '@angular/core';
import { ProductHomeComponent } from './home.component';
import { SharedModule } from '../../../../shared/modules/shared/shared.module';
import { ProductHomeRoutingModule } from './home-routing.module';
import { ProductHomeResultComponent } from './result/result.component';
import { ProductSearchCriteriaModule } from '../shared/search-criteria/search-criteria.module';
import { CardModule } from '../../../../shared/components/card/card.module';

@NgModule({
  imports: [
    SharedModule,
    ProductSearchCriteriaModule,
    CardModule
  ],
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
