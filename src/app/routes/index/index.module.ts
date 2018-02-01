import {NgModule} from '@angular/core';
import {SharedModule} from '../../shared.module';
import {IndexComponent} from './index.component';

@NgModule({
  declarations: [
    IndexComponent
  ],
  imports: [
    SharedModule.forRoot()
  ],
  exports: [
    IndexComponent
  ]
})

export class IndexModule {

}
