///<reference path="../../../../node_modules/@angular/forms/src/model.d.ts"/>
import {Component, OnInit} from '@angular/core';
import {FormGroup, Validators, FormBuilder} from '@angular/forms';
import {CoursesService} from './courses.service';
import {Router} from '@angular/router';
import {NzMessageService} from 'ng-zorro-antd';
@Component({
  selector: 'app-login',
  templateUrl: 'courses.component.html',
  styleUrls: ['./courses.component.less'],
  providers: [CoursesService]
})
export class CoursesComponent implements OnInit {
    choice = 'all';
    data = [
        {
            course : '数据结构课程设计',
            coursetime : '周一123节 1-17周',
            hour : 16,
            addtime : '2016-06-06 14:03',
            progress : 70
        },
        {
            course : '数据结构课程设计',
            coursetime : '周一678节 1-17周',
            hour : 16,
            addtime : '2016-06-06 14:03',
            progress : 20
        },
    ];
    ngOnInit(): void {
    }

}
