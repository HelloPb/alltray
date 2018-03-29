import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductAddDoneComponent } from './done.component';
import { Routes, RouterModule } from '@angular/router';
import { ActiveItemResolver } from '../services/resolver/active-item.resolver';
const routes: Routes = [
  {
    path: '',
    component: ProductAddDoneComponent,
    resolve: { item: ActiveItemResolver }
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
