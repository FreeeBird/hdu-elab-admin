///<reference path="../../../../../node_modules/@angular/forms/src/model.d.ts"/>
import {Component, OnInit} from '@angular/core';
import {FormGroup, Validators, FormBuilder} from '@angular/forms';
import {ArrangedService} from './arranged.service';
import {Router} from '@angular/router';
import {NzMessageService, NzModalService} from 'ng-zorro-antd';
import {SessionStorageService} from '@core/storage/storage.service';

@Component({
    selector: 'app-arranged',
    templateUrl: 'arranged.component.html',
    styleUrls: ['./arranged.component.less'],
    providers: [ArrangedService]
})

export class ArrangedComponent {
    constructor(private _storage: SessionStorageService, private confirmServ: NzModalService,
    private fb: FormBuilder, private orderService: ArrangedService, private router: Router, private _message: NzMessageService) {
    }
    data = [
        {
            expand: false,
            name   : '程序设计基础',
            num    : 30,
            teacher: '胡彦斌',
            time: '周一1，2，3节',
            week: '1,2,3,4',
            detail: [{
                id: 1,
                labname: '苹果实验室',
                labbuild: '1教',
                labNumber: 123,
                labPeoCount: 50,
                labType: '计算机',
                adminName: '黄**',
                people: 50
            }, {
                id: 2,
                labname: '安卓实验室',
                labbuild: '1教',
                labNumber: 101,
                labPeoCount: 50,
                labType: '计算机',
                adminName: '黄**',
                people: 50
            }]
        }, {
            expand: false,
            name   : 'Android开发',
            num    : 50,
            teacher: '胡彦斌',
            time: '周一1，2，3节',
            week: '1,2,3,4',
            detail: [{
                id: 1,
                labname: '苹果实验室',
                labbuild: '1教',
                labNumber: 101,
                labPeoCount: 50,
                labType: '计算机',
                adminName: '黄**',
                people: 50
            }, {
                id: 2,
                labname: '安卓实验室',
                labbuild: '1教',
                labNumber: 101,
                labPeoCount: 50,
                labType: '计算机',
                adminName: '黄**',
                people: 50
            }]
        }, {
            expand: false,
            name   : 'IOS开发',
            num    : 70,
            teacher: '胡彦斌',
            time: '周一1，2，3节',
            week: '1,2,3,4',
            detail: [{
                id: 1,
                labname: '苹果实验室',
                labbuild: '1教',
                labNumber: 101,
                labPeoCount: 50,
                labType: '计算机',
                adminName: '黄**',
                people: 50
            }, {
                id: 2,
                labname: '安卓实验室',
                labbuild: '1教',
                labNumber: 101,
                labPeoCount: 50,
                labType: '计算机',
                adminName: '黄**',
                people: 50
            }]
        }, {
            expand: false,
            name   : '数据库课程设计',
            num    : 90,
            teacher: '胡彦斌',
            time: '周一1，2，3节',
            week: '1,2,3,4',
            detail: [{
                id: 1,
                labname: '苹果实验室',
                labbuild: '1教',
                labNumber: 101,
                labPeoCount: 50,
                labType: '计算机',
                adminName: '黄**',
                people: 50
            }, {
                id: 2,
                labname: '安卓实验室',
                labbuild: '1教',
                labNumber: 101,
                labPeoCount: 50,
                labType: '计算机',
                adminName: '黄**',
                people: 50
            }]
        }, {
            expand: false,
            name   : '项目管理',
            num    : 110,
            teacher: '胡彦斌',
            time: '周一1，2，3节',
            week: '1,2,3,4',
            detail: [{
                id: 1,
                labname: '苹果实验室',
                labbuild: '1教',
                labNumber: 101,
                labPeoCount: 50,
                labType: '计算机',
                adminName: '黄**',
                people: 50
            }, {
                id: 2,
                labname: '安卓实验室',
                labbuild: '1教',
                labNumber: 101,
                labPeoCount: 50,
                labType: '计算机',
                adminName: '黄**',
                people: 50
            }]
        }
    ];

}
