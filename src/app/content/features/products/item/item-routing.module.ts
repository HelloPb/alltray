import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductItemComponent } from './item.component';
import { ActiveItemResolver } from '../add/services/resolver/active-item.resolver';

const routes: Routes = [
  {
    path: ':id',
    component: ProductItemComponent,
    resolve: [ActiveItemResolver]
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
export class ProductItemRoutingModule { }
