///<reference path="../../../../../node_modules/@angular/forms/src/model.d.ts"/>
///<reference path="../../../../../node_modules/@angular/core/src/metadata/directives.d.ts"/>
import {Component, OnInit} from '@angular/core';
import {FormGroup, Validators, FormBuilder} from '@angular/forms';
import {Router} from '@angular/router';
import {NzMessageService} from 'ng-zorro-antd';
import {DcbgService} from './dcbg.service';

@Component({
  selector: 'dcbg',
  templateUrl: 'dcbg.component.html',
  styleUrls: ['./dcbg.component.less'],
  providers: [DcbgService]
})

export class DcbgComponent {
    current = 0;
    index = 'First-content';
    pre() {
        this.current -= 1;
        this.changeContent();
    }
    next() {
        this.current += 1;
        this.changeContent();
    }
    done() {
        this._message.success('done');
    }
    changeContent() {
        switch (this.current) {
            case 0: {
                this.index = 'First-content';
                break;
            }
            case 1: {
                this.index = 'Second-content';
                break;
            }
            default: {
                this.index = 'error';
            }
        }
    }

    constructor(private _message: NzMessageService) {
    }
}

