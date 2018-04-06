import { NgModule } from '@angular/core';
import { ProductsComponent } from './products.component';
import { ProductsRoutingModule } from './products-routing.module';
import { ItemsService } from '../../../shared/services/api/items/items.service';
import { SharedModule } from '../../../shared/modules/shared.module';
import { ItemResolver } from '../../../shared/services/resolver/item/item.resolver';
import { CategoryService } from '../../../shared/services/api/category/category.service';

@NgModule({
  imports: [
    SharedModule
  ],
  declarations: [ProductsComponent],
  providers: [
    ItemResolver,
    ItemsService,
    CategoryService
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
