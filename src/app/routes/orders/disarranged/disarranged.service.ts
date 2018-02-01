import {Injectable} from '@angular/core';
import {SessionStorageService} from '@core/storage/storage.module';
import {Http, Headers} from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class DisarrangedService {
  constructor(private _storage: SessionStorageService, public http: Http) {
  }
}
