import { Component, OnInit } from '@angular/core';
import { SaveGeocacherService } from '../save-geocacher.service';
// import { GetGeocacherService } from '../get-geocacher.service';
import { Geocacher } from '../geocacher.model';


@Component({
  selector: 'app-new-geocacher',
  templateUrl: './new-geocacher.component.html',
  styleUrls: ['./new-geocacher.component.sass'],
  providers: [SaveGeocacherService]
})

export class NewGeocacherComponent implements OnInit {
  constructor(private saveGeoService: SaveGeocacherService) {
  }

  ngOnInit() {
  }

  submitForm(title: string, phisicalLocation: string, zipCode: number, latitude: number, longitude: number,creator: string) {
   var newGeocacher: Geocacher = new Geocacher(title, phisicalLocation, zipCode, latitude, longitude, creator);
   this.saveGeoService.addGeocacher(newGeocacher);
 }




 // getGeocacher(){
 //   this.saveGeoService.getGeocacher().then(result => {
 //     console.warn('items from new geocacher', result)
 //   });

 };
