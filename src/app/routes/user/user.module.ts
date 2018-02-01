import {NgModule} from '@angular/core';
import {UserComponent} from './user.component';
import {SharedModule} from '../../shared.module';
import {TableModule} from '@components/table/table.module';
import {UserformComponent} from './userform/userform.component';
import {UserformModule} from './userform/userform.module';
import {HttpModule} from '@angular/http';
@NgModule({
  declarations: [UserComponent],
  exports: [UserComponent],
  imports: [SharedModule, TableModule, UserformModule, HttpModule],
  entryComponents: [UserformComponent]
})

export class UserModule {

}
