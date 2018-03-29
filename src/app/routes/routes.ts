import {ModuleWithProviders} from '@angular/core';

import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {LoginComponent} from './login/login.component';
import {IndexComponent} from './index/index.component';
import {CanAuthProvide} from '@core/services/auth.service';
import {CalendarComponent} from './calendar/calendar.component';
import {ArrangedComponent} from './orders/arranged/arranged.component';
import {DisarrangedComponent} from './orders/disarranged/disarranged.component';
import {ProfileComponent} from './profile/profile.component';
import {passwordEditComponent} from './passwordEdit/passwordEdit.component';
import {OrderDetailComponent} from './orders/orderDetail/orderDetail.component';
import {HistoricalOrdersComponent} from './orders/historicalOrders/historicalOrders.component';

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
            },
            {
                path: 'arranged/history', component: HistoricalOrdersComponent, canActivate: [CanAuthProvide],
                data: {
                    breadcrumb: '历史预约'
                }
            },
            {
                path: 'disarranged', component: DisarrangedComponent, canActivate: [CanAuthProvide],
                data: {
                    breadcrumb: '未安排预约'
                }
            }, {
                path: 'arranged/edit', component: OrderDetailComponent, canActivate: [CanAuthProvide],
                data: {
                    breadcrumb: '预约修改'
                }
            },  {
                path: 'profile', component: ProfileComponent, canActivate: [CanAuthProvide],
                data: {
                    breadcrumb: '个人资料'
                }
            },  {
                path: 'passwordEdit', component: passwordEditComponent, canActivate: [CanAuthProvide],
                data: {
                    breadcrumb: '密码修改'
                }
            },
            {path: '', redirectTo: 'index', pathMatch: 'full'}
        ]
    },
    {path: '**', redirectTo: 'index', pathMatch: 'full'}
];

