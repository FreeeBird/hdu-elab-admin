import {NgModule} from '@angular/core';
import {SharedModule} from '../../../shared.module';
import {DcbgComponent} from './dcbg.component';




@NgModule({
  declarations: [DcbgComponent],
  imports: [SharedModule],
  exports: [DcbgComponent]
})

export class DcbgModule {

}
