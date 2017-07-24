import { Component, OnInit } from '@angular/core';
import { SaveGeocacherService } from '../save-geocacher.service';
import { Geocacher } from '../geocacher.model';
import { Observable } from 'rxjs/Observable';
import { FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-geocacher-list',
  templateUrl: './geocacher-list.component.html',
  styleUrls: ['./geocacher-list.component.sass'],
  providers: [SaveGeocacherService]
})
export class GeocacherListComponent implements OnInit {
  items: FirebaseListObservable<any[]>;
  item: {};
  showDetails: boolean = false;
  constructor(private saveGeoService: SaveGeocacherService) {
  }

  ngOnInit() {
  }
  //Returns all the objects from the Firebase:
  getList(){
   this.items = this.saveGeoService.getGeocacher()
  };

  goToDetailPage(item) {
    this.showDetails = false
    this.item = item
    this.showDetails = true
  }

  hideDetails() {
    this.showDetails = false
  }
}
