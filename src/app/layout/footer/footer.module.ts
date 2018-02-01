import {NgModule} from '@angular/core';

import {FooterComponent} from './footer.component';
import {SharedModule} from '../../shared.module';

@NgModule({
  declarations: [
    FooterComponent
  ],
  imports: [
    SharedModule.forRoot()
  ],
  exports: [
    FooterComponent
  ]
})

export class FooterModule {
}
