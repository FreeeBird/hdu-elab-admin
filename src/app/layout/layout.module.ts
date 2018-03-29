import {NgModule} from '@angular/core';
import {HeaderModule} from './header/header.module';
import {BreadModule} from './bread/bread.module';
import {SiderModule} from './sider/sider.module';
import {FooterModule} from './footer/footer.module';

@NgModule({
  exports: [HeaderModule, SiderModule, BreadModule, FooterModule]
})

export class LayoutModule {
}
