import {NgModule} from '@angular/core';
import {SharedModule} from '../../shared.module';
import {ProfileComponent} from './profile.component';

@NgModule({
  declarations: [ProfileComponent],
  imports: [SharedModule],
  exports: [ProfileComponent]
})

export class ProfileModule {

}
