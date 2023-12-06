import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HobiesPage } from './hobies.page';
import { EditHobieComponent } from './edit-hobie/edit-hobie.component';

const routes: Routes = [
  {
    path: '',
    component: HobiesPage
  },
  {
    path: 'edit-hobby/:id',
    component: EditHobieComponent

  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HobiesPageRoutingModule {}
