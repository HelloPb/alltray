import { NgModule } from '@angular/core';
import { SharedModule } from '../../../../shared/modules/shared/shared.module';
import { ProductAddComponent } from './add.component';
import { ProductAddRoutingModule } from './add-routing.module';
import { EditItemService } from './services/provider/edit-item.service';
import { EditItemResolver } from './services/resolver/edit-item.resolver';
import { NewItemResolver } from './services/resolver/new-item.resolver';
import { BlankItemResolver } from './services/resolver/blank-item.resolver';
import { EditItemDateExdResolver } from './services/resolver/edit-item-date-exd.resolver';
import { EditItemDateWdsResolver } from './services/resolver/edit-item-date-wds.resolver';
import { EditItemDateResolver } from './services/resolver/edit-item-date.resolver';

@NgModule({
  imports: [
    SharedModule
  ],
  declarations: [
    ProductAddComponent
  ],
  providers: [
    EditItemDateExdResolver,
    EditItemDateWdsResolver,
    EditItemDateResolver,
    EditItemResolver,
    EditItemService,
    NewItemResolver,
    BlankItemResolver
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
