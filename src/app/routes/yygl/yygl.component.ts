///<reference path="../../../../node_modules/@angular/forms/src/model.d.ts"/>
///<reference path="../../../../node_modules/@angular/core/src/metadata/directives.d.ts"/>
import {Component, OnInit} from '@angular/core';
import {FormGroup, Validators, FormBuilder} from '@angular/forms';
import {YyglService} from './yygl.service';
import {Router} from '@angular/router';
import {NzMessageService} from 'ng-zorro-antd';

@Component({
  selector: 'Yygl',
  templateUrl: 'yygl.component.html',
  styleUrls: ['./yygl.component.less'],
  providers: [YyglService]
})

export class YyglComponent {
    _value = ''; /*搜索内容*/
    choice = 'all'; /*筛选条件:全部：all 进行中：ing 未开始：no*/
    /*预约情况：预约课程数，已预约学时，待通过预约数*/
    orders = { orderednum : 3 , orderedhour: 64, ordering: 3};
    /*预约列表*/
    data = [
        {
            course    : '数据结构课程设计', /*课程名称*/
            coursetime : '周一123节 1-17周', /*课程时间*/
            orderedhour : 16, /*已预约学时*/
            ordertime:  '2016-06-16 14:03', /*预约提交时间*/
            progress : '60',
        }, {
            course    : '数据结构课程设计',
            coursetime : '周一123节 1-17周',
            orderedhour : 16,
            ordertime:  '2016-06-16 14:03',
            progress : '60',
        }, {
            course    : '数据结构课程设计',
            coursetime : '周一123节 1-17周',
            orderedhour : 16,
            ordertime:  '2016-06-16 14:03',
            progress : '60',
        }
    ];
    onSearch(event: string): void {
        console.log(event);
    }
}

