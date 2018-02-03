///<reference path="../../../../../node_modules/@angular/forms/src/model.d.ts"/>
import {Component, OnInit} from '@angular/core';
import {ArrangedService} from './arranged.service';
import {Router} from '@angular/router';
import {NzMessageService, NzModalService} from 'ng-zorro-antd';
import {SessionStorageService} from '@core/storage/storage.service';


@Component({
    selector: 'app-arranged',
    templateUrl: 'arranged.component.html',
    styleUrls: ['./arranged.component.less'],
    providers: [ArrangedService]
})

export class ArrangedComponent implements OnInit {

       constructor(private _storage: SessionStorageService, private confirmServ: NzModalService,
                private ArrangedService: ArrangedService, private _message: NzMessageService) {
    }
    datas = [];
    panels = [
        {
            active: true,
            disabled: false,
            name: '志愿 1',
            id: 0
        },
        {
            active: false,
            disabled: true,
            name: '志愿 2',
            id: 1
        },
        {
            active: false,
            disabled: false,
            name: '志愿 3',
            id: 2
        }
    ];
    private _getData = () => {
        this.ArrangedService.getOrderList()
            .then((result: any) => {
                const { data } = result;
                /*this.datas = data;*/
                for (let d of data){
                    d.expand = false;
                }
                this.datas = data;
                console.log(this.datas[0].orderDetails.length);
            });
    }
    ngOnInit(): void {
        this._getData();

    }

}
