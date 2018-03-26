import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductManageComponent } from './manage.component';
import { ProductManageRoutingModule } from './manage-routing.module';
import { SharedModule } from '../../../../shared/modules/shared.module';
import { ProductSearchManageComponent } from './search/search.component';
import { ProductManageResultComponent } from './result/result.component';

@NgModule({
  imports: [
    SharedModule
  ],
  declarations: [ProductManageComponent, ProductSearchManageComponent, ProductManageResultComponent]
})
export class ProductManageModule { }

@NgModule({
  exports: [
    ProductManageRoutingModule,
    ProductManageModule
  ]
})
export class ProductManageExModule { }
