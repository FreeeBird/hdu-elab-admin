import {Injectable} from '@angular/core';
import {SessionStorageService} from '@core/storage/storage.module';
import {Headers, Http, RequestOptions} from '@angular/http';

@Injectable()
export class LoginService {
    constructor(private _storage: SessionStorageService, private http: Http) {
    }
    mess = -1;
    login(username: string, password: string) {
        let headers = new Headers({'Content-Type': 'application/json'});
        let options = new RequestOptions({headers: headers});
        let content = JSON.stringify({userName: username, password: password});
        let curl = 'http://aliyun.charlesxu.cn:8080/LabManager/user/adminLogin';
        return new Promise((resolve, reject) => {
            this.http.post(curl, content, options)
                .subscribe(result => {
                    this.mess = JSON.parse(result['_body']).result;
                });
            setTimeout(() => {
                if (this.mess ===  1) {
                    this._storage.set('username', username);
                    resolve(true);
                } else {
                    reject(false);
                }
            }, 1000);
        });
    }
}


