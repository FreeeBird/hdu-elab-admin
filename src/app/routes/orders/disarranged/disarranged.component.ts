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
    orderDetails = [];
    // 获取预约列表
    private _getData = () => {
        this.DisarrangedService.getOrderList()
            .then((result: any) => {
                const { data } = result;
                for (const d of data){
                    d.expand = false;
                }
                this.datas = data;
            });
    }
    // 展开列表
    private boolOpen(expand: boolean) {
        if (expand) {
            this.DisarrangedService.getLab()
                .then((result: any) => {
                    const { data } = result;
                    this.orderDetails = data;
                });
        }
        return expand;
    }

    private getDayByNum(num: number) {
        const array = ['天', '一', '二', '三', '四', '五', '六', '天'];
        return array[num];
    }
    // 删除志愿1
    private delete(data: any) {
        console.log(data);
    }
    // 修改志愿1
    private update(data: any) {
        console.log(data);
    }

    ngOnInit(): void {
        this._getData();
    }
}
