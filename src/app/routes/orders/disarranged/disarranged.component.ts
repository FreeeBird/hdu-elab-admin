///<reference path="../../../../../node_modules/@angular/forms/src/model.d.ts"/>
import {Component, OnInit} from '@angular/core';
import {DisarrangedService} from './disarranged.service';
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
    datas = [];
    orderDetails= [
        {
            'type': 1,
            'weekDays': [5],
            'classNum': [3, 4, 5],
            'orderWeek': [1, 2, 3, 4, 5, 6, 7, 8, 9]
        },
        {
            'type': 2,
            'weekDays': [5],
            'classNum': [3, 4, 5],
            'orderWeek': [1, 2, 3, 4, 5, 6, 7, 8, 9]
        },
        {
            'type': 3,
            'weekDays': [5],
            'classNum': [3, 4, 5],
            'orderWeek': [1, 2, 3, 4, 5, 6, 7, 8, 9]
        },
    ];
    private _getData = () => {
        this.DisarrangedService.getOrderList()
            .then((result: any) => {
                const { data } = result;
                /*this.datas = data;*/
                for (const d of data){
                    d.expand = false;
                }
                this.datas = data;
            });
    }

    private getDayByNum(num: number) {
        const array = ['天', '一', '二', '三', '四', '五', '六', '天'];
        return array[num];
    }

    ngOnInit(): void {
        this._getData();
    }
}
