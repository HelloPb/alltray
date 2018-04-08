import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductsComponent } from './products.component';

const routes: Routes = [
  {
    path: '',
    component: ProductsComponent,
    children: [
      {
        path: 'home',
        loadChildren: 'app/content/features/products/home/home.module#ProductHomeExModule'
      },
      {
        path: 'items',
        loadChildren: 'app/content/features/products/items/items.module#ProductItemsExModule'
      },
      {
        path: 'item',
        loadChildren: 'app/content/features/products/item/item.module#ProductItemExModule'
      },
      {
        path: 'add',
        loadChildren: 'app/content/features/products/add/add.module#ProductAddExModule'
      },
      {
        path: 'manage',
        loadChildren: 'app/content/features/products/manage/manage.module#ProductManageExModule'
      },
      {
        path: 'category',
        loadChildren: 'app/content/features/products/category/category.module#ProductCategoryExModule'
      },
      {
        path: '',
        redirectTo: 'home'
      }
    ]
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
export class ProductsRoutingModule { }
