import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductItemComponent } from './item.component';
import { ItemResolver } from '../../../../shared/services/resolver/item/item.resolver';

const routes: Routes = [
  {
    path: ':id',
    component: ProductItemComponent,
    resolve: [ItemResolver]
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
