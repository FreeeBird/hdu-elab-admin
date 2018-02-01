import {Component, OnInit} from '@angular/core';
import {FormGroup, Validators, FormBuilder} from '@angular/forms';
import {CalendarService} from './calendar.service';
import {Router} from '@angular/router';
import {NzMessageService} from 'ng-zorro-antd';

@Component({
  selector: 'app-calendar',
  templateUrl: 'calendar.component.html',
  styleUrls: ['./calendar.component.less'],
  providers: [CalendarService]
})

// interface course {
//   course: string
//   weeks: string,
//   place: string,
//   tbstyle: string,
//   row: number
// }

export class CalendarComponent implements OnInit {
  public week = 5;
  public timetable = [
    [{},{},{},{},{},{},{}],
    [{},{},{},{},{},{},{}],
    [{course: '数据库课程设计', weeks: '1-15单周', place: '1教115', tbstyle: 'tb', row: 3 },{},{},{},{},{},{}],
    [{},{},{},{},{},{}],
    [{},{},{course: '数据库', weeks: '1-8周', place: '3教211', tbstyle: 'tb', row: 3 },{},{},{}],
    [{},{},{},{},{},{}],
    [{},{},{},{},{},{}],
    [{},{},{},{},{},{},{}],
    [{},{},{},{},{},{},{}],
    [{},{},{},{},{},{},{}],
    [{},{},{},{},{},{},{}],
    [{},{},{},{},{},{},{}]
  ];
  constructor(){
  }
  ngOnInit(): void {
  }
  setStyles(s){
    let tb = {
      'backgroud':'#FFDDDD'
    };
    if(s=='tb')
      return tb;
  }
}
