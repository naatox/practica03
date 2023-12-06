import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HobiesPageRoutingModule } from './hobies-routing.module';

import { HobiesPage } from './hobies.page';
import { EditHobieComponent } from './edit-hobie/edit-hobie.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HobiesPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [HobiesPage, EditHobieComponent]
})
export class HobiesPageModule {}
