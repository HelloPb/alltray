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
        loadChildren: 'app/dev/content/features/products/home/home.module#ProductHomeExModule'
      },
      {
        path: 'search',
        loadChildren: 'app/dev/content/features/products/search/search.module#ProductSearchExModule'
      },
      {
        path: 'items',
        loadChildren: 'app/dev/content/features/products/items/items.module#ProductItemsExModule'
      },
      {
        path: 'item',
        loadChildren: 'app/dev/content/features/products/item/item.module#ProductItemExModule'
      },
      {
        path: 'add',
        loadChildren: 'app/dev/content/features/products/add/add.module#ProductAddExModule'
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
