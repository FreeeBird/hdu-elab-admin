import {Injectable} from '@angular/core';
import {SessionStorageService} from '@core/storage/storage.module';
import {Http, Headers, RequestOptions} from '@angular/http';

@Injectable()
export class DisarrangedService {
    constructor(private _storage: SessionStorageService, private http: Http) {
    }
    getSimpleOrderList( curl: any, labId: any) {
        let headers = new Headers({'Content-Type': 'application/json'});
        let options = new RequestOptions({headers: headers});
        let content = JSON.stringify({'labId': labId});
        return new Promise((resolve, reject) => {
            this.http.post(curl, content, options)
                .subscribe(result => {
                    resolve(result);
                });
        });
    }
    getLab() {
        return new Promise((resolve, reject) => {
            this.http.get('https://www.easy-mock.com/mock/5a73c90cb4ec7020fa2f63e8/example/orderdetail')
                .subscribe(result => {
                    resolve(result);
                });
        });
    }
}
