import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductAddStockComponent } from './stock.component';
import { ActiveItemResolver } from '../services/resolver/active-item.resolver';

const routes: Routes = [
  {
    path: '',
    component: ProductAddStockComponent,
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
export class ProductAddStockRoutingModule { }
