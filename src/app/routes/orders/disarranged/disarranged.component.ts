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

export class DisarrangedComponent implements OnInit {
    constructor(private _storage: SessionStorageService, private confirmServ: NzModalService,
    private DisarrangedService: DisarrangedService, private _message: NzMessageService) {
    }
    private re = {};
    datas = [];
    panels = [
        {
            active: true,
            disabled: false,
            name: '志愿 1',
            id: 0
        },
        {
            active: false,
            disabled: true,
            name: '志愿 2',
            id: 1
        },
        {
            active: false,
            disabled: false,
            name: '志愿 3',
            id: 2
        }
    ];
    private _getData = () => {
        this.DisarrangedService.getOrderList()
            .then((result: any) => {
                const { data } = result;
                /*this.datas = data;*/
                for (let d of data){
                    d.expand = false;
                }
                this.datas = data;
            });
    }

    private getDayByNum(num: number) {
        const array = ['天', '一', '二', '三', '四', '五', '六', '天'];
        return array[num];
    }
    private getLabById(id: number) {
            this.DisarrangedService.getLab()
                .then((result: any) => {
                    const { data } = result;
                    for (let d of data){
                        if (d.id == id) {
                            this.re = d;
                            console.log(this.re);
                        }
                    }
                });
    }

    ngOnInit(): void {
        this._getData();
        this.getLabById(233);
    }
}
