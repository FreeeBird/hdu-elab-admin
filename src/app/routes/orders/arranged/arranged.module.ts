import {NgModule} from '@angular/core';
import {ArrangedComponent} from './arranged.component';
import {SharedModule} from '../../../shared.module';
import {ComponentsModule} from '@components/components.module';

@NgModule({
  declarations: [
      ArrangedComponent
  ],
  imports: [
    SharedModule.forRoot(),
    ComponentsModule
  ],
  exports: [
      ArrangedComponent
  ]
})

export class ArrangedModule {

}
