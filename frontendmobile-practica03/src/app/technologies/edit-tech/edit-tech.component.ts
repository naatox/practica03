import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators,FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { GeneralService } from 'src/app/services/general.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-edit-tech',
  templateUrl: './edit-tech.component.html',
  styleUrls: ['./edit-tech.component.scss'],
})
export class EditTechComponent  {

  message: string = "";
  success: string = "";
  form : FormGroup;
  name : string = "";
  percentage: number = 0;
  year: number = 0;
  id: number = 0;
  constructor(private service: GeneralService, private router: Router, private route: ActivatedRoute) {
    this.form = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(3)]),
      percentage: new FormControl('', [Validators.required, Validators.minLength(1)]),
      year: new FormControl('', [Validators.required, Validators.minLength(4)]),

    });
    this.id = this.route.snapshot.params['id'];
  }


  onSubmit(){

   const response = this.service.updateTech(this.form.value,this.id )
   .subscribe((data: any) => {
    this.success = "Datos actualizados correctamente, redireccionando...";
    setTimeout(() => {

      this.router.navigate(['data/technologies']);
     }, 5000);
   },(error: any) => {
    console.log(error);
    this.message = "Error al actualizar los datos";

   });


  }



}
