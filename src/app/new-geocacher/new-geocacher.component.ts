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

  submitForm(title: string, phisicalLocation: any, zipCode: number, latitude: any, longitude: any,creator: string) {
    let latitudeFromAddress : any;
    // let latitudeFromAddress : number;
    let longitudeFromAddress: any;
    console.log("title:" , title, "p address:", phisicalLocation, "zip", zipCode, "lat:",latitude, "long:", longitude, "creator:",creator );

    if (latitude === "" || longitude === ""){
     this.geocacherApiService.getCoordenadesFromAddress(phisicalLocation).subscribe(response => {
       console.warn('response from get coordinates:', response.json().results[0].geometry.location);

       var coordinates = response.json().results[0].geometry.location;
       var newGeocacher: Geocacher = new Geocacher(title, phisicalLocation, zipCode, coordinates.lat, coordinates.lng, creator);
       this.saveGeoService.addGeocacher(newGeocacher);
      });
    }
    else if (phisicalLocation === "") {
      this.geocacherApiService.getAddressFromCoordenates(latitude, longitude).subscribe(response => {
        console.warn('response from get Address:', response.json().results[0].formatted_address);


        var pAddress = response.json().results[0].formatted_address;
        var newGeocacher: Geocacher = new Geocacher(title, pAddress, zipCode, latitude, longitude, creator);
        this.saveGeoService.addGeocacher(newGeocacher);
        });
    }
     else if(phisicalLocation && latitude && longitude) {
      var newGeocacher: Geocacher = new Geocacher(title, phisicalLocation, zipCode, latitude, longitude, creator);
      this.saveGeoService.addGeocacher(newGeocacher);
    } else {
      alert("Please enter either a physical address or latitude/longitude")
    }
 }

// //Returns all the objects from the Firebase:
//   getList(){
//    this.saveGeoService.getGeocacher().then(result => {
//      console.warn('items from new geocacher', result)
//    });
//   };

}
