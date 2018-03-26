import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductAddDoneComponent } from './done.component';
import { EditItemResolver } from '../services/resolver/edit-item.resolver';
import { Routes, RouterModule } from '@angular/router';
import { BlankItemResolver } from '../services/resolver/blank-item.resolver';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: ProductAddDoneComponent,
        resolve: { item: BlankItemResolver }
      },
      {
        path: ':id',
        component: ProductAddDoneComponent,
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
export class ProductAddDoneRoutingModule { }
