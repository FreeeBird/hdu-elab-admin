import {NgModule} from '@angular/core';
import {DisarrangedComponent} from './disarranged.component';
import {SharedModule} from '../../../shared.module';
import {ComponentsModule} from '@components/components.module';

@NgModule({
  declarations: [
      DisarrangedComponent
  ],
  imports: [
    SharedModule.forRoot(),
    ComponentsModule
  ],
  exports: [
      DisarrangedComponent
  ]
})

export class DisarrangedModule {

}
