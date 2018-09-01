import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient, HttpParams } from '@angular/common/http';
import {environment} from '@environments/environment';
import { ShopRegistration, CouponCreation } from '@app/constants/models';

@Injectable()
export class UserService {

  token;
  headers: HttpHeaders;

  constructor(private _http: HttpClient) { 
  }

  getHeaders() {
    
  }
  getApiCall(endpoint, token) {
    const headers=[];
    return this._http.get(endpoint);

  }
   
  fetchReports(token,workspace) {
    if(workspace===null){
      return this.getApiCall(`https://api.powerbi.com/beta/myorg/reports`, token);
    }
    else{
      return this.getApiCall(`https://api.powerbi.com/beta/myorg/groups/${workspace}/reports`, token);
    }
  }
  
  getCoupons() {
    return this.getApiCall(`https://jsonblob.com/api/55d1ce7a-adb1-11e8-b42f-c55772398314`, '');
  }

    SaveShopRegistration(shop:ShopRegistration)
    {
      console.log('shop',shop);
      var headers = new HttpHeaders({
      "Content-Type": "application/json",
      "Accept": "application/json"
      });

      var body= JSON.stringify(shop);
      return this._http.post(environment.EndPoint+"/api/register_shop",body,{headers: headers});
    }

    UpdateShopRegistration(shop:ShopRegistration)
    {
      var headers = new HttpHeaders({
      "Content-Type": "application/json",
      "Accept": "application/json"
      });

      var body= JSON.stringify(shop);
      return this._http.patch("",body,{headers: headers});
    }

    SaveCouponGeneration(shop:CouponCreation)
    {
      var headers = new HttpHeaders({
      "Content-Type": "application/json",
      "Accept": "application/json"
      });

      var body= JSON.stringify(shop);
      return this._http.post("",body,{headers: headers});
    } 

    UpdateCouponGeneration(shop:CouponCreation)
    {
      var headers = new HttpHeaders({
      "Content-Type": "application/json",
      "Accept": "application/json"
      });

      var body= JSON.stringify(shop);
      return this._http.patch("",body,{headers: headers});
    }
}
