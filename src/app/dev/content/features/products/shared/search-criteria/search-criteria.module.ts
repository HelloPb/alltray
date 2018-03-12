import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductSearchCriteriaComponent } from './search-criteria.component';
import { SharedModule } from '../../../../../shared/modules/shared/shared.module';

@NgModule({
  imports: [
    SharedModule
  ],
  declarations: [ProductSearchCriteriaComponent],
  exports: [ProductSearchCriteriaComponent]
})
export class ProductSearchCriteriaModule { }
