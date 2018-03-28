///<reference path="../../../../../node_modules/@angular/forms/src/model.d.ts"/>
import {Component, OnInit} from '@angular/core';
import {DisarrangedService} from './disarranged.service';
import {SessionStorageService} from '@core/storage/storage.service';
import {Router} from '@angular/router';
import {NzMessageBaseService} from 'ng-zorro-antd/src/message/nz-message.service';
import {NzMessageService, NzModalService} from 'ng-zorro-antd';

@Component({
    selector: 'app-disarranged',
    templateUrl: 'disarranged.component.html',
    styleUrls: ['./disarranged.component.less'],
    providers: [DisarrangedService]
})

export class DisarrangedComponent implements OnInit {
    constructor(private _storage: SessionStorageService, private router: Router,
    private DisarrangedService: DisarrangedService, private _mess: NzMessageService, private confirmServ: NzModalService) {
    }
    apiUrl = [
        'order/getUnfinishedSimpleOrderListByLabId', /*0获取实验室的未安排预约*/
        'user/getUserByUserName', // 1获取用户信息
        'order/getOrderById', // 2获取预约
        'lab/getLabById', // 3 获取实验室
        'semester/getNowSemester', // 4
        'user/getUserByUserName', // 5获取管理员信息
        'order/semester/autoArrangeOrderByLabId', // 6自动排课
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
        this.DisarrangedService.executeHTTP(this.apiUrl[0], {labId: this._storage.get('labId')})
            .then((result: any) => {
                const data = JSON.parse(result['_body'])['SimpleOrder'];
                for (let i of data) {
                    i.expand = false;
                    // 获取教师信息
                    this.DisarrangedService.executeHTTP(this.apiUrl[1], {userName: i.userName})
                        .then((res: any) => {
                            let temp = JSON.parse(res['_body'])['User1'];
                            i.userNickname = temp.userNickname;
                            i.email = temp.email;
                            i.phone = temp.phone;
                        });
                }
                this.orderList = data;
            });
    }
    // 展开列表
    private boolOpen(expand: boolean, id: any) {
        if (expand) {
            let data = [];
            // 获取预约详细信息
            this.DisarrangedService.executeHTTP(this.apiUrl[2], {id: id})
                .then((result: any) => {
                    const res = JSON.parse(result['_body'])['Order'];
                    data = res.orderDetails;
                    this.orderDetails[id] = data;
                    for (let d of data) {
                        for (let i = 0; i < d.lab.length; i++) {
                            // 获取实验室信息
                            this.DisarrangedService.executeHTTP(this.apiUrl[3], {labId: d.lab[i]})
                                .then((re: any) => {
                                    const lab = JSON.parse(re['_body'])['lab'];
                                    this.lab[d.lab[i]] = lab;
                                    // 获取管理员联系方式
                                    this.DisarrangedService.executeHTTP(this.apiUrl[5], {userName: this.lab[d.lab[i]].userName})
                                        .then((results: any) => {
                                            const te = JSON.parse(results['_body'])['User1'];
                                            this.lab[d.lab[i]].email = te.email;
                                            this.lab[d.lab[i]].phone = te.phone;
                                        });
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
    // 自动排课
    private autoArrange() {
        let now = this.nowSemester.nowSemester.slice(0, 9) + '-' + this.nowSemester.nowSemester.slice(12, 13);
        let data = {
            labId: parseInt(this._storage.get('labId'), 10),
            semester: now
        };
        this.DisarrangedService.executeHTTP(this.apiUrl[6], data)
            .then((res: any) => {
                let result = JSON.parse(res['_body'])['result'];
                if (result === 1) {
                    this.alertMessage('自动排课成功！');
                } else {
                    this.alertMessage('自动排课失败！');
                }
            });
    }
    private alertMessage(content: any) {
        const modal = this.confirmServ.success({
            title: '通知',
            content: content
        });
        const Route = this.router;
        setTimeout(function () {
            modal.destroy();
            Route.navigate(['/disarranged']);
        }, 1000);
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
