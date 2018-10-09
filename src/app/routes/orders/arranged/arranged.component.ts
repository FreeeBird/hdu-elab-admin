///<reference path="../../../../../node_modules/@angular/forms/src/model.d.ts"/>
import {Component, OnInit} from '@angular/core';
import {ArrangedService} from './arranged.service';
import {NzMessageService, NzModalService} from 'ng-zorro-antd';
import {SessionStorageService} from '@core/storage/storage.service';
import {Router} from '@angular/router';
import {FormBuilder, FormGroup} from '@angular/forms';


@Component({
    selector: 'app-arranged',
    templateUrl: 'arranged.component.html',
    styleUrls: ['./arranged.component.less'],
    providers: [ArrangedService]
})

export class ArrangedComponent implements OnInit {

       constructor(private _storage: SessionStorageService, private router: Router,  private fb: FormBuilder,
                private ArrangedService: ArrangedService, private _message: NzMessageService,
                   private confirmServ: NzModalService) {
    }
    validateForm: FormGroup;
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
    options = [
        { value: '2016', label: '2016' },
        { value: '2017', label: '2017' },
        { value: '2018', label: '2018' },
        { value: '2019', label: '2019' },
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
    // 获取历史预约
    currentModal;
    showModalForTemplate(titleTpl, contentTpl, footerTpl) {
        const form = this.validateForm;
        let _storage = this._storage;
        const Route = this.router;
        this.currentModal = this.confirmServ.open({
            title       : titleTpl,
            content     : contentTpl,
            footer      : footerTpl,
            onOk() {
                const str = form.controls['fy'].value.value + '-' +
                    form.controls['sy'].value.value + '-' + form.controls['type'].value;
                _storage.set('history', str);
                Route.navigate(['/arranged/history']);
            },
            onCancel() {
            },
        });
    }
    handleCancel(e) {
        this.currentModal.destroy('onCancel');
        this.currentModal = null;
    }
    isConfirmLoading = false;
    handleOk(e) {
        this.isConfirmLoading = true;
        setTimeout(() => {
            this.currentModal.destroy('onOk');
            this.isConfirmLoading = false;
            this.currentModal = null;
        }, 1000);
    }
    // 修改志愿1
    private update(data: any) {
        this._storage.remove('orderDetail');
        const nav = this.router;
        this.ArrangedService.executeHTTP(this.apiUrl[2], {id: data.id })
            .then((result: any) => {
                const _orderDetail = JSON.parse(result['_body'])['Order'];
                this._storage.set('orderDetail', JSON.stringify(_orderDetail));
                nav.navigate(['/arranged/edit']);
            });
    }

    ngOnInit(): void {
        this.validateForm = this.fb.group({
            fy: [null, this.validateForm],
            sy: [null, this.validateForm],
            type: [null, this.validateForm]
        });
        this._getData();
    }
}
