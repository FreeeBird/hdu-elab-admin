import {NgModule} from '@angular/core';
import {OrdersComponent} from './orders.component';
import {SharedModule} from '../../shared.module';
import {ComponentsModule} from '@components/components.module';
import {ArrangedComponent} from './arranged/arranged.component';
import {DisarrangedComponent} from './disarranged/disarranged.component';
import {AlterComponent} from './alter/alter.component';
import {OrderDetailComponent} from './orderDetail/orderDetail.component';

@NgModule({
  declarations: [
    OrdersComponent,
    ArrangedComponent,
    DisarrangedComponent,
    AlterComponent,
    OrderDetailComponent
  ],
  imports: [
    SharedModule.forRoot(),
    ComponentsModule
  ],
  exports: [
    OrdersComponent
  ]
})

export class OrdersModule {

}
