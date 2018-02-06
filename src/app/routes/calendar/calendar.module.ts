import {NgModule} from '@angular/core';
import {CalendarComponent} from './calendar.component';
import {SharedModule} from '../../shared.module';

@NgModule({
  declarations: [CalendarComponent],
  imports: [SharedModule],
  exports: [CalendarComponent]
})

export class CalendarModule {
  constructor() {
  }
}
