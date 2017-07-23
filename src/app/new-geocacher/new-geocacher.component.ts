import { Component, OnInit } from '@angular/core';
import { SaveGeocacherService } from '../save-geocacher.service';
import { GeocacherApiService } from '../geocacher-api.service';
import { Geocacher } from '../geocacher.model';
import { Observable } from 'rxjs/Observable';


@Component({
  selector: 'app-new-geocacher',
  templateUrl: './new-geocacher.component.html',
  styleUrls: ['./new-geocacher.component.sass'],
  providers: [SaveGeocacherService, GeocacherApiService]
})

export class NewGeocacherComponent implements OnInit {
  constructor(private saveGeoService: SaveGeocacherService, private geocacherApiService: GeocacherApiService) {
  }

  //I don't know if I need to make my data observable here...
  public data: Observable<any[]>;
  ngOnInit() {
  }

  submitForm(title: string, phisicalLocation: string, zipCode: number, latitude: number, longitude: number,creator: string) {
    // let latitudeFromAddress : number;
    // // let latitudeFromAddress : number;
    // let longitudeFromAddress: number;
    // if (latitude === null){
    //   latitudeFromAddress = this.geocacherApiService.getCoordenadesFromAddress(phisicalLocation);
    //   // longitude = this.geocacherApiService.getCoordenadesFromAddress(phisicalLocation);
    // }
    // if (longitude === null){
    //   longitudeFromAddress = this.geocacherApiService.getCoordenadesFromAddress(phisicalLocation);
    // }
   var newGeocacher: Geocacher = new Geocacher(title, phisicalLocation, zipCode, latitude, longitude, creator);
   this.saveGeoService.addGeocacher(newGeocacher);
 }

//Returns all the objects from the Firebase:
  getList(){
   this.saveGeoService.getGeocacher().then(result => {
     console.warn('items from new geocacher', result)
   });
  };

}
