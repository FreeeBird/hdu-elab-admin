import {NgModule} from '@angular/core';
import {NHttpClinet} from './utils/http.client';
import {CanAuthProvide} from './services/auth.service';
import {SettingsService} from './services/settings.service';
import {MenuService} from './services/menu.service';
import {AjaxService} from '@core/services/ajax.service';

@NgModule({
  providers: [
    NHttpClinet,
    CanAuthProvide,
    SettingsService,
    MenuService,
    AjaxService
  ]
})

export class CoreModule {
}
