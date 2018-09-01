import { Component, OnInit } from '@angular/core';
import { Car, GetCars } from '../../../constants/models';
import {UserService} from '../../../modules/services/user.service';
@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.css']
})
export class UserPageComponent implements OnInit {

  cars: Car[];
  constructor(private _userService : UserService) { }
  coupons;
  ngOnInit() {
    this.cars= GetCars;
    this._userService.getCoupons().subscribe(coupons => {
      this.coupons = coupons['message'];
      console.log('this.coupons ',this.coupons );
    }, (err) => {
      if(err.status==403){
        
        //this.getReports();
        //get access token and set it to 
      }
    });
  }

}
