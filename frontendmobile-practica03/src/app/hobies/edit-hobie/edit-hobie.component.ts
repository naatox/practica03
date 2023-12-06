import { Component, OnInit } from '@angular/core';
import { GeneralService } from '../../services/general.service';
import { FormGroup, FormBuilder, Validators,FormControl } from '@angular/forms';
import { Router,ActivatedRoute } from '@angular/router';




@Component({
  selector: 'app-edit-hobie',
  templateUrl: './edit-hobie.component.html',
  styleUrls: ['./edit-hobie.component.scss'],
})
export class EditHobieComponent {


  message: string = "";
  success: string = "";
  form : FormGroup;
  name : string = "";
  description: string = "";
  id: number = 0;
  constructor(private service: GeneralService, private router: Router, private route: ActivatedRoute) {
    this.form = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(3)]),
      description: new FormControl('', [Validators.required, Validators.minLength(3)]),


    });
    this.id = this.route.snapshot.params['id'];
  }


  onSubmit(){

   const response = this.service.updateHobby(this.form.value,this.id )
   .subscribe((data: any) => {
    this.success = "Datos actualizados correctamente, redireccionando...";
    setTimeout(() => {

      this.router.navigate(['data/hobies']);
     }, 5000);
   },(error: any) => {
    console.log(error);
    this.message = "Error al actualizar los datos";

   });


  }


}
