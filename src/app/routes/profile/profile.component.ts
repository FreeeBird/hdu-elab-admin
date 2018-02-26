///<reference path="../../../../node_modules/@angular/forms/src/model.d.ts"/>
///<reference path="../../../../node_modules/@angular/core/src/metadata/directives.d.ts"/>
import {Component, OnInit} from '@angular/core';
import {ProfileService} from './profile.service';
import {Router} from '@angular/router';
import {NzMessageService} from 'ng-zorro-antd';
import {SessionStorageService} from "@core/storage/storage.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";


@Component({
  selector: 'profile',
  templateUrl: 'profile.component.html',
  styleUrls: ['./profile.component.less'],
  providers: [ProfileService]
})
export class ProfileComponent implements OnInit {
    constructor(private _storage : SessionStorageService,private fb: FormBuilder, private ProfileService: ProfileService, private _message: NzMessageService) {
    }
    nickname:string;
    email:string;
    phone:string;
    editMode=false;
    editText='编辑';
    getUserInfo(){
        this.ProfileService.executeHttp("user/getUserByUserName",{"userName":this._storage.get("username")}).then((result: any) => {
            let res = JSON.parse(result['_body'])["User1"];
            this.nickname = res['userNickname'];
            this.email = res['email'];
            this.phone = res['phone'];
        })
    }
    edit(){
        if(!this.editMode){
            this.editText="返回";
            this.validateForm.controls['newEmail'].setValue(this.email);
            this.validateForm.controls['newPhone'].setValue(this.phone);
            this.validateForm.controls['newNickName'].setValue(this.nickname);

        }else{
            this.editText="编辑";
        }
        this.editMode=!this.editMode;
    }
    cancle(){
        this.editText="编辑";
        this.editMode=false;
    }
    validateForm: FormGroup;

    _submitForm() {
        for (const i in this.validateForm.controls) {
            this.validateForm.controls[i].markAsDirty();
        }
        for (const i in this.validateForm.controls) {
            if (!this.validateForm.controls[i].valid) {
                return;
            }
        }
        this.ProfileService.executeHttp('user/updateUser', {
            "userName":this._storage.get("username"),
            "userNickname": this.validateForm.controls['newNickName'].value,
            "email": this.validateForm.controls['newEmail'].value,
            "phone": this.validateForm.controls['newPhone'].value
        }).then((result: any) => {
            let res = JSON.parse(result['_body'])['result'];
            if(res=="success"){
                this._message.success('修改成功！');
                setTimeout(function () {
                    window.location.assign('/');
                },2000)
            }else{
                this._message.error(res);
            }
        })
    }

    ngOnInit() {
        this.getUserInfo();
        this.validateForm = this.fb.group({
            newPhone: [ this.phone, [ Validators.required ] ],
            newEmail: [ this.email, [ Validators.required ] ],
            newNickName: [ this.nickname, [ Validators.required ] ]
        });
    }
}
