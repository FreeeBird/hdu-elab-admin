import {NgModule} from '@angular/core';
import {AlterComponent} from './alter.component';
import {SharedModule} from '../../../shared.module';
import {ComponentsModule} from '@components/components.module';

@NgModule({
  declarations: [
      AlterComponent
  ],
  imports: [
    SharedModule.forRoot(),
    ComponentsModule
  ],
  exports: [
      AlterComponent
  ]
})

export class AlterModule {

}
