import {SessionStorageService} from '@core/storage/storage.module';
import {Injectable} from '@angular/core';
import {Http, Headers, RequestOptions} from '@angular/http';
const host = "http://aliyun.charlesxu.cn:8080/LabManager/";

@Injectable()
export class PasswordEditService {
  constructor(private _storage: SessionStorageService,public http: Http) {
  }
  executeHttp( curl: any, data: any) {
      let headers = new Headers({'Content-Type': 'application/json','charset':'utf-8'});
      let options = new RequestOptions({headers: headers});
      let content = JSON.stringify(data);
      return new Promise((resolve, reject) => {
          this.http.post(host+curl, content, options)
                .subscribe(result => {
                    resolve(result)
                })
      });
  }
}
