import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {IndexModule} from './index/index.module';
import {HomeModule} from './home/home.module';
import {UserModule} from './user/user.module';
import {LoginModule} from './login/login.module';
import {routes} from './routes';
import {ChartsModule} from './charts/charts.module';
import {CalendarModule} from './calendar/calendar.module';
import {OrdersModule} from './orders/orders.module';
import {ArrangedComponent} from './orders/arranged/arranged.component';
import {DisarrangedComponent} from './orders/disarranged/disarranged.component';


@NgModule({
    imports: [
        RouterModule.forRoot(routes, {useHash: true}),
    ],
    exports: [
        IndexModule,
        HomeModule,
        UserModule,
        LoginModule,
        ChartsModule,
        CalendarModule,
        OrdersModule
    ]
})

export class RoutesModule {

}
