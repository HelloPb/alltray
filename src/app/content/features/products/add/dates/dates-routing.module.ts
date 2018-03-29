import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductAddDatesComponent } from './dates.component';
import { ActiveItemResolver } from '../services/resolver/active-item.resolver';
const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: ProductAddDatesComponent,
        resolve: { item: ActiveItemResolver },
      },
      {
        path: ':id',
        loadChildren: 'app/content/features/products/add/dates/date/date.module#ProductAddDateExModule'
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
export class ProductAddDatesRoutingModule { }
