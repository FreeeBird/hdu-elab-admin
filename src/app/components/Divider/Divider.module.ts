import {NgModule} from '@angular/core';
import {SharedModule} from '../../shared.module';
import {SettingsService} from '@core/services/settings.service';
import {DividerComponent} from './Divider.component';
import {Router} from '@angular/router';

@NgModule({
  declarations: [
    DividerComponent
  ],
  imports: [SharedModule],
  exports: [DividerComponent]
})

export class DividerModule {
  constructor(public settings: SettingsService, private router: Router) {
  }
}
