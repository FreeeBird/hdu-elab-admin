import {Injectable} from '@angular/core';
import {SessionStorageService} from '@core/storage/storage.module';
import {Http,Headers} from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class OrderService {
  constructor(private _storage: SessionStorageService,public http: Http) {
  }
  executeHttp( curl: any, data: any ) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    let content = JSON.stringify({username:this._storage.get('username'),data:data});
    return this.http.post(curl, content,{headers: headers}).map(res => res.json()).subscribe(
      data => {
        console.log(data);
      },
      err => {
        console.log(err); }
    );
  }
}
