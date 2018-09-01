import { Component, OnInit, ViewChild, ChangeDetectorRef } from '@angular/core';
import { List, ShopRegistration } from '../../../constants/models';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import {UserService} from '../../../modules/services/user.service';
import { } from '@types/googlemaps';
declare var google: any;
@Component({
  selector: 'app-retailer-view',
  templateUrl: './retailer-view.component.html',
  styleUrls: ['./retailer-view.component.css']
})
export class RetailerViewComponent implements OnInit {
  @ViewChild('gmap') gmapElement: any;
  map: google.maps.Map;
  title = 'map';
  RetailerForm: FormGroup;
  display:boolean;
  RetailerId:number;
  cols: any[];
  teams: Array<any>;
  public latitude: number;
  public longitude: number;
  public currentAddress: string;
  private geoCoder;
  constructor(
    private fb: FormBuilder,
     private _UserService:UserService,
     private _ref : ChangeDetectorRef
  )
  {
    this.teams=List;
    this.display=false;
    this.createForm();
    this.RetailerId=0;
    
  }

  createForm()
  {
    this.RetailerForm = this.fb.group({
      shopname: new FormControl(''),
      shopaddress: new FormControl(''),
      shoplocation: new FormControl(''),
      shopdescription: new FormControl(''),
      city: new FormControl(''),
      state:new FormControl(''),
      country:new FormControl(''),
      pincode:new FormControl(''),
      number1:new FormControl(''),
      number2:new FormControl(''),
      latitude:new FormControl(''),
      longitude:new FormControl('')
    });
  }

  ngOnInit() {
    var optionsCurrent = {
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 0
    };

  navigator.geolocation.getCurrentPosition((position) => { 
    this.latitude = position.coords.latitude; 
    this.longitude = position.coords.longitude;
    this.rendergooglemap();
  },(err) => { this.latitude=17.385044;this.longitude=78.486671;this.rendergooglemap(); },optionsCurrent);
  this.cols = [
    { field: 'name', header: 'Shop Name', width: '25%' },
    { field: 'price', header: 'Product Price', width: '25%' },
    { field: 'coupon', header: 'Coupon Code', width: '25%' },
    { field: 'start', header: 'Start Date', width: '25%' },
    { field: 'end', header: 'End Date', width: '25%' }
];
    this.cols = [
      { field: 'shop', header: 'Shop Name', width: '25%' },
      { field: 'address', header: 'Shop Address', width: '25%' },
      { field: 'city', header: 'City Name', width: '25%' },
      { field: 'phonenumber', header: 'Phone Number', width: '25%' }
  ];
  }
  rendergooglemap(){
      if(this.display===true){
      var mapProp = {
          center: new google.maps.LatLng(this.latitude, this.longitude),
          zoom: 8,
          mapTypeId: google.maps.MapTypeId.ROADMAP,
          
        };
        this.map = new google.maps.Map(document.getElementById('map_id'), mapProp);
        let marker = new google.maps.Marker({    
        map: this.map,
        animation: google.maps.Animation.DROP,
        position: new google.maps.LatLng(this.latitude, this.longitude),
        draggable: true
      });
      this.lastLatLng(marker);
    }
  }
lastLatLng(marker){
      google.maps.event.addListener(marker, 'dragend', () =>{ 
      let LastLat= marker.position.lat();
      let LastLng= marker.position.lng();
      this.Getaddress(LastLat,LastLng, marker);    
    });
  }
  Getaddress(LastLat,LastLng, marker){
    this.latitude=LastLat;
    this.longitude=LastLng;
    this._ref.detectChanges();           
  }
  onRetailerFormSubmit(e)
  {
    if (e.form.status === 'INVALID') {
      return false;
    }
    const RetailerDataModel = this.prepareModelToSave();
  
    console.log('RetailerDataModel',RetailerDataModel);
    if ( this.RetailerId>0) {
      
      //Edit
       this._UserService.UpdateShopRegistration(RetailerDataModel).subscribe();
    }
    else if(this.RetailerId == 0){
      //add
      
       this._UserService.SaveShopRegistration(RetailerDataModel).subscribe();
      
    }
  }

  prepareModelToSave()
  {
    const formModel = this.RetailerForm.value;
    const RetailerData: ShopRegistration = {
        id: this.RetailerId,
        ShopName: formModel.shopname,
        ShopDescription: formModel.shopdescription,
        LatLong: formModel.shoplocation,
        Address1:formModel.shopaddress,
        City: formModel.city,
        state:formModel.state,
        Country:formModel.country,
        Pincode: formModel.pincode,
        ContactNo1: formModel.number1,
        ContactNo2: formModel.number2,
        latitude: formModel.latitude,
        longitude: formModel.longitude
    };

    return RetailerData;
  }

  EditShop()
  {
    this.display=true;
  }
  AddShop()
  {
    this.display=true;
    this.rendergooglemap();
  }

  HideAddShop()
  {
    this.display=false;
  }
  addWrapperDisplay(){
    
    if(this.display===true) {
      return "show";
    } else {
      return "hide";
    }
  }
}
