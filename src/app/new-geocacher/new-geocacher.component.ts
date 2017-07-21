import { Component, OnInit } from '@angular/core';
import { SaveGeocacherService } from '../save-geocacher.service';
import { GetGeocacherService } from '../get-geocacher.service';
import { Geocacher } from '../geocacher.model';
import { Address } from '../address.model';

@Component({
  selector: 'app-new-geocacher',
  templateUrl: './new-geocacher.component.html',
  styleUrls: ['./new-geocacher.component.sass'],
  providers: [SaveGeocacherService, GetGeocacherService]
})

export class NewGeocacherComponent implements OnInit {
  constructor(private saveGeoService: SaveGeocacherService, private getGeoService: GetGeocacherService) {
  }

  ngOnInit() {
  }

  submitForm(title: string, phisicalLocation: string, zipCode: number, latitude: number, longitude: number,creator: string) {
   var newGeocacher: Geocacher = new Geocacher(title, phisicalLocation, zipCode, latitude, longitude, creator);
   this.saveGeoService.addGeocacher(newGeocacher);
 }

 getCoordenades(phisicalLocation: string){
   this.getGeoService.getCoordenades(phisicalLocation);
 }
}
