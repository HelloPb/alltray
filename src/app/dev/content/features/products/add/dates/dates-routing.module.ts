import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditItemResolver } from '../services/resolver/edit-item.resolver';
import { BlankItemResolver } from '../services/resolver/blank-item.resolver';
import { ProductAddDatesComponent } from './dates.component';
import { EditItemDateResolver } from '../services/resolver/edit-item-date.resolver';
import { EditItemDateExdResolver } from '../services/resolver/edit-item-date-exd.resolver';
import { EditItemDateWdsResolver } from '../services/resolver/edit-item-date-wds.resolver';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        resolve: { item: BlankItemResolver }
      },
      {
        path: ':id',
        resolve: { item: EditItemResolver },
        children: [
          {
            path: '',
            component: ProductAddDatesComponent
          }
          ,
          {
            path: 'date',
            loadChildren: 'app/dev/content/features/products/add/dates/date/date.module#ProductAddDateExModule'            // children: [
            //   {
            //     path: 'exd/:id',
            //     component: ExclusiveDatesComponent,
            //     resolve: { item: EditItemDateExdResolver }
            //   },
            //   {
            //     path: 'wds/:id',
            //     component: WeekDaysComponent,
            //     resolve: { item: EditItemDateWdsResolver },
            //   }]
          }
        ]
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
