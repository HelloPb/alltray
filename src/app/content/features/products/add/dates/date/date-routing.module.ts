import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductAddDateComponent } from './date.component';
import { ActiveItemDateResolver } from '../../services/resolver/active-item-date.resolver';

const routes: Routes = [
  {
    path: '',
    resolve: { date: ActiveItemDateResolver },
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
