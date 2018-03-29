import {NgModule} from '@angular/core';
import {OrdersComponent} from './orders.component';
import {SharedModule} from '../../shared.module';
import {ComponentsModule} from '@components/components.module';
import {ArrangedComponent} from './arranged/arranged.component';
import {DisarrangedComponent} from './disarranged/disarranged.component';
import {OrderDetailComponent} from './orderDetail/orderDetail.component';
import {HistoricalOrdersComponent} from './historicalOrders/historicalOrders.component';

@NgModule({
  declarations: [
    OrdersComponent,
    ArrangedComponent,
    DisarrangedComponent,
    HistoricalOrdersComponent,
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
