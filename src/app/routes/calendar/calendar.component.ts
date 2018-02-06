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
    public week = 5;
    public timetable = [];
    constructor(private CalendarService: CalendarService, private _storage: SessionStorageService) {
    }
    private getData() {
        this.CalendarService.getLabId('lab/getLabByAdminUserName', this._storage.get('username'))
            .then((result: any) => {
                const data = JSON.parse(result['_body']).lab1List;
                this._storage.set('labId', data[0].id);
                this.CalendarService.getCalendar('class/getCourseTableByLabId', this._storage.get('labId'))
                    .then((res: any) => {
                        console.log(JSON.parse(res['_body']));
                        this.timetable = JSON.parse(res['_body'])['courseTable']['courseTable'];
                    });
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
