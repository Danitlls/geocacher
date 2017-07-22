import { Injectable } from '@angular/core';
import { Geocacher } from './geocacher.model';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class SaveGeocacherService {
  geocachers: FirebaseListObservable<any[]>;

  constructor(private database: AngularFireDatabase) {
    this.geocachers = database.list('geocachers');
    console.log(this.geocachers)
  }

  getGeocacher(){
    return new Promise(resolve => {
      this.geocachers.subscribe(result => {
      resolve(result)
    })
  })
};

  addGeocacher(newGeocacher: Geocacher){
    this.geocachers.push(newGeocacher);
    console.log(newGeocacher);
  };


}


//   constructor(private database: AngularFireDatabase) {
//     this.geocachers = af.list('geocachers');
//   }
