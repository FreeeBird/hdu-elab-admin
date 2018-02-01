import {NgModule} from '@angular/core';
import {AddcourseComponent} from './addcourse.component';
import {SharedModule} from '../../../shared.module';

@NgModule({
  declarations: [AddcourseComponent],
  imports: [SharedModule],
  exports: [AddcourseComponent]
})

export class AddcourseModule {

}
