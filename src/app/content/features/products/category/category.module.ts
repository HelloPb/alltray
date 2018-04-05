import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductCategoryComponent } from './category.component';
import { ProductCategoryAddEditComponent } from './add-edit/add-edit.component';
import { AddProductCategoryResover } from './resolvers/add-product-category.service';
import { EditProductCategoryResover } from './resolvers/edit-product-category.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ProductCategoryComponent, ProductCategoryAddEditComponent],
  providers: [EditProductCategoryResover, AddProductCategoryResover]
})
export class ProductCategoryModule { }
