import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductItemComponent } from './item.component';
import { SharedModule } from '../../../../shared/modules/shared/shared.module';
import { ProductItemRoutingModule } from './item-routing.module';

@NgModule({
  imports: [
    SharedModule
  ],
  declarations: [ProductItemComponent]
})
export class ProductItemModule { }

@NgModule({
  exports: [
    ProductItemRoutingModule,
    ProductItemModule
  ]
})
export class ProductItemExModule { }
