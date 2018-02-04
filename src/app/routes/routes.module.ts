import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {IndexModule} from './index/index.module';
import {HomeModule} from './home/home.module';
import {UserModule} from './user/user.module';
import {LoginModule} from './login/login.module';
import {routes} from './routes';
import {CalendarModule} from './calendar/calendar.module';
import {OrdersModule} from './orders/orders.module';


@NgModule({
    imports: [
        RouterModule.forRoot(routes, {useHash: true}),
    ],
    exports: [
        IndexModule,
        HomeModule,
        UserModule,
        LoginModule,
        CalendarModule,
        OrdersModule
    ]
})

export class RoutesModule {

}
