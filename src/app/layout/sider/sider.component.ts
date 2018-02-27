import {Component} from '@angular/core';
import {SettingsService} from '@core/services/settings.service';
import {MenuService} from '@core/services/menu.service';

@Component({
  selector: 'app-sider',
  templateUrl: 'sider.component.html',
  styleUrls: ['./sider.component.less']
})
export class SiderComponent {
  theme = true;
  menus: any = [
    {
      'icon': 'home',
      'name': '首页',
      'route': '/index',
    },
    {
      'icon': 'calendar',
      'name': '本周上机课程',
      'route': '/calendar'
    },
    {
      'icon': 'clock-circle-o',
      'name': '上机预约管理',
      'route': '/orders',
      'submenu': [{
        'icon': 'calendar',
        'name': '已安排预约',
        'route': '/arranged'
      }, {
          'icon': 'calendar',
          'name': '未安排预约',
          'route': '/disarranged'
      }]
    }];

  constructor(public settings: SettingsService, private menuService: MenuService) {
    this.theme = this.settings.layout.isDark;
    this.menuService.getMenu();
  }

  switch() {
    this.settings.setLayout('isDark', !this.settings.layout.isDark);
  }
}
