import { Injectable } from '@angular/core';
import { geoKey } from './api-keys';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Geocacher } from './geocacher.model';
import { SaveGeocacherService } from './save-geocacher.service';

@Injectable()
export class GetGeocacherService {

  constructor(private http: Http, private saveGeocacherService: SaveGeocacherService) { }

  getPhysicalAddress(lat: string, lng: string){
      return this.http.get("https://maps.googleapis.com/maps/api/geocode/json?latlng="+lat+","+lng+"&key="+geoKey);
    }
}
