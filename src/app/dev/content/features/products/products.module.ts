import { NgModule } from '@angular/core';
import { ProductsComponent } from './products.component';
import { SharedModule } from '../../../shared/modules/shared/shared.module';
import { ProductsRoutingModule } from './products-routing.module';
import { ItemsService } from '../../../shared/services/api/items/items.service';
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
