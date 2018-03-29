import { NgModule } from '@angular/core';
import { ProductAddComponent } from './add.component';
import { ProductAddRoutingModule } from './add-routing.module';
import { EditItemService } from './services/provider/edit-item.service';
import { EditItemResolver } from './services/resolver/edit-item.resolver';
import { NewItemResolver } from './services/resolver/new-item.resolver';
import { SharedModule } from '../../../../shared/modules/shared.module';
import { ActiveItemDateResolver } from './services/resolver/active-item-date.resolver';
import { ActiveItemDateExdResolver } from './services/resolver/active-item-date-exd.resolver';
import { ActiveItemDateWdsResolver } from './services/resolver/active-item-date-wds.resolver';
import { ActiveItemResolver } from './services/resolver/active-item.resolver';

@NgModule({
  imports: [
    SharedModule
  ],
  declarations: [
    ProductAddComponent
  ],
  providers: [
    ActiveItemResolver,
    ActiveItemDateResolver,
    ActiveItemDateExdResolver,
    ActiveItemDateWdsResolver,
    EditItemResolver,
    EditItemService,
    NewItemResolver
  ]
})
export class ProductAddModule { }

@NgModule({
  exports: [
    ProductAddRoutingModule,
    ProductAddModule
  ]
})
export class ProductAddExModule { }
