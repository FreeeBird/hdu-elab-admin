///<reference path="../../../../../node_modules/@angular/forms/src/model.d.ts"/>
import {Component, OnInit} from '@angular/core';
import {ArrangedService} from './arranged.service';
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
    orderDetails= [
        {
            'type': 1,
            'weekDays': [5],
            'classNum': [3, 4, 5],
            'orderWeek': [1, 2, 3, 4, 5, 6, 7, 8, 9]
        },
        {
            'type': 2,
            'weekDays': [5],
            'classNum': [3, 4, 5],
            'orderWeek': [1, 2, 3, 4, 5, 6, 7, 8, 9]
        },
        {
            'type': 3,
            'weekDays': [5],
            'classNum': [3, 4, 5],
            'orderWeek': [1, 2, 3, 4, 5, 6, 7, 8, 9]
        },
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
