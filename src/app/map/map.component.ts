import { Component, ViewChild, ChangeDetectorRef, OnInit } from '@angular/core';
import { TeamData, List } from '../constants/models';
import { MenuItem } from 'primeng/components/common/menuitem';
import { } from '@types/googlemaps';
declare var google: any;
@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  
  @ViewChild('gmap') gmapElement: any;
  map: google.maps.Map;
  title = 'map';
  constructor(private _ref : ChangeDetectorRef)
  {}
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

}
