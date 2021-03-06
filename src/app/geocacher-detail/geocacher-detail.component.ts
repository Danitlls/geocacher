import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { SaveGeocacherService } from '../save-geocacher.service';
// import { GetGeocacherService } from '../get-geocacher.service';
import { Geocacher } from '../geocacher.model';
import { FirebaseListObservable } from 'angularfire2/database';
// import { routing } from './app.routing';


@Component({
  selector: 'app-geocacher-detail',
  templateUrl: './geocacher-detail.component.html',
  styleUrls: ['./geocacher-detail.component.sass'],
  providers: [SaveGeocacherService],
  inputs: ["geocacherToDisplay"]
})

export class GeocacherDetailComponent implements OnInit {
  geocachers: FirebaseListObservable<any[]>;
  geocacherId: string;
  geocacherToDisplay: {}
  // currentRoute: string = this.router.url;
  constructor(private saveGeoService: SaveGeocacherService, private route: ActivatedRoute) {
  }

  // ngOnInit() {
  //   this.geocachers = this.saveGeoService.getGeocacher();
  // }
  ngOnInit() {
    console.warn(this.geocacherToDisplay)
    //   this.route.params.forEach((urlParameters) => {
    //    this.geocacherId = urlParameters['id'];
    //  });
    //  this.geocacherToDisplay = this.saveGeoService.getGeocacherById(this.geocacherId);

    }
}
