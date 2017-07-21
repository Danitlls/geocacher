import { Component, OnInit } from '@angular/core';
import { SaveGeocacherService } from '../save-geocacher.service';
import { Geocacher } from '../geocacher.model';

@Component({
  selector: 'app-new-geocacher',
  templateUrl: './new-geocacher.component.html',
  styleUrls: ['./new-geocacher.component.sass'],
  providers: [SaveGeocacherService]
})

export class NewGeocacherComponent implements OnInit {

  constructor(private saveProductService: SaveGeocacherService) { }

  ngOnInit() {
  }

  submitForm(title: string, phisicalLocation: string, zipCode: number, creator: string) {
   var newGeocacher: Geocacher = new Geocacher(title, phisicalLocation, zipCode, creator);
   this.saveProductService.addGeocacher(newGeocacher);
 }
}
