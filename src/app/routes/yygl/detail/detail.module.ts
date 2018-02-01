import {NgModule} from '@angular/core';
import {DetailComponent} from './detail.component';
import {SharedModule} from '../../../shared.module';

@NgModule({
  declarations: [DetailComponent],
  imports: [SharedModule],
  exports: [DetailComponent]
})

export class DetailModule {

}
