import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductCategoryAddEditComponent } from './add-edit/add-edit.component';
import { ProductCategoryComponent } from './category.component';
import { EditProductCategoryResover } from './resolvers/edit-product-category.service';
import { AddProductCategoryResover } from './resolvers/add-product-category.service';

const routes: Routes = [
  {
    path: '',
    component: ProductCategoryComponent
  },
  {
    path: 'add',
    resolve: { item: AddProductCategoryResover },
    component: ProductCategoryAddEditComponent
  },
  {
    path: 'edit/:id',
    resolve: { item: EditProductCategoryResover },
    component: ProductCategoryAddEditComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class ProductCategoryRoutingModule { }
