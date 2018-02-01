import {Component, Input} from '@angular/core';

@Component({
  selector: 'Divider',
  templateUrl: 'Divider.component.html',
  styleUrls: ['./Divider.component.less']
})

export class DividerComponent {
    @Input() simple;
    @Input() len;
    constructor(){
    }
}
