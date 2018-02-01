import {NgModule} from '@angular/core';
import {SyszComponent} from './sysz.component';
import {SharedModule} from '../../../shared.module';
import {SyglComponent} from '../sygl.component';



@NgModule({
  declarations: [SyszComponent],
  imports: [SharedModule],
  exports: [SyszComponent]
})

export class SyszModule {

}
