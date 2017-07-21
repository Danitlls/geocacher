import { Injectable } from '@angular/core';
import { Geocacher } from './geocacher.model';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class SaveGeocacherService {
  geocachers: FirebaseListObservable<any[]>;

  constructor(private database: AngularFireDatabase) {
    this.geocachers = database.list('geocachers');
  }

  getGeocacher(){
  return this.geocachers;
}
}
