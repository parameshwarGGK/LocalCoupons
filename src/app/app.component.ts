import { Component } from '@angular/core';
import { TeamData, List } from './constants/models';
import { MenuItem } from 'primeng/components/common/menuitem';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  cols: any[];
  teams: Array<any>;
  constructor()
  {
    this.teams=List;
    
  }


  


  ngOnInit() {
    this.cols = [
        { field: 'shop', header: 'Shop Name', width: '25%' },
        { field: 'coupon', header: 'Coupon Name', width: '25%' },
        { field: 'startdate', header: 'Start Date', width: '25%' },
        { field: 'enddate', header: 'End Date', width: '25%' }
    ];
   
}
}
