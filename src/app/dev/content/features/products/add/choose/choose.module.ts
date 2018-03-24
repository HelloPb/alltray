import { NgModule } from '@angular/core';
import { ProductAddChooseComponent } from './choose.component';
import { ProductAddChooseRoutingModule } from './choose-routing.module';
import { SharedModule } from '../../../../../shared/modules/shared.module';

@NgModule({
  imports: [
    SharedModule
  ],
  declarations: [ProductAddChooseComponent]
})
export class ProductAddChooseModule { }

@NgModule({
  exports: [
    ProductAddChooseModule,
    ProductAddChooseRoutingModule,
  ]
})
export class ProductAddChooseExModule { }
