///<reference path="../../../../node_modules/@angular/forms/src/model.d.ts"/>
import {Component, OnInit} from '@angular/core';
import {FormGroup, Validators, FormBuilder} from '@angular/forms';
import {OrdersService} from './orders.service';
import {Router} from '@angular/router';
import {NzMessageService, NzModalService} from 'ng-zorro-antd';
import {SessionStorageService} from '@core/storage/storage.service';

@Component({
    selector: 'app-orders',
    templateUrl: 'orders.component.html',
    styleUrls: ['./orders.component.less'],
    providers: [OrdersService]
})

export class OrdersComponent {
    constructor(private _storage: SessionStorageService, private confirmServ: NzModalService,
    private fb: FormBuilder, private orderService: OrdersService, private router: Router, private _message: NzMessageService) {
    }
}
