import {Component, OnInit} from '@angular/core';
import {FormGroup, Validators, FormBuilder} from '@angular/forms';
import {LoginService} from './login.service';
import {Router} from '@angular/router';
import {NzMessageService} from 'ng-zorro-antd';
import {SessionStorageService} from '@core/storage/storage.module';
import {AjaxService} from '@core/services/ajax.service';

@Component({
  selector: 'app-login',
  templateUrl: 'login.component.html',
  styleUrls: ['./login.component.less'],
  providers: [LoginService]
})

export class LoginComponent implements OnInit {
    constructor(private fb: FormBuilder, private loginService: LoginService, private router: Router, private _message: NzMessageService,
                private _storage: SessionStorageService, private http: AjaxService) {
    }
  validateForm: FormGroup;
  loadStatus: boolean;
  loginBtn = '登录';
  apis = [
      'user/adminLogin', // 0登录
      'lab/getLabByAdminUserName', // 1 获取实验室ID
  ];

  _submitForm() {
    for (const i in this.validateForm.controls) {
      this.validateForm.controls[i].markAsDirty();
    }
    if (this.validateForm.valid) {
      this.loadStatus = true;
      this.loginBtn = '正在登录……';
      const userName = this.validateForm.value.userName;
      const password = this.validateForm.value.password;
      this.loginService.executeHTTP(this.apis[0], {userName: userName, password: password})
          .then(result => {
              let mess = JSON.parse(result['_body']).result;
              setTimeout(() => {
                  if (mess ===  1) {
                      this._storage.set('username', userName);
                      this.http.executeHttp('/user/getUserByUserName', {userName: this._storage.get('username')})
                          .then((res: any) => {
                              let user = JSON.parse(res['_body'])['User1'];
                              this._storage.set('nickname', user.userNickname);
                          });
                      this.loginService.executeHTTP(this.apis[1], {adminUserName: this._storage.get('username')})
                      .then(res => {
                          const data = JSON.parse(res['_body'])['lab1List'];
                          this._storage.set('labId', data[0].id);
                      });
                      this.router.navigate(['']);
                  } else {
                      this.loadStatus = false;
                      this.loginBtn = '登录';
                      this._message.error('登录失败！');
                  }
              }, 500);
          });
    }
  }
  getFormControl(name) {
    return this.validateForm.controls[name];
  }
  ngOnInit() {
    this.validateForm = this.fb.group({
      userName: [null, [Validators.required]],
      password: [null, [Validators.required]],
    });
  }
}
