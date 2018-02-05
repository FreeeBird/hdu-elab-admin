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
    pageSize = 5;
    labId = '6';
       id = 3;
    datas = [];
    orders = [];
    orderDetails = [];
    apiUrl = [
        'http://aliyun.charlesxu.cn:8080/LabManager/order/getFinishedSimpleOrderListByLabId',
        'http://aliyun.charlesxu.cn:8080/LabManager/order/getOrderByLabId',
        'http://aliyun.charlesxu.cn:8080/LabManager/order/getOrderById',
        'http://aliyun.charlesxu.cn:8080/LabManager/user/getUserByUserName',
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
                this.datas = data;
            });
        /*this.ArrangedService.getOrderById(this.apiUrl[2], this.id)
            .then((result: any) => {
                const data = JSON.parse(result['_body'])['Order'];
                console.log(data);
            });*/
    }
    // 展开列表
    private boolOpen(expand: boolean) {
        if (expand) {
            this.ArrangedService.getSimpleOrders(this.apiUrl[1], this.labId)
                .then((result: any) => {
                    const data = JSON.parse(result['_body'])['Order'];
                    this.orders = data;
                });
        }
        return expand;
    }
    private getNickNameByUserName(userName: any) {
        this.ArrangedService.getUserByUserName(this.apiUrl[3], userName)
            .then((result: any) => {
                const data = JSON.parse(result['_body'])['User1']['userNickname'];
                return data;
            });
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
        this.getNickNameByUserName('40392');
    }
}
