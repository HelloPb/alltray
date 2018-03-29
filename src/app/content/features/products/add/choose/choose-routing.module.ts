import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductAddChooseComponent } from './choose.component';
import { ActiveItemResolver } from '../services/resolver/active-item.resolver';

const routes: Routes = [
  {
    path: '',
    component: ProductAddChooseComponent,
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
export class ProductAddChooseRoutingModule { }
