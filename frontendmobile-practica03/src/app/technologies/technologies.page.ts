import { Component, OnInit, ViewChild } from '@angular/core';
import { GeneralService } from '../services/general.service';
import { IonModal } from '@ionic/angular';
import { OverlayEventDetail } from '@ionic/core/components'
import { Router } from '@angular/router';

@Component({
  selector: 'app-technologies',
  templateUrl: './technologies.page.html',
  styleUrls: ['./technologies.page.scss'],
})
export class TechnologiesPage implements OnInit {

  userTech: any = [];
  activeid: number = 0;
  message = 'This modal example uses triggers to automatically open a modal when the button is clicked.';
  name: string='';
  constructor(private service: GeneralService, private router: Router) {

  }

  ngOnInit() {
    this.getTechnologies();
  }
  getTechnologies(){
    this.service.getUser().subscribe((data: any) => {
      console.log(data);
      this.userTech = data[0].technologies;
    });

  }
  setId(id: number) {
    this.router.navigate(['data/technologies/edit-tech', id]);
  }





}
