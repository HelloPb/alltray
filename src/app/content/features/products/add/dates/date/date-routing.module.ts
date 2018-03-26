import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditItemDateResolver } from '../../services/resolver/edit-item-date.resolver';
import { ProductAddDateComponent } from './date.component';

const routes: Routes = [
  {
    path: ':id',
    resolve: { date: EditItemDateResolver },
    component: ProductAddDateComponent
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
export class ProductAddDateRoutingModule { }
