import { Component } from '@angular/core';
import { TeamData, List } from './constants/models';
import { MenuItem } from 'primeng/components/common/menuitem';



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
  items: MenuItem[];

  


  ngOnInit() {
    this.cols = [
        { field: 'shop', header: 'Shop Name', width: '25%' },
        { field: 'coupon', header: 'Coupon Name', width: '25%' },
        { field: 'startdate', header: 'Start Date', width: '25%' },
        { field: 'enddate', header: 'End Date', width: '25%' }
    ];
    this.items = [
      {label: 'Stats', icon: 'fa fa-fw fa-bar-chart'},
      {label: 'Calendar', icon: 'fa fa-fw fa-calendar'},
      {label: 'Documentation', icon: 'fa fa-fw fa-book'},
      {label: 'Support', icon: 'fa fa-fw fa-support'},
      {label: 'Social', icon: 'fa fa-fw fa-twitter'}
  ];
}
}
