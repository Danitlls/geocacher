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


//Add geocacherItem to databese
  addGeocacher(newGeocacher: Geocacher){
    this.geocachers.push(newGeocacher);
    console.log(newGeocacher);
  };

  getGeocacher(){
    return this.geocachers
  };

  getGeocacherById(geocacherId: string){
    return this.database.object('geocachers/' + geocacherId);
  }

}


//   constructor(private database: AngularFireDatabase) {
//     this.geocachers = af.list('geocachers');
//   }
