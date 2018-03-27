import {Injectable} from '@angular/core';
import {SessionStorageService} from '@core/storage/storage.module';
import {Http, Headers, RequestOptions} from '@angular/http';


@Injectable()
export class ArrangedService  {
    constructor(private _storage: SessionStorageService, private http: Http) {
    }
    executeGET(curl: any) {
        let headers = new Headers({'Content-Type': 'application/json', 'charset': 'utf-8'});
        let options = new RequestOptions({headers: headers});
        return new Promise((resolve, reject) => {
            this.http.get(curl)
                .subscribe(result => {
                    resolve(result);
                });
        });
    }
    executeHTTP( curl: any, data: any) {
        let headers = new Headers({'Content-Type': 'application/json'});
        let options = new RequestOptions({headers: headers});
        let content = JSON.stringify(data);
        return new Promise((resolve, reject) => {
            this.http.post(curl, content, options)
                .subscribe(result => {
                    resolve(result);
                });
        });
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
    getOrderById( curl: any, id: any) {
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
    getLab( curl: any, id: any) {
        let headers = new Headers({'Content-Type': 'application/json'});
        let options = new RequestOptions({headers: headers});
        let content = JSON.stringify({labId: id});
        return new Promise((resolve, reject) => {
            this.http.post(curl, content, options)
                .subscribe(result => {
                    resolve(result);
                });
        });
    }
}
