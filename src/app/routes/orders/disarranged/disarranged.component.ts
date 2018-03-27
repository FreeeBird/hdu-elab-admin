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
        'http://aliyun.charlesxu.cn:8080/LabManager/user/getUserByUserName',
        'http://aliyun.charlesxu.cn:8080/LabManager/order/getOrderById',
        'http://aliyun.charlesxu.cn:8080/LabManager/lab/getLabById',
        'http://aliyun.charlesxu.cn:8080/LabManager/semester/getNowSemester', // 4
    ];
    orderList = [];
    orderDetails = [];
    lab = [];
    // 获取学期
    nowSemester = {
        nowSemester: '',
        maxWeek: 17
    };
    private getSemester() {
        this.DisarrangedService.executeGET(this.apiUrl[4])
            .then((result: any) => {
                const res = JSON.parse(result['_body']);
                if (res['result'] === 'success') {
                    this.nowSemester = res['NowSemester'];
                }
            });
    }
    // 获取预约列表
    private _getData = () => {
        this.getSemester();
        this.DisarrangedService.getSimpleOrderList(this.apiUrl[0], this._storage.get('labId'))
            .then((result: any) => {
                const data = JSON.parse(result['_body'])['SimpleOrder'];
                for (let i of data) {
                    i.expand = false;
                    this.DisarrangedService.getUserByUserName(this.apiUrl[1], i.userName)
                        .then((res: any) => {
                            i.userNickname = JSON.parse(res['_body'])['User1']['userNickname'];
                        });
                }
                this.orderList = data;
            });
    }
    // 展开列表
    private boolOpen(expand: boolean, id: any) {
        if (expand) {
            let data = [];
            this.DisarrangedService.getOrderById(this.apiUrl[2], id)
                .then((result: any) => {
                    const res = JSON.parse(result['_body'])['Order'];
                    data = res.orderDetails;
                    this.orderDetails[id] = data;
                    for (let d of data) {
                        for (let i = 0; i < d.lab.length; i++) {
                            this.DisarrangedService.getLab(this.apiUrl[3], d.lab[i])
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
