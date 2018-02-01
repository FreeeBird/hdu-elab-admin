import {NgModule} from '@angular/core';
import {LoaderModule} from './loader/loader.module';
import {TableModule} from './table/table.module';
import {DividerModule} from "./Divider/Divider.module";

@NgModule({
  exports: [
    LoaderModule,
    TableModule,
    DividerModule
  ]
})

export class ComponentsModule {

}
