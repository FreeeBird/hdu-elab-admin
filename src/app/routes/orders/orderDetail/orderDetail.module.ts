import {NgModule} from '@angular/core';
import {OrderDetailComponent} from './orderDetail.component';
import {SharedModule} from '../../../shared.module';

@NgModule({
  declarations: [OrderDetailComponent],
  imports: [SharedModule],
  exports: [OrderDetailComponent]
})

export class OrderDetailModule {

}
