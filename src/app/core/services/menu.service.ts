import {Injectable} from '@angular/core';
import {NHttpClinet} from '../utils/http.client';
import {SettingsService} from '@core/services/settings.service';

@Injectable()
export class MenuService {
  constructor(private http: NHttpClinet, private setting: SettingsService) {

  }

  getMenu() {
      this.setting.setMenuStatus(true);
  }
}
