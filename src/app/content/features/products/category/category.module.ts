import { NgModule } from '@angular/core';
import { ProductCategoryComponent } from './category.component';
import { ProductCategoryAddEditComponent } from './add-edit/add-edit.component';
import { AddProductCategoryResover } from './resolvers/add-product-category.service';
import { EditProductCategoryResover } from './resolvers/edit-product-category.service';
import { ProductCategoryRoutingModule } from './category-routing.module';
import { SharedModule } from '../../../../shared/modules/shared.module';

@NgModule({
  imports: [
    SharedModule
  ],
  declarations: [ProductCategoryComponent, ProductCategoryAddEditComponent],
  providers: [EditProductCategoryResover, AddProductCategoryResover]
})
export class ProductCategoryModule { }

@NgModule({
  exports: [
    ProductCategoryRoutingModule,
    ProductCategoryModule
  ]
})
export class ProductCategoryExModule { }
