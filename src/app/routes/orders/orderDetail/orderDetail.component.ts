///<reference path="../../../../../node_modules/@angular/forms/src/model.d.ts"/>
import {Component, OnInit} from '@angular/core';
import {OrderDetailService} from './orderDetail.service';
import {SessionStorageService} from '@core/storage/storage.module';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {NzModalService} from 'ng-zorro-antd';
import {Router} from '@angular/router';

@Component({
    selector: 'detail',
    templateUrl: 'orderDetail.component.html',
    styleUrls: ['./orderDetail.component.less'],
    providers: [OrderDetailService]
})
export class OrderDetailComponent implements OnInit {
    validateForm: FormGroup;
    loadStatus: boolean;
    submitBtn = '提交';
    constructor(private DetailService: OrderDetailService, private fb: FormBuilder, private router: Router,
                private _storage: SessionStorageService, private confirmServ: NzModalService) {
    }
    apiUrl = [
        'http://aliyun.charlesxu.cn:8080/LabManager/order/getOrderById',
    ];
    order;
    week = [{ value: 1, label: '1' },
        { value: 2, label: '2' },
        { value: 3, label: '3' },
        { value: 4, label: '4' },
        { value: 5, label: '5' },
        { value: 6, label: '6' },
        { value: 7, label: '7' },
        { value: 8, label: '8' },
        { value: 9, label: '9' },
        { value: 10, label: '10' },
        { value: 11, label: '11' },
        { value: 12, label: '12' },
        { value: 13, label: '13' },
        { value: 14, label: '14' },
        { value: 15, label: '15' },
        { value: 16, label: '16' },
        { value: 17, label: '17' },
        { value: 18, label: '18' },
        { value: 19, label: '19' },
        { value: 20, label: '20' },
        { value: 21, label: '21' },
        { value: 22, label: '22' },
        { value: 23, label: '23' },
        { value: 24, label: '24' },
        { value: 25, label: '25' },
    ];
    weekday = [{ value: 1, label: '星期一' },
        { value: 2, label: '星期二' },
        { value: 3, label: '星期三' },
        { value: 4, label: '星期四' },
        { value: 5, label: '星期五' },
        { value: 6, label: '星期六' },
        { value: 7, label: '星期日' }
    ];
    classNum = [{ value: 1, label: '第1节' },
        { value: 2, label: '第2节' },
        { value: 3, label: '第3节' },
        { value: 4, label: '第4节' },
        { value: 5, label: '第5节' },
        { value: 6, label: '第6节' },
        { value: 7, label: '第7节' },
        { value: 8, label: '第8节' },
        { value: 9, label: '第9节' },
        { value: 10, label: '第10节' },
        { value: 11, label: '第11节' },
        { value: 12, label: '第12节' },
    ];
    private _getData = () => {
        // 获取预约
        const order = JSON.parse(this._storage.get('order'));
        this.DetailService.excuteHttp(this.apiUrl[0], {id: order.id})
            .then((result: any) => {
                this.order = JSON.parse(result['_body'])['Order'];
                console.log(this.order);
            });
    }
    _back() {
        window.history.back();
    }
    /*//控制全选单双重置*/
    setWeek = (target, operation) => {
        this.validateForm.controls[target].reset();
        if (operation == 0) {
            let c = this.validateForm.value;
            c.week = this.week;
            this.validateForm.setValue(c);
        }
        if(operation==1){
            let c = this.validateForm.value;
            c.week = [];
            for(let i=0;i< this.week.length;i++){
                if(i%2==0){
                    c.week.push(this.week[i]);
                }
            }
            this.validateForm.setValue(c);
        }
        if(operation==2){
            let c = this.validateForm.value;
            c.week = [];
            for(let i=0;i< this.week.length;i++){
                if(i%2){
                    c.week.push(this.week[i]);
                }
            }
            this.validateForm.setValue(c);
        }
    };
    //控制全选单双重置

    getFormControl(name) {
        return this.validateForm.controls[name];
    }

    info(title, contentTpl) {
        this.confirmServ.info({
            title: title,
            content: contentTpl
        });
    }
    success = () => {
        const modal = this.confirmServ.success({
            title: '修改成功',
            content: '1秒后回到课程管理'
        });
        this._storage.remove('course');
        const Route = this.router;
        setTimeout(function () {
            modal.destroy();
            Route.navigate(['/courses']);
        }, 1000);
    }
    ngOnInit(): void {
        this._getData();
        if (this.order !== null) {
            this._storage.remove('order');
            }
        this.validateForm = this.fb.group({
            orderId: [null, [Validators.required]],
        });
    }
}
