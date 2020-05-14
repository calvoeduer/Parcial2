import { Component, OnInit } from '@angular/core';
import { Persona } from 'src/app/models/persona';
import { TiquetService } from '../../services/tiquet.service';
import { FormGroup, FormBuilder, Validators, AbstractControl} from '@angular/forms';



@Component({
  selector: 'app-persona-registro',
  templateUrl: './persona-registro.component.html',
  styleUrls: ['./persona-registro.component.css']
})
export class PersonaRegistroComponent implements OnInit {

  formGroup : FormGroup;
  persona : Persona;
  constructor(private tiquetService:TiquetService, private formBuilder: FormBuilder) { }

  ngOnInit(): void {

    this.buildForm();
  } 

   private buildForm() {
          this.persona.identidicacion="";
          this.persona.nombre="";

          this.formGroup = this.formBuilder.group({ 
          identidicacion : [this.persona.identidicacion, [Validators.required, Validators.maxLength(10)]],
          nombre : [this.persona.nombre, Validators.required]

    });
  }

  get contol(){
    return this.formGroup.controls;
  }

  onSubmit(){
    if(this.formGroup.invalid)
      return;
    this.

  }

 


    

}
