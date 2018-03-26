import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductItemsComponent } from './items.component';
import { ProductItemsResultComponent } from './result/result.component';

const routes: Routes = [
  {
    path: '',
    component: ProductItemsComponent,
    children: [
      {
        path: '',
        component: ProductItemsResultComponent
      },
      {
        path: ':id',
        component: ProductItemsResultComponent
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
export class ProductItemsRoutingModule { }
