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
    simpleOrderList = [];
    orderDetails = [];
    lab = [];
    apiUrl = [
        'order/getFinishedSimpleOrderListByLabId', // 0获取完成预约
        'order/getOrderByLabId', // 1获取实验室预约
        'order/getOrderById', // 2获取预约
        'user/getUserByUserName', // 3获取教师信息
        'lab/getLabById', // 4获取实验室
        'semester/getNowSemester', // 5获取学期
        'user/getUserByUserName', // 6获取管理员信息
    ];
    // 获取学期
    nowSemester = {
        nowSemester: '',
        maxWeek: 17
    };
    private getSemester() {
        this.ArrangedService.executeGET(this.apiUrl[5])
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
        // 获取实验室已安排预约列表
        this.ArrangedService.executeHTTP(this.apiUrl[0], {labId: this._storage.get('labId')})
            .then((result: any) => {
                const data = JSON.parse(result['_body'])['SimpleOrder'];
                for (let i of data) {
                    i.expand = false;
                    // 获取教师信息
                    this.ArrangedService.executeHTTP(this.apiUrl[3], {userName: i.userName})
                        .then((res: any) => {
                            let temp = JSON.parse(res['_body'])['User1'];
                            i.userNickname = temp.userNickname;
                            i.email = temp.email;
                            i.phone = temp.phone;
                        });
                }
                this.simpleOrderList = data;
            });
    }
    // 展开列表
    private boolOpen(expand: boolean, id: any) {
        if (expand) {
            let data = [];
            // 获取实验室预约信息
            this.ArrangedService.executeHTTP(this.apiUrl[2], {id: id})
                .then((result: any) => {
                    const res = JSON.parse(result['_body'])['Order'];
                    data = res.orderDetails;
                    this.orderDetails[id] = data;
                    for (const d of data) {
                        for (let i = 0; i < d.lab.length; i++) {
                            if (this.lab[d.lab[i]] == null) {
                                // 获取实验室信息
                                this.ArrangedService.executeHTTP(this.apiUrl[4], {labId: d.lab[i]})
                                    .then((re: any) => {
                                        const lab = JSON.parse(re['_body'])['lab'];
                                        this.lab[d.lab[i]] = lab;
                                        // 获取管理员联系方式
                                        this.ArrangedService.executeHTTP(this.apiUrl[6], {userName: this.lab[d.lab[i]].userName})
                                            .then((results: any) => {
                                                const te = JSON.parse(results['_body'])['User1'];
                                                this.lab[d.lab[i]].email = te.email;
                                                this.lab[d.lab[i]].phone = te.phone;
                                            });
                                    });
                            }
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
        const str = JSON.stringify(data);
        this._storage.set('order', str);
        this.router.navigate(['/arranged/edit']);
    }

    ngOnInit(): void {
        this._getData();
    }
}
