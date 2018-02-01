import {ModuleWithProviders} from '@angular/core';

import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {LoginComponent} from './login/login.component';
import {IndexComponent} from './index/index.component';
import {UserComponent} from './user/user.component';
import {CanAuthProvide} from '@core/services/auth.service';
import {ChartsComponent} from './charts/charts.component';
import {CalendarComponent} from './calendar/calendar.component';
import {ArrangedComponent} from './orders/arranged/arranged.component';
import {DisarrangedComponent} from './orders/disarranged/disarranged.component';
import {AlterComponent} from './orders/alter/alter.component';

export const routes: Routes = [
    {path: 'login', component: LoginComponent, canLoad: [CanAuthProvide]},
    {
        path: '', component: HomeComponent, canActivate: [CanAuthProvide],
        children: [
            {
                path: 'index', component: IndexComponent, canActivate: [CanAuthProvide],
                data: {
                    breadcrumb: '首页'
                }
            },
            {
                path: 'user', component: UserComponent, canActivate: [CanAuthProvide],
                data: {
                    breadcrumb: '用户'
                }
            },
            {
                path: 'calendar', component: CalendarComponent, canActivate: [CanAuthProvide],
                data: {
                    breadcrumb: '本周上机课程'
                }
            },
            {
                path: 'arranged', component: ArrangedComponent, canActivate: [CanAuthProvide],
                data: {
                    breadcrumb: '已安排预约'
                }
            }, {
                path: 'disarranged', component: DisarrangedComponent, canActivate: [CanAuthProvide],
                data: {
                    breadcrumb: '未安排预约'
                }
            }, {
                path: 'alter', component: AlterComponent, canActivate: [CanAuthProvide],
                data: {
                    breadcrumb: '预约修改'
                }
            },
            {path: 'charts', component: ChartsComponent, canActivate: [CanAuthProvide]},
            {path: '', redirectTo: 'index', pathMatch: 'full'}
        ]
    },
    {path: '**', redirectTo: 'index', pathMatch: 'full'}
];

