import { Component, OnInit } from '@angular/core';
import { List, ShopRegistration } from '../../../constants/models';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';

@Component({
  selector: 'app-retailer-view',
  templateUrl: './retailer-view.component.html',
  styleUrls: ['./retailer-view.component.css']
})
export class RetailerViewComponent implements OnInit {

  RetailerForm: FormGroup;
  display:boolean;
  RetailerId:number;
  cols: any[];
  teams: Array<any>;
  constructor(
    private fb: FormBuilder,
    // private _RetailerService:UserServicesService
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
      number2:new FormControl('')
    });
  }

  ngOnInit() {
    this.cols = [
      { field: 'shop', header: 'Shop Name', width: '25%' },
      { field: 'address', header: 'Shop Address', width: '25%' },
      { field: 'city', header: 'City Name', width: '25%' },
      { field: 'phonenumber', header: 'Phone Number', width: '25%' }
  ];
  }

  onRetailerFormSubmit(e)
  {
    if (e.form.status === 'INVALID') {
      return false;
    }
    const RetailerDataModel = this.prepareModelToSave();
    if (this.RetailerForm.value['id'] !== undefined && this.RetailerForm.value['id'] !== null && this.RetailerId>0) {
      //Edit
      // this._RetailerService.UpdateShopRegistration(RetailerDataModel).subscribe();
    }
    else if(this.RetailerForm.value['id'] !== undefined && this.RetailerForm.value['id'] !== null && this.RetailerId == 0){
      //add
      // this._RetailerService.SaveShopRegistration(RetailerDataModel).subscribe();
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
        ContactNo2: formModel.number2
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
  }

  HideAddShop()
  {
    this.display=false;
  }
}
