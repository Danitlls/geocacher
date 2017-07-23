import { Injectable } from '@angular/core';
import { geoKey, masterFirebaseConfig } from './api-keys';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Geocacher } from './geocacher.model';

@Injectable()

// Makes the API call:
export class GeocacherApiService {
  // phisicalLocation: string;
  // lat: number;
  // lng: number;
  constructor(private http: Http) {
    this.http = http;
  }

  getCoordenadesFromAddress(phisicalLocation: string){
    return this.http.get("https://maps.googleapis.com/maps/api/geocode/json?address=" + phisicalLocation + "&key=" + geoKey.apyKey).subscribe(response => {
      console.warn('response from get coordinates:', response.json().results[0].geometry.location);
      // how to return the value to make it accesible..?
      return response.json().results[0].geometry.location;
    });

  }

  getAddressFromCoordenates(lat: number, lng: number){
    return this.http.get("https://maps.googleapis.com/maps/api/geocode/json?latlng=" + lat + ","+ lng  + "&key=" + geoKey.apyKey).subscribe(response => {
      console.warn('response from get Address:', response.json().results[0].formatted_address)
    });
  }
}
