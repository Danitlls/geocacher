import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { NewGeocacherComponent } from './new-geocacher/new-geocacher.component';
import { GeocacherDetailComponent } from './geocacher-detail/geocacher-detail.component';
import { GeocacherListComponent } from './geocacher-list/geocacher-list.component';


const appRoutes: Routes = [
{
  path: '',
  component: WelcomeComponent
},
{
  path: 'new-geocacher',
  component: NewGeocacherComponent
},
{
  path: 'geocacher-detail',
  component: GeocacherDetailComponent
},
{
  path: 'geocacher-list',
  component: GeocacherListComponent
}
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
