///<reference path="../../../../../node_modules/@angular/forms/src/model.d.ts"/>
import {Component, OnInit} from '@angular/core';
import {DisarrangedService} from './disarranged.service';
import {SessionStorageService} from '@core/storage/storage.service';
import {Router} from '@angular/router';

@Component({
    selector: 'app-disarranged',
    templateUrl: 'disarranged.component.html',
    styleUrls: ['./disarranged.component.less'],
    providers: [DisarrangedService]
})

export class DisarrangedComponent implements OnInit {
    constructor(private _storage: SessionStorageService, private router: Router,
    private DisarrangedService: DisarrangedService) {
    }
    apiUrl = [
        'http://aliyun.charlesxu.cn:8080/LabManager/order/getUnfinishedSimpleOrderListByLabId', /*获取实验室的未安排预约*/
    ];
    labId = '6';
    orderList = [];
    orderDetails = [];
    // 获取预约列表
    private _getData = () => {
        this.DisarrangedService.getSimpleOrderList(this.apiUrl[0], this.labId)
            .then((result: any) => {
                this.orderList = JSON.parse(result['_body'])['SimpleOrder'];
                console.log(this.orderList);
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
    // 修改志愿1
    private update(data: any) {
        console.log(data);
        this.router.navigate(['/alter', data.type]);
    }

    ngOnInit(): void {
        this._getData();
    }
}
