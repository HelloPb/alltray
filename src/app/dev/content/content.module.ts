import { NgModule } from '@angular/core';
import { HeaderModule } from './menu/header/header.module';
import { FooterModule } from './menu/footer/footer.module';
import { ContentComponent } from './content.component';
import { ContentRoutingModule } from './content-routing.module';
import { SharedModule } from '../shared/modules/shared.module';

@NgModule({
  imports: [
    SharedModule,
    HeaderModule,
    FooterModule
  ],
  declarations: [ContentComponent]
})
export class ContentModule { }

@NgModule({
  exports: [
    ContentRoutingModule,
    ContentModule
  ]
})
export class ContentExModule { }
