import { NgModule } from '@angular/core';
import { ProductAddSaveComponent } from './save.component';
import { ProductAddSaveRoutingModule } from './save-routing.module';
import { SharedModule } from '../../../../../shared/modules/shared.module';

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
