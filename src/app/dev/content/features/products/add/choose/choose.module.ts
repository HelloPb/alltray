import { NgModule } from '@angular/core';
import { SharedModule } from '../../../../../shared/modules/shared/shared.module';
import { ProductAddChooseComponent } from './choose.component';
import { ProductAddChooseRoutingModule } from './choose-routing.module';

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
