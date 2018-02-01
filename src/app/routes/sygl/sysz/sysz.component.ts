///<reference path="../../../../../node_modules/@angular/forms/src/model.d.ts"/>
///<reference path="../../../../../node_modules/@angular/core/src/metadata/directives.d.ts"/>
import {Component, OnInit} from '@angular/core';
import {FormGroup, Validators, FormBuilder} from '@angular/forms';
import {SyszService} from './sysz.service';
import {Router} from '@angular/router';
import {NzMessageService} from 'ng-zorro-antd';

@Component({
  selector: 'Sysz',
  templateUrl: 'sysz.component.html',
  styleUrls: ['./sysz.component.less'],
  providers: [SyszService]
})

export class SyszComponent {
    /*实验情况：本周实验数，已安排实验学时，总实验数*/
    experiments = { weeknum : 3 , hour: 96, sum: 48};
    /*实验列表*/
    data = [
        {
            course    : '数据结构课程设计', /*课程名称*/
            coursetime : '周一123节 1-17周', /*课程时间*/
            expnum : 16, /*已安排实验*/
        }, {
            course    : '数据结构课程设计',
            coursetime : '周一123节 1-17周',
            expnum : 16,
        }, {
            course    : '数据结构课程设计',
            coursetime : '周一123节 1-17周',
            expnum : 16,
        }, {
            course    : '课程设计',
            coursetime : '周一123节 1-17周',
            expnum : 16,
        }
    ];
    onSearch(event: string): void {
        console.log(event);
    }
}

