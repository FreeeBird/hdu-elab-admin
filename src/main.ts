import {enableProdMode, ViewEncapsulation} from '@angular/core';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';

import {AppModule} from './app/app.module';
import {environment} from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.log(err));
console.log('警告,请不要在此粘贴执行任何内容或使用第三方插件，这可能会给您的账号安全带来威胁！');
console.log('如有任何疑问请联系%c系统管理员', 'color:red;font-weight:bold;');
