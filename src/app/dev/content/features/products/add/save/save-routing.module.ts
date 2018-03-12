import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductAddSaveComponent } from './save.component';
import { EditItemResolver } from '../services/resolver/edit-item.resolver';
import { BlankItemResolver } from '../services/resolver/blank-item.resolver';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: ProductAddSaveComponent,
        resolve: { item: BlankItemResolver }
      },
      {
        path: ':id',
        component: ProductAddSaveComponent,
        resolve: { item: EditItemResolver }
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
export class ProductAddSaveRoutingModule { }
