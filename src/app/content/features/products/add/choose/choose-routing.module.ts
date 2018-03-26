import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductAddChooseComponent } from './choose.component';
import { EditItemResolver } from '../services/resolver/edit-item.resolver';
import { NewItemResolver } from '../services/resolver/new-item.resolver';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: ProductAddChooseComponent,
        resolve: { item: NewItemResolver }
      },
      {
        path: ':id',
        component: ProductAddChooseComponent,
        resolve: { item: EditItemResolver }
      }]
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
export class ProductAddChooseRoutingModule { }
