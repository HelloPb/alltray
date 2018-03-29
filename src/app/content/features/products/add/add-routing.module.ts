import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductAddComponent } from './add.component';
import { NewItemResolver } from './services/resolver/new-item.resolver';
import { EditItemResolver } from './services/resolver/edit-item.resolver';

const children: Routes = [
  {
    path: 'choose',
    loadChildren: 'app/content/features/products/add/choose/choose.module#ProductAddChooseExModule'
  },
  {
    path: 'stock',
    loadChildren: 'app/content/features/products/add/stock/stock.module#ProductAddStockExModule'
  },
  {
    path: 'dates',
    loadChildren: 'app/content/features/products/add/dates/dates.module#ProductAddDatesExModule'
  },
  {
    path: 'save',
    loadChildren: 'app/content/features/products/add/save/save.module#ProductAddSaveExModule'
  },
  {
    path: 'done',
    loadChildren: 'app/content/features/products/add/done/done.module#ProductAddDoneExModule'
  },
  {
    path: '',
    redirectTo: 'choose'
  },
];

const routes: Routes = [
  {
    path: '',
    component: ProductAddComponent,
    resolve: { item: NewItemResolver },
    children: children
  },
  {
    path: ':id',
    component: ProductAddComponent,
    resolve: { item: EditItemResolver },
    children: children
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
export class ProductAddRoutingModule { }
