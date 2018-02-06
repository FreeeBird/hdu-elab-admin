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
    public lab = [];
    constructor(private CalendarService: CalendarService, private _storage: SessionStorageService) {
    }
    private getData() {
        this.CalendarService.getLabId('lab/getLabByAdminUserName', this._storage.get('username'))
            .then((result: any) => {
                this.lab = JSON.parse(result['_body']).lab1List;
                console.log(this.lab[4].id);
                this.CalendarService.getCalendar('class/getCourseTableByLabId', this.lab[4].id)
                    .then((res: any) => {
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
