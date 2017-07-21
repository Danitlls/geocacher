import { Injectable } from '@angular/core';
import { geoKey, masterFirebaseConfig } from './api-keys';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Geocacher } from './geocacher.model';
import { Address } from './address.model';
import { SaveGeocacherService } from './save-geocacher.service';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class GetGeocacherService {
   phisicalLocation = this.phisicalLocation;
   zipCode = this.zipCode;
  //  geoLocation: [],
  //  latitude= this.latitud;
  //  longitude= this.longitude;

  constructor(private http: Http, private saveGeocacherService: SaveGeocacherService, private database: AngularFireDatabase) {
    this.http = http
  }

  // getPhysicalAddress(lat: string, lng: string){
  //     return this.http.get("https://maps.googleapis.com/maps/api/geocode/json?latlng="+lat+","+lng+"&key="+geoKey).subscribe(response => {
  //       let foundAddress: Address;
  //       for(let item of response.json().results) {
  //         foundAddress = new Address[(phisicalLocation: string, zipCode: number, latitude: number, longitude: number)];
  //         this.saveGeocacherService.addGeocacher(foundAddress);
  //       }
  //       console.log(response.json());
  //       console.log(foundGeocacher);
  //     });
  //   }
  //
  getCoordenades(phisicalLocation: string){
    return this.http.get("https://maps.googleapis.com/maps/api/geocode/json?address=" + phisicalLocation + "&key=" + geoKey.apyKey).subscribe(response => {
      console.warn('response from get coordinates:', response.json())
      let foundAddress: Address;
      for(let result of response.json().results) {
        foundAddress = new Address(result.address_components[0].long_name, result.geometry.location.lat, result.geometry.location.lng);
            //  result.geometry.location.lat, result.geometry.location.lng );
        // return foundAddress;
        console.log(foundAddress);
      }

    })
  }
}


// 1600+Amphitheatre+Parkway,+Mountain+View,+CA
