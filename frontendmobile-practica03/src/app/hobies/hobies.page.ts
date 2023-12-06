import { Component, OnInit } from '@angular/core';
import { GeneralService } from '../services/general.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hobies',
  templateUrl: './hobies.page.html',
  styleUrls: ['./hobies.page.scss'],
})
export class HobiesPage implements OnInit {
  userHobbies: any = [];
  constructor(private service: GeneralService,private route: Router) { }

  ngOnInit() {
    this.getHobbies();
  }

  getHobbies(){
    this.service.getUser().subscribe((data: any) => {
      console.log(data);
      this.userHobbies = data[0].interests;
    });
  }
  edit(id: number){
    console.log(id);
    this.route.navigate(['data/hobies/edit-hobby', id]);
  }
}
