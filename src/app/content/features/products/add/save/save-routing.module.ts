import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductAddSaveComponent } from './save.component';
import { ActiveItemResolver } from '../services/resolver/active-item.resolver';

const routes: Routes = [
  {
    path: '',
    component: ProductAddSaveComponent,
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
export class ProductAddSaveRoutingModule { }
