import {NgModule} from '@angular/core';
import {HistoricalOrdersComponent} from './historicalOrders.component';
import {SharedModule} from '../../../shared.module';


@NgModule({
  declarations: [HistoricalOrdersComponent],
  imports: [SharedModule],
  exports: [HistoricalOrdersComponent]
})

export class HistoricalOrdersModule {

}
