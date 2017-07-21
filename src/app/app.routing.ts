import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
// import { PhotosListComponent } from './photos-list/photos-list.component';
// import { UserPhotosListComponent } from './user-photos-list/user-photos-list.component';

const appRoutes: Routes = [
{
  path: '',
  component: WelcomeComponent
}
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);

// {
//   path: 'photos-list',
//   component: PhotosListComponent
// },
// {
//   path: 'user/photos',
//   component: UserPhotosListComponent
// }
