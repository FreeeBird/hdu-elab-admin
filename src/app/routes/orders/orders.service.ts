import {Injectable} from '@angular/core';
import {SessionStorageService} from '@core/storage/storage.module';
import {Http, Headers} from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class OrdersService {
  constructor(private _storage: SessionStorageService, public http: Http) {
  }
}
