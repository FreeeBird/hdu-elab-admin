import {Component, OnInit} from '@angular/core';
import {CalendarService} from './calendar.service';
import {SessionStorageService} from '@core/storage/storage.service';

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
    public timetable = [];
    constructor(private CalendarService: CalendarService, private _storage: SessionStorageService) {
    }
    apiUrl = [
        'semester/getNowSemester', // 0获取学期
        'class/getCourseTableByLabId', // 1获取课表
    ];
    // 获取学期
    nowSemester = {
        nowSemester: '',
        maxWeek: 17
    };
    private getSemester() {
        this.CalendarService.executeGET(this.apiUrl[0])
            .then((result: any) => {
                const res = JSON.parse(result['_body']);
                if (res['result'] === 'success') {
                    this.nowSemester = res['NowSemester'];
                }
            });
    }
    private getData() {
        this.getSemester();
        this.CalendarService.executeHTTP(this.apiUrl[1], { labId: this._storage.get('labId')})
            .then((res: any) => {
                this.timetable = JSON.parse(res['_body'])['courseTable']['courseTable'];
            });
    }
    ngOnInit(): void {
        this.getData();
    }
    setStyles(s) {
        let tb = {
            'backgroud': '#FFDDDD'
        };
        if (s === 'tb') {
            return tb;
        }
    }
}
