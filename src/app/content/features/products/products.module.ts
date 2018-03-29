import { NgModule } from '@angular/core';
import { ProductsComponent } from './products.component';
import { ProductsRoutingModule } from './products-routing.module';
import { ItemsService } from '../../../shared/services/api/items/items.service';
import { SharedModule } from '../../../shared/modules/shared.module';
import { ItemResolver } from '../../../shared/services/resolver/item/item.resolver';

@NgModule({
  imports: [
    SharedModule
  ],
  declarations: [ProductsComponent],
  providers: [
    ItemResolver,
    ItemsService
  ]
})
export class ProductsModule { }

@NgModule({
  exports: [
    ProductsRoutingModule,
    ProductsModule
  ]
})
export class ProductsExModule { }
