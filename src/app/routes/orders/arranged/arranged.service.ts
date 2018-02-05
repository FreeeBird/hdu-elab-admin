import {Injectable} from '@angular/core';
import {SessionStorageService} from '@core/storage/storage.module';
import {Http, Headers, RequestOptions} from '@angular/http';
import 'rxjs/Rx';
import {BaseService} from '@core/utils/BaseRequest';
import {NHttpClinet} from '@core/utils/http.client';

@Injectable()
export class ArrangedService  {
    constructor(private _storage: SessionStorageService,private http: Http) {
    }
    getSimpleOrders( curl: any, labId: any) {
        let headers = new Headers({'Content-Type': 'application/json'});
        let options = new RequestOptions({headers: headers});
        let content = JSON.stringify({labId: labId});
        return new Promise((resolve, reject) => {
            this.http.post(curl, content, options)
                .subscribe(result => {
                    resolve(result);
                });
        });
    }
    getOrderById( curl: any, id: number) {
        let headers = new Headers({'Content-Type': 'application/json'});
        let options = new RequestOptions({headers: headers});
        let content = JSON.stringify({id: id});
        return new Promise((resolve, reject) => {
            this.http.post(curl, content, options)
                .subscribe(result => {
                    resolve(result);
                });
        });
    }
    getUserByUserName( curl: any, userName: any) {
        let headers = new Headers({'Content-Type': 'application/json'});
        let options = new RequestOptions({headers: headers});
        let content = JSON.stringify({userName: userName});
        return new Promise((resolve, reject) => {
            this.http.post(curl, content, options)
                .subscribe(result => {
                    resolve(result);
                });
        });
    }
}
