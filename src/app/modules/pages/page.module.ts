import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { PageComponent } from './page/page.component';
import { PageRoutingModule } from './page-routing.module';

@NgModule({
  declarations: [
    PageComponent
  ],
  imports: [
    SharedModule,
    PageRoutingModule
  ]
})

export class PageModule { }
