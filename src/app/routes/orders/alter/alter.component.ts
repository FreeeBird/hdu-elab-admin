///<reference path="../../../../../node_modules/@angular/forms/src/model.d.ts"/>
import {Component, OnInit} from '@angular/core';
import {FormGroup, Validators, FormBuilder} from '@angular/forms';
import {AlterService} from './alter.service';
import {Router} from '@angular/router';
import {NzMessageService, NzModalService} from 'ng-zorro-antd';
import {SessionStorageService} from '@core/storage/storage.service';
import {EditcourseService} from '../../courses/editcourse/editcourse.service';

@Component({
    selector: 'app-Alter',
    templateUrl: 'alter.component.html',
    styleUrls: ['./alter.component.less'],
    providers: [AlterService]
})

export class AlterComponent {
    constructor(private _storage: SessionStorageService, private confirmServ: NzModalService,
    private fb: FormBuilder, private orderService: AlterService, private router: Router, private _message: NzMessageService) {
    }
    validateForm: FormGroup;
    loadStatus: boolean;
    submitBtn = '提交';
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
        { value: 16, label: '16' }
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
    ngOnInit() {
        this.validateForm = this.fb.group({
            week: [null, [Validators.required]],
            weekday: [null, [Validators.required]],
            classNum: [null, [Validators.required]],
            scnum: [null, [Validators.required]],
        });
    }
}
