///<reference path="../../../../../node_modules/@angular/forms/src/model.d.ts"/>
import {Component, OnInit} from '@angular/core';
import {FormGroup, Validators, FormBuilder} from '@angular/forms';
import {DisarrangedService} from './disarranged.service';
import {Router} from '@angular/router';
import {NzMessageService, NzModalService} from 'ng-zorro-antd';
import {SessionStorageService} from '@core/storage/storage.service';

@Component({
    selector: 'app-disarranged',
    templateUrl: 'disarranged.component.html',
    styleUrls: ['./disarranged.component.less'],
    providers: [DisarrangedService]
})

export class DisarrangedComponent {
    constructor(private _storage: SessionStorageService, private confirmServ: NzModalService,
    private fb: FormBuilder, private orderService: DisarrangedService, private router: Router, private _message: NzMessageService) {
    }
}
