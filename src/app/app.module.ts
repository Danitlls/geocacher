import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
//Api keys:
import { masterFirebaseConfig, geoKey } from './api-keys';
//routing:
import { routing } from './app.routing';
//Firebase:
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
//components:
import { WelcomeComponent } from './welcome/welcome.component';
import { NewGeocacherComponent } from './new-geocacher/new-geocacher.component';
import { GeocacherDetailComponent } from './geocacher-detail/geocacher-detail.component';

//to use toggle:
import { ApiLocationComponent } from './api-location/api-location.component';
import { GeocacherListComponent } from './geocacher-list/geocacher-list.component';


export const firebaseConfig = {
  apiKey: masterFirebaseConfig.apiKey,
  authDomain: masterFirebaseConfig.authDomain,
  databaseURL: masterFirebaseConfig.databaseURL,
  storageBucket: masterFirebaseConfig.storageBucket
};


@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    NewGeocacherComponent,
    GeocacherDetailComponent,
    ApiLocationComponent,
    GeocacherListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    routing,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
