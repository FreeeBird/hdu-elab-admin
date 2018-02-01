import {NgModule} from '@angular/core';
import {EditcourseComponent} from './editcourse.component';
import {SharedModule} from '../../../shared.module';

@NgModule({
  declarations: [EditcourseComponent],
  imports: [SharedModule],
  exports: [EditcourseComponent]
})

export class EditcourseModule {

}
