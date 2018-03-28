import {Component, OnInit} from '@angular/core';
import {HistoricalOrdersService} from './historicalOrders.service';
import {NzModalService} from 'ng-zorro-antd';
import {SessionStorageService} from '@core/storage/storage.module';
import {Router} from '@angular/router';

@Component({
  selector: 'app-HistorcalOrders',
  templateUrl: 'historicalOrders.component.html',
  styleUrls: ['./historicalOrders.component.less'],
  providers: [HistoricalOrdersService]
})

export class HistoricalOrdersComponent implements OnInit {
    constructor(private historicalOrdersService: HistoricalOrdersService, private  router: Router,
                private confirmServ: NzModalService, private _storage: SessionStorageService) {
    }
    _loading = true;
    _value = ''; /*搜索内容*/
    choice = 100; /*筛选条件:全部：100 进行中：0 未开始：0*/
    orderDetails = [];
    UnfinishOrder = [];
    orders = [];
    lab = [];
    user;
    /*接口地址*/
    apiUrl = [
        'semester/getNowSemester', /*0获取学期*/
        'order/semester/getFinishedSimpleOrderListByLabId', /*1获取完成预约*/
        'order/semester/getOrderByLabId', /*2获取预约*/
        'order/semester/getUnfinishedSimpleOrderListByLabId', /*3获取未通过预约*/
        'lab/getLabById', // 4
        'user/getUserByUserName', // 5
    ];
    // 获取学期
  searchSemester = this._storage.get('history');
    nowSemester;
    private getSemester() {
          this.historicalOrdersService.executeGET(this.apiUrl[0])
              .then((result: any) => {
                  const res = JSON.parse(result['_body']);
                  if (res['result'] === 'success') {
                      this.nowSemester = res['NowSemester'];
                  }
              });
    }

    // 换星期几
    private getDayByNum(num: number) {
        const array = ['日', '一', '二', '三', '四', '五', '六', '日'];
        return array[num];
    }
    // 获得全部学时
    private getAllHour(orders: any) {
        let hour = 0;
        for (const i of orders) {
            for (const j of i.orderDetails) {
                hour += j.classNum.length  * j.orderWeek.length;
            }
        }
        return hour;
    }
    // 获得课程学时
    private getHour(order: any) {
        let hour = 0;
        for (const i of order) {
            hour += i.classNum.length * i.orderWeek.length;
        }
        return hour;
    }
    private _getData = () => {
        this.getSemester();
        // 获取预约
        this._loading = true;
        let data = {
          labId: this._storage.get('labId'),
          semester: this.searchSemester
        }
        this.historicalOrdersService.executeHttp(this.apiUrl[2], data)
            .then((result: any) => {
                this.orders = JSON.parse(result['_body'])['Order'];
                for (let i of this.orders) {
                    i.expand = false;
                    // 获取教师信息
                    this.historicalOrdersService.executeHttp(this.apiUrl[5], {userName: i.userName})
                        .then((res: any) => {
                            let temp = JSON.parse(res['_body'])['User1'];
                            i.userNickname = temp.userNickname;
                            i.email = temp.email;
                            i.phone = temp.phone;
                        });
                }
            });
        this._loading = false;
        // 获取未通过预约
        this.historicalOrdersService.executeHttp(this.apiUrl[3], data)
            .then((result: any) => {
                this.UnfinishOrder = JSON.parse(result['_body'])['SimpleOrder'];
            });
    }
    private boolOpen(expand: boolean, data: any) {
        if (expand) {
            for (const d of data) {
                for (let i = 0; i < d.lab.length; i++) {
                    if (this.lab[d.lab[i]] == null) {
                        this.historicalOrdersService.executeHttp(this.apiUrl[4], {labId: d.lab[i]})
                            .then((result: any) => {
                                const lab = JSON.parse(result['_body'])['lab'];
                                this.lab[d.lab[i]] = lab;
                                this.historicalOrdersService.executeHttp(this.apiUrl[5], {userName: this.lab[d.lab[i]].userName})
                                    .then((res: any) => {
                                        const admin = JSON.parse(res['_body'])['User1'];
                                        this.lab[d.lab[i]].email = admin.email;
                                        this.lab[d.lab[i]].phone = admin.phone;
                                    });
                            });
                    }
                }
            }
        }
        return expand;
    }
    ngOnInit(): void {
        if (this._storage.get('history') === null) {
            this.router.navigate(['/arranged']);
        }
        this._getData();
    }
}
