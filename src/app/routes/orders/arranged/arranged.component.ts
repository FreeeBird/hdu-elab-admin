///<reference path="../../../../../node_modules/@angular/forms/src/model.d.ts"/>
import {Component, OnInit} from '@angular/core';
import {ArrangedService} from './arranged.service';
import {NzMessageService} from 'ng-zorro-antd';
import {SessionStorageService} from '@core/storage/storage.service';
import {Router} from '@angular/router';


@Component({
    selector: 'app-arranged',
    templateUrl: 'arranged.component.html',
    styleUrls: ['./arranged.component.less'],
    providers: [ArrangedService]
})

export class ArrangedComponent implements OnInit {

       constructor(private _storage: SessionStorageService, private router: Router,
                private ArrangedService: ArrangedService, private _message: NzMessageService) {
    }
    labId = '6';
    simpleOrderList = [];
    orderDetails = [];
    lab = [];
    apiUrl = [
        'http://aliyun.charlesxu.cn:8080/LabManager/order/getFinishedSimpleOrderListByLabId',
        'http://aliyun.charlesxu.cn:8080/LabManager/order/getOrderByLabId',
        'http://aliyun.charlesxu.cn:8080/LabManager/order/getOrderById',
        'http://aliyun.charlesxu.cn:8080/LabManager/user/getUserByUserName',
        'http://aliyun.charlesxu.cn:8080/LabManager/lab/getLabById',
    ];
    // 获取预约列表
    private _getData = () => {
        this.ArrangedService.getSimpleOrders(this.apiUrl[0], this.labId)
            .then((result: any) => {
                const data = JSON.parse(result['_body'])['SimpleOrder'];
                for (let i of data) {
                    i.expand = false;
                    this.ArrangedService.getUserByUserName(this.apiUrl[3], i.userName)
                        .then((res: any) => {
                            i.userNickname = JSON.parse(res['_body'])['User1']['userNickname'];
                        });
                }
                this.simpleOrderList = data;
            });
    }
    // 展开列表
    private boolOpen(expand: boolean, id: any) {
        if (expand) {
            let data = [];
            this.ArrangedService.getOrderById(this.apiUrl[2], id)
                .then((result: any) => {
                    const res = JSON.parse(result['_body'])['Order'];
                    data = res.orderDetails;
                    this.orderDetails[id] = data;
                    for (let d of data) {
                        for (let i = 0; i < d.lab.length; i++) {
                            this.ArrangedService.getLab(this.apiUrl[4], d.lab[i])
                                .then((re: any) => {
                                    const lab = JSON.parse(re['_body'])['lab'];
                                    this.lab[d.lab[i]] = lab;
                                });
                        }
                    }
                });
        }
        return expand;
    }
    private getDayByNum(num: number) {
        const array = ['日', '一', '二', '三', '四', '五', '六', '日'];
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
