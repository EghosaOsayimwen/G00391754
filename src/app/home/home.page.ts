import { Component } from '@angular/core';
import { Flashlight } from '@awesome-cordova-plugins/flashlight/ngx';
import { Geolocation } from '@awesome-cordova-plugins/geolocation/ngx';
import { APIService } from '../api.service';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
lat: any;
long: any;
result: any;
  constructor(private flashlight: Flashlight, private geolocation:Geolocation, private api:APIService ) {this.getApi()}

  Flashlight() {
    this.flashlight.toggle();
  }

  GPS() {
    this.geolocation.getCurrentPosition().then((resp) => {
      this.lat = resp.coords.latitude;
      this.long =  resp.coords.longitude;
     }).catch((error) => {
       console.log('Error getting location', error);
     });
  }
  getApi(){this.api.getApi().subscribe(data => {
    this.result = data["timezone"]
  })}
}
