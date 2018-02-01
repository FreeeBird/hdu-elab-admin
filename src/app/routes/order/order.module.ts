import {NgModule} from '@angular/core';
import {OrderComponent} from './order.component';
import {SharedModule} from '../../shared.module';
import {ComponentsModule} from "@components/components.module";

@NgModule({
  declarations: [
    OrderComponent
  ],
  imports: [
    SharedModule.forRoot(),
    ComponentsModule
  ],
  exports: [
    OrderComponent
  ]
})

export class OrderModule {

}
