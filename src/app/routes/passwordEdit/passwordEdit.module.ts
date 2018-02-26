import {NgModule} from '@angular/core';
import {passwordEditComponent} from './passwordEdit.component';
import {SharedModule} from '../../shared.module';

@NgModule({
  declarations: [passwordEditComponent],
  imports: [SharedModule],
  exports: [passwordEditComponent]
})

export class passwordEditModule {

}
