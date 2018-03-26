import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductAddDoneComponent } from './done.component';
import { ProductAddDoneRoutingModule } from './done-routing.module';
import { SharedModule } from '../../../../../shared/modules/shared.module';

@NgModule({
  imports: [
    SharedModule
  ],
  declarations: [ProductAddDoneComponent]
})
export class ProductAddDoneModule { }

@NgModule({
  exports: [
    ProductAddDoneRoutingModule,
    ProductAddDoneModule
  ]
})
export class ProductAddDoneExModule { }
