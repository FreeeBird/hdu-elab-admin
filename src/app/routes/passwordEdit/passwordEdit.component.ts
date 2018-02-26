import {Component, OnInit} from '@angular/core';
import {FormGroup, Validators, FormBuilder, FormControl} from '@angular/forms';
import {PasswordEditService} from './passwordEdit.service';
import {Router} from '@angular/router';
import {NzMessageService} from 'ng-zorro-antd';
import {SessionStorageService} from "@core/storage/storage.service";

@Component({
    selector: 'password-edit',
    templateUrl: 'passwordEdit.component.html',
    styleUrls: ['./passwordEdit.component.less'],
    providers: [PasswordEditService]
})

export class passwordEditComponent implements OnInit {
  validateForm: FormGroup;

  constructor(public _storage : SessionStorageService,private fb: FormBuilder, private passwordEditService: PasswordEditService, private router: Router, private _message: NzMessageService) {
  }
    _submitForm() {
        for (const i in this.validateForm.controls) {
            this.validateForm.controls[ i ].markAsDirty();
        }
        for (const i in this.validateForm.controls) {
            if(!this.validateForm.controls[ i ].valid){
              return;
            }
        }
        if(this.validateForm.value.checkPassword==this.validateForm.value.password)
          this.passwordEditService.executeHttp("/user/updatePassword",{userName: this._storage.get('username'),"oldPassword": this.validateForm.value.oldPassword, "newPassword": this.validateForm.value.password}).then((result: any) => {
              let res = JSON.parse(result['_body']).result;
              if(res=="success"){
                  this._message.success('修改成功！');
                  this._storage.clear();
                  setTimeout(function () {
                      window.location.assign('/');
                  },2000)
              }else{
                  this._message.error("旧密码错误！");
              }
          })
    }
    updateConfirmValidator() {
        /** wait for refresh value */
        setTimeout(_ => {
            this.validateForm.controls[ 'checkPassword' ].updateValueAndValidity();
        });
    }
    getFormControl(name) {
        return this.validateForm.controls[name];
    }
    confirmationValidator = (control: FormControl): { [s: string]: boolean } => {
        if (!control.value) {
            return { required: true };
        } else if (control.value !== this.validateForm.controls[ 'password' ].value) {
            return { confirm: true, error: true };
        }
    };

  ngOnInit() {
    this.validateForm = this.fb.group({
        oldPassword: [null, [Validators.required]],
        password: [null, [Validators.required]],
        checkPassword: [null, [Validators.required]],
    });
  }
}
