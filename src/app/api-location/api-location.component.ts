import { Component, OnInit } from '@angular/core';
import { GeocacherApiService } from '../geocacher-api.service';

@Component({
  selector: 'app-api-location',
  templateUrl: './api-location.component.html',
  styleUrls: ['./api-location.component.sass'],
  providers: [GeocacherApiService]
})
export class ApiLocationComponent implements OnInit {

  constructor(private geocacherApiService: GeocacherApiService) {}

  ngOnInit() {
  }

  getCoordenades(phisicalLocation: string){
    let location = this.geocacherApiService.getCoordenadesFromAddress(phisicalLocation);
    console.log(location)
  }

  getAddress(lat: number, lng: number){
    let address = this.geocacherApiService.getAddressFromCoordenates(lat, lng);
    console.log(address)
  }
}
