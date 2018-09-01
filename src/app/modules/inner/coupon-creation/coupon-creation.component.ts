import { Component, ViewChild, ChangeDetectorRef, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { } from '@types/googlemaps';
import { GetList, CouponCreation } from '@app/constants/models';
declare var google: any;
@Component({
  selector: 'app-coupon-creation',
  templateUrl: './coupon-creation.component.html',
  styleUrls: ['./coupon-creation.component.css']
})
export class CouponCreationComponent implements OnInit {
  @ViewChild('gmap') gmapElement: any;
  map: google.maps.Map;
  title = 'map';

  CouponForm: FormGroup;
  display:Boolean;
  couponId:number;
  cols: any[];
  CouponList: Array<any>;

  constructor(private _ref : ChangeDetectorRef,
              private fb: FormBuilder
              // private _couponService:UserServicesService
            )
  {

    this.CouponList=GetList;
    this.display=false;
    this.createForm();
    this.couponId=0;
  }
  public latitude: number;
  public longitude: number;
  public currentAddress: string;
  private geoCoder;

 
  

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
  }

  createForm()
  {
    this.CouponForm = this.fb.group({
      productname: new FormControl(''),
      productdiscription: new FormControl(''),
      productspecification: new FormControl(''),
      company: new FormControl(''),
      quality:new FormControl(''),
      startdate:new FormControl(''),
      enddate:new FormControl(''),
      price:new FormControl(''),
      couponcode:new FormControl(''),
      validationstartdate:new FormControl(''),
      validationenddate:new FormControl(''),
      latitude:new FormControl(''),
      longitude:new FormControl('')
    });
  }

  onCouponFormSubmit(e)
  {
    if (e.form.status === 'INVALID') {
      return false;
    }
    const CouponDataModel = this.prepareModelToSave();

    if (this.CouponForm.value['id'] !== undefined && this.CouponForm.value['id'] !== null && this.couponId>0) {
      //Edit
      // this._couponService.UpdateCouponGeneration(CouponDataModel).subscribe();
    }
    else if(this.CouponForm.value['id'] !== undefined && this.CouponForm.value['id'] !== null && this.couponId == 0){
      //add
      // this._couponService.SaveCouponGeneration(CouponDataModel).subscribe();
    }
  }

  prepareModelToSave()
  {
    const formModel = this.CouponForm.value;
    const CouponData: CouponCreation = {
        id: this.couponId,
        ProductName: formModel.productname,
        ProductDescription: formModel.productdiscription,
        ProductSpecifications: formModel.productspecification,
        Industry:formModel.company,
        Quantity: formModel.quality,
        SalesStartDate:formModel.startdate,
        SaleEndDate:formModel.enddate,
        CouponCode: formModel.couponcode,
        DistStartDate: formModel.validationstartdate,
        DistEndDate: formModel.validationenddate
    };
    return CouponData;
    }
  
    ViewCoupons()
  {
    this.display=true;
  }

  HideCoupons()
  {
    this.display=false;
  }


  rendergooglemap(){
  var mapProp = {
      center: new google.maps.LatLng(this.latitude, this.longitude),
      zoom: 8,
      mapTypeId: google.maps.MapTypeId.ROADMAP,
      
    };
    this.map = new google.maps.Map(this.gmapElement.nativeElement, mapProp);
    let marker = new google.maps.Marker({    
    map: this.map,
    animation: google.maps.Animation.DROP,
    position: new google.maps.LatLng(this.latitude, this.longitude),
    draggable: true
  });
  this.lastLatLng(marker);
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
  myUploader(event) {
    //event.files == files to upload
    console.log('event',event);
}

}
