import { NgModule } from '@angular/core';
import { SharedModule } from '../../../../../shared/modules/shared/shared.module';
import { ProductAddSaveComponent } from './save.component';
import { ProductAddSaveRoutingModule } from './save-routing.module';

@NgModule({
  imports: [
    SharedModule
  ],
  declarations: [ProductAddSaveComponent]
})
export class ProductAddSaveModule { }

@NgModule({
  exports: [
    ProductAddSaveRoutingModule,
    ProductAddSaveModule
  ]
})
export class ProductAddSaveExModule { }
