import {Injectable} from '@angular/core';
import {SessionStorageService} from '@core/storage/storage.module';
import {Http, Headers} from '@angular/http';
import 'rxjs/Rx';
import {NHttpClinet} from '@core/utils/http.client';
import {BaseService} from '@core/utils/BaseRequest';

@Injectable()
export class DisarrangedService extends BaseService {
    constructor(private _storage: SessionStorageService, http: NHttpClinet) {
        super('disarranged', http);
    }
    getOrderList() {
        return new Promise((resolve, reject) => {
            this.http.get('https://www.easy-mock.com/mock/5a73c90cb4ec7020fa2f63e8/example/wapyy')
                .subscribe(result => {
                    resolve(result);
                });
        });
    }
    getLab() {
        return new Promise((resolve, reject) => {
            this.http.get('https://www.easy-mock.com/mock/5a73c90cb4ec7020fa2f63e8/example/lab')
                .subscribe(result => {
                    resolve(result);
                });
        });
    }
}
