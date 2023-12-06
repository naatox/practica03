import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TechnologiesPage } from './technologies.page';
import { EditTechComponent } from './edit-tech/edit-tech.component';

const routes: Routes = [
  {
    path: '',
    component: TechnologiesPage
  },
  {
    path:'edit-tech/:id',
    component: EditTechComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TechnologiesPageRoutingModule {}
