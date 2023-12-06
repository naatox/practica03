import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DataPage } from './data.page';

const routes: Routes = [
  {
    path: 'data',
    component: DataPage,
    children: [
      {
        path: 'profile',
        loadChildren: () => import('../profile/profile.module').then( m => m.ProfilePageModule)
      },
      {
        path: 'hobies',
        loadChildren: () => import('../hobies/hobies.module').then( m => m.HobiesPageModule)
      },
      {
        path: 'technologies',
        loadChildren: () => import('../technologies/technologies.module').then( m => m.TechnologiesPageModule)
      },
      {
        path: '',
        redirectTo: '/data/profile',
        pathMatch: 'full'
      }

    ]
  },
  {
    path: '',
    redirectTo: '/data/profile',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DataPageRoutingModule {}
