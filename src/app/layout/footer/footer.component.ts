import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {SettingsService} from '@core/services/settings.service';

@Component({
  selector: 'app-footer',
  templateUrl: 'footer.component.html',
  styleUrls: ['./footer.component.less'],
})
export class FooterComponent {
  constructor(public settings: SettingsService, private router: Router) {
  }
}
