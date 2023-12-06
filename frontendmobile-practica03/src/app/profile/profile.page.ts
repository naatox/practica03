import { Component, OnInit } from '@angular/core';
import { GeneralService } from '../services/general.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  userData: any = [];
  constructor(private service: GeneralService) {}

  ngOnInit() {
    this.getUser();
  }
  getUser(){
    this.service.getUser().subscribe((data: any) => {
      console.log(data);
      this.userData = data[0];
    });

  }
}
