import {Injectable} from '@angular/core';
import {SessionStorageService} from '@core/storage/storage.module';
import {Http, Headers} from '@angular/http';
import 'rxjs/Rx';
import {BaseService} from '@core/utils/BaseRequest';
import {NHttpClinet} from '@core/utils/http.client';

@Injectable()
export class ArrangedService extends BaseService {
  constructor(private _storage: SessionStorageService, http: NHttpClinet) {
    super('arranged', http);
  }
    getOrderList() {
        return new Promise((resolve, reject) => {
            this.http.get('https://www.easy-mock.com/mock/5a73c90cb4ec7020fa2f63e8/example/wapyy')
                .subscribe(result => {
                    resolve(result);
                });
        });
    }


}
