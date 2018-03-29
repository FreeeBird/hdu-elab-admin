import {NgModule} from '@angular/core';
import {LoaderModule} from './loader/loader.module';
import {DividerModule} from './Divider/Divider.module';

@NgModule({
  exports: [
    LoaderModule,
    DividerModule
  ]
})

export class ComponentsModule {

}
