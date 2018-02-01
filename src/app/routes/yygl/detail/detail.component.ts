///<reference path="../../../../../node_modules/@angular/forms/src/model.d.ts"/>
import {Component, OnInit} from '@angular/core';
import {FormGroup, Validators, FormBuilder} from '@angular/forms';
import {DetailService} from './detail.service';
import {Router} from '@angular/router';
import {NzMessageService} from 'ng-zorro-antd';
@Component({
  selector: 'detail',
  templateUrl: 'detail.component.html',
  styleUrls: ['./detail.component.less'],
  providers: [DetailService]
})
export class DetailComponent implements OnInit {
    course = {
        name : '数据结构课程设计',
        time: '周一12节 1-17周',
        courseno : '(2017-2018-1)-A2301020-41478-1',
        scnum : 50,
        data : [
            {
                no : '1',
                labname : '苹果实验室',
                building : '1',
                door :  '101',
                capacity : 50,
                type : '计算机',
                adminer : '黄**',
                people : 50,
                weeks : '第1周，第2周',
                section : '周一123节',
            },
            {
                no : '2',
                labname : '联想实验室',
                building : '1',
                door :  '101',
                capacity : 50,
                type : '计算机',
                adminer : '黄**',
                people : 50,
                weeks : '第4周，第6周',
                section : '周三123节',
            }
        ],
    };
    ngOnInit(): void {
    }

}
