import {NgModule} from '@angular/core';
import {YyglComponent} from './yygl.component';
import {SharedModule} from '../../shared.module';
import {DetailComponent} from './detail/detail.component';

@NgModule({
  declarations: [YyglComponent, DetailComponent],
  imports: [SharedModule],
  exports: [YyglComponent]
})

export class YyglModule {

}
