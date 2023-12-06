import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators,FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { GeneralService } from 'src/app/services/general.service';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.scss'],
})
export class EditProfileComponent  implements OnInit {

  message: string = "";
  success: string = "";
  form : FormGroup;
  name : string = "";
  lastname : string = "";
  career : string = "";
  summary : string = "";
  country : string = "";
  city : string = "";
  email : string = "";
  age: number = 0;
  semester: number = 0;
  constructor(private service: GeneralService, private router: Router) {
    this.form = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(3)]),
      lastname: new FormControl('', [Validators.required, Validators.minLength(3)]),
      career: new FormControl('', [Validators.required, Validators.minLength(3)]),
      summary: new FormControl('', [Validators.required, Validators.minLength(3)]),
      country: new FormControl('', [Validators.required, Validators.minLength(3)]),
      city: new FormControl('', [Validators.required, Validators.minLength(3)]),
      email: new FormControl('', [Validators.required, Validators.email]),
      age: new FormControl('', [Validators.required, Validators.minLength(1)]),
      semester: new FormControl('', [Validators.required, Validators.minLength(1)]),

    });
  }

  ngOnInit() {

    console.log(this.message);
  }
  onSubmit(){


    console.log(this.form.value);
   const response = this.service.updateUser(this.form.value)
   .subscribe((data: any) => {
    this.success = "Datos actualizados correctamente, redireccionando...";
    setTimeout(() => {

      this.router.navigate(['data/profile']);
     }, 5000);
   },(error: any) => {
    console.log(error);
    this.message = "Error al actualizar los datos";

   });


  }
}
