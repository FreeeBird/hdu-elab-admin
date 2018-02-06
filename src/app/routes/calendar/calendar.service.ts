import {Injectable} from '@angular/core';
import {SessionStorageService} from '@core/storage/storage.module';
import {Http, Headers, RequestOptions} from '@angular/http';
import 'rxjs/Rx';
const host = 'http://aliyun.charlesxu.cn:8080/LabManager/';

@Injectable()
export class CalendarService {
    constructor(private _storage: SessionStorageService, private http: Http) {
    }
    getCalendar( curl: any, labId: any) {
        let headers = new Headers({'Content-Type': 'application/json','charset': 'utf-8'});
        let options = new RequestOptions({headers: headers});
        let content = JSON.stringify({labId: labId});
        return new Promise((resolve, reject) => {
            this.http.post(host + curl, content, options)
                .subscribe(result => {
                    resolve(result);
                });
        });
    }
    getLabId( curl: any, username: any) {
        let headers = new Headers({'Content-Type': 'application/json','charset': 'utf-8'});
        let options = new RequestOptions({headers: headers});
        let content = JSON.stringify({adminUserName: username});
        return new Promise((resolve, reject) => {
            this.http.post(host + curl, content, options)
                .subscribe(result => {
                    resolve(result);
                });
        });
    }
}
