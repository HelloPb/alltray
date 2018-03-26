import { NgModule } from '@angular/core';
import { ProductHomeComponent } from './home.component';
import { ProductHomeRoutingModule } from './home-routing.module';
import { ProductHomeResultComponent } from './result/result.component';
import { SharedModule } from '../../../../shared/modules/shared.module';
import { ProductSearchHomeComponent } from './search/search.component';

@NgModule({
  imports: [
    SharedModule
  ],
  declarations: [ProductHomeComponent, ProductHomeResultComponent, ProductSearchHomeComponent]
})
export class ProductHomeModule { }

@NgModule({
  exports: [
    ProductHomeRoutingModule,
    ProductHomeModule
  ]
})
export class ProductHomeExModule { }
