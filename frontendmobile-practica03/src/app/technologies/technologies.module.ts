import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TechnologiesPageRoutingModule } from './technologies-routing.module';

import { TechnologiesPage } from './technologies.page';
import { EditTechComponent } from './edit-tech/edit-tech.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TechnologiesPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [TechnologiesPage,EditTechComponent]
})
export class TechnologiesPageModule {}
